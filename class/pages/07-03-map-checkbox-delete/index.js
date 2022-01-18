import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      createdAt
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

const Column = styled.div`
  width: 20%;
`;

const Row = styled.div`
  display: flex;
`;

export default function MapCheckboxDeletePage() {
  //const { data: 변경가능 } = useQuery() data 변수 이름변경 가능!!
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = (event) => {
    deleteBoard({
      variables: {
        number: Number(event.target.id),
      }, //html 에서 받아온거기 때문에 넘버타입으로 변환.
      refetchQueries: [{ query: FETCH_BOARDS }], //만약 FETCH_BOARDS에 variables가 들어있었다먄 , 하고 넣어줘야한다. 리패치를 해야지 삭제를하면 새로고침필요없이 바로 삭제된게보임
    });
    event.target.id; // === number 왜냐 버튼에 id=넣었으니까
  }; //js는 map함수에서 반복된 것들을 기억해 두려고 하기 때문에, 고유한 값을 사용해주면 체크박스 부분이 사라진다. 하지 않으면 체크박스는 남아있다.
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <Row key={el.number}>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{el.number}</Column>
          <Column>{el.title}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.createdAt}</Column>
          <Column>
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </Column>
        </Row>
      ))}
    </div>
  );
}
