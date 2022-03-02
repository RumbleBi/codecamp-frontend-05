import { useMutation, gql, useQuery } from "@apollo/client";
const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      likeCount
      _id
    }
  }
`;
export default function OptimisticUIPage() {
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: "6217021d8cd4860029b4ca6f" } } // 아폴로캐시에 값이 저장된다..
  );

  const onClickOptimisticUI = () => {
    likeBoard({
      variables: { boardId: "6217021d8cd4860029b4ca6f" },
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: { boardId: "6217021d8cd4860029b4ca6f" },
      //     },
      //   ],
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      }, // 임시 데이터 생성

      update(cache, { data }) {
        cache.writeQuery({
          // 캐시에 있는 데이터를 직접 수정하겠다는 의미
          query: FETCH_BOARD,
          variables: { boardId: "6217021d8cd4860029b4ca6f" },
          data: {
            fetchBoard: {
              _id: "6217021d8cd4860029b4ca6f", // _id를 기준으로 수정을 하기 때문에 꼭 적어주자
              likeCount: data?.likeBoard, // 실제 좋아요 갯수 playground보면 Int! 값을 불러온다는 뜻
              __typename: "Board", // playground fetchBoard 의 노란색 Board! 의 뜻
            },
          },
        });
      },
    });
  };
  return (
    <div>
      <h1>옵티미스틱UI</h1>
      <div>좋아요수: {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUI}>좋아요 올리기!!</button>
    </div>
  );
}
