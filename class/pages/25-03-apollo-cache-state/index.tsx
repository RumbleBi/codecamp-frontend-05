import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;
// 밑에 중괄호 없는건 객체로 받지 않기 때문에!!

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;
// 다받는 이유, 스테이트로 직접 수정을 할것이기 때문이다 덕분에 refetch 할 필요가 없어짐!! 효율적이고 성능적으로 굿!!

export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  // async 는 가장 나중에 되는 곳에다 박기!!
  const onClickDelete = (boardId: string) => async () => {
    // 삭제 로직
    await deleteBoard({
      variables: { boardId: boardId },
      //   refetchQueries: [],
      // apollo state에 있는 캐시를 가져오는방법이다. 리패치할 양이 많아지면 효율적이지 못하기 때문!! cache는 아폴로캐시 데이터, data는 크리에이트하고 받은 데이터
      update(cache, { data }) {
        const deletedId = data.deleteBoard; // 삭제할 게시글 id를 정의한다.

        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              // 직접적으로 prev에서 el._id 와 같이 특정할 수 없기 때문에 아폴로에서 제공한 함수를 쓴다.
              // prev 안에 기존 n개의 데이터가 존재 즉, => n-1 개로 변경해야 함.
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              ); // deletedId 가 일치하지 않는 것들만 걸러내서 리턴으로 스프레드를 사용해 보여준다. 일치하는 것은 삭제해야할 녀석!
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onClickSubmit = async () => {
    // 등록하기 로직
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "dd",
          password: "1234",
          contents: "zz",
        },
      },
      //   refetchQueries: [],
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev]; // prev를 뒤로 둔 이유: 게시글 목록 맨 위가 가장 최근꺼 순으로 보여주기 위해서
              // [{writer: "영희" ...} {기존 게시글}]
            },
          },
        });
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
// 원래 (el._id)옆에 (event)가 붙어야 하지만 js에서 알아서해주기때문에 붙이지 않는다. 딜리트함수도 같은 이유에서 () 로 만든다.
