import { gql, useQuery } from "@apollo/client";
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

const Column = styled.div`
  width: 20%;
`;

const Row = styled.div`
  display: flex;
`;

export default function MapCheckboxPage() {
  //const { data: 원하는변수명 } = useQuery() data 변수 이름변경 가능!!
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <Row>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{el.number}</Column>
          <Column>{el.title}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.createdAt}</Column>
        </Row>
      ))}
    </div>
  );
}
