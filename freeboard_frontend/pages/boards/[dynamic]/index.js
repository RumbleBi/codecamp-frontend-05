import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import * as S from "../../../styles/emotion2";
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      createdAt
    }
  }
`;
// 여기서 요청하고싶은 내용을 추가하면 왜 나머지 데이터들이 안나오지??
export default function FreeBoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.dynamic) },
  });

  return (
    <S.Page>
      <S.Wrapper>
        <S.Header>
          {/* <S.HeaderIcon src=""></S.HeaderIcon> */}
          <S.HeaderForm>
            <S.HeaderFormWriter>{data?.fetchBoard.writer}</S.HeaderFormWriter>
            <S.HeaderFormCreateAt>
              {data?.fetchBoard.createAt}
            </S.HeaderFormCreateAt>
          </S.HeaderForm>
          {/* <S.HeaderIcon2 src=""></S.HeaderIcon2> */}
        </S.Header>
        <S.Body>
          <S.BodyTitle>{data?.fetchBoard.title}</S.BodyTitle>
          <S.BodyContents>{data?.fetchBoard.contents}</S.BodyContents>
        </S.Body>
        <S.Bottom>
          <S.BottomButton>목록으로</S.BottomButton>
          <S.BottomButton>수정하기</S.BottomButton>
          <S.BottomButton>삭제하기</S.BottomButton>
        </S.Bottom>
      </S.Wrapper>
    </S.Page>
  );
}
