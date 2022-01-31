import { getDate } from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";
import * as S from "./BoardList.styles";
import Paginations01 from "../../../commons/layout/paginations/01/Paginations01.container";

export default function BoardListUI(props: IBoardListUIProps) {
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
          <S.ListIndex>{getDate(el.createdAt)}</S.ListIndex>
        </S.ListWrapperBody>
      ))}
      <S.ListWrapperBottom>
        <Paginations01 refetch={props.refetch} count={props.count} />
        <S.BoardCreate onClick={props.onClickMoveBoardWrite}>
          <S.WriteIcon src="/images/board/list/write_icon.png" />
          <span>게시물등록하기</span>
        </S.BoardCreate>
      </S.ListWrapperBottom>
    </S.Wrapper>
  );
}
