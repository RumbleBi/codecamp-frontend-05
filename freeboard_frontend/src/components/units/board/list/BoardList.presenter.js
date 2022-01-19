import * as S from "./BoardList.styles";

export default function BoardListUI(props) {
  return (
    <S.Wrapper>
      <S.ListWrapperTop>
        <S.ListDetail>번호</S.ListDetail>
        <S.ListDetail>제목</S.ListDetail>
        <S.ListDetail>작성자</S.ListDetail>
        <S.ListDetail>날짜</S.ListDetail>
      </S.ListWrapperTop>
      {props.data?.fetchBoards.map((el, index) => (
        <S.ListWrapperBody key={el._id}>
          <S.ListIndex>{index + 1}</S.ListIndex>
          <S.ListIndex id={el._id} onClick={props.onClickMoveBoardDetail}>
            {el.title}
          </S.ListIndex>
          <S.ListIndex>{el.writer}</S.ListIndex>
          <S.ListIndex>{el.createdAt}</S.ListIndex>
        </S.ListWrapperBody>
      ))}
      <S.BoardCreate onClick={props.onClickMoveBoardWrite}>
        게시물등록하기
      </S.BoardCreate>
    </S.Wrapper>
  );
}
