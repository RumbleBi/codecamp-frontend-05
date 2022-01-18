import * as S from "./BoardList.styles";

export default function BoardListUI(props) {
  return (
    <div>
      {props.data?.fetchBoards.map((el, index) => (
        <S.Wrapper>
          <S.ListWrapper>
            <S.ListDetail>번호</S.ListDetail>
            <S.ListDetail>제목</S.ListDetail>
            <S.ListDetail>작성자</S.ListDetail>
            <S.ListDetail>날짜</S.ListDetail>

            {/* <S.ListIndex>{props.el.boardNum}</S.ListIndex> */}
            <S.ListIndex>{props?.el.title}</S.ListIndex>
            <S.ListIndex>{props?.el.contents}</S.ListIndex>
            <S.ListIndex>{props?.el.createdAt}</S.ListIndex>
          </S.ListWrapper>
          <S.BoardCreate>게시물등록하기</S.BoardCreate>
        </S.Wrapper>
      ))}
    </div>
  );
}
