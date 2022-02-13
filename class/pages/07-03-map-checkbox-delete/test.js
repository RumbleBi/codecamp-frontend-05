import { useQuery, gql, useMutation } from "@apollo/client";

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

export default function test() {
  const { data } = useQuery(FETCH_BOARDS); // FETCH_BOARDS 옆에 variables 를 넣게된다면, 아래 리패치 부분도 똑같이 내용을 넣어줘야한다.
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = (event) => {
    deleteBoard({
      variables: {
        number: Number(event.target.id),
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
    event.target.id;
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el.number}>
          <div>{el.number}</div>
          <div>{el.title}</div>
          <div>{el.writer}</div>
          <div>{el.createdAt}</div>
          <div>
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
