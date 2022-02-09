import { getDate } from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";
import * as S from "./BoardList.styles";
import Paginations01 from "../../../commons/layout/paginations/01/Paginations01.container";
import { v4 as uuidv4 } from "uuid";
export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <S.SearchInput
        type="text"
        placeholder="검색어를 적어주세요."
        onChange={props.onChangeSearch}
      />
      {props.data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>작성자 : {el.writer} | </span>
          <span>
            제목 :
            {el.title
              .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
              .split("#$%")
              .map((el) => (
                <S.Word key={uuidv4()} isMatched={el === props.keyword}>
                  {el}
                </S.Word>
              ))}{" "}
          </span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={uuidv4()} onClick={props.onClickPage} id={String(index + 1)}>
          {` ${index + 1} `}
        </span>
      ))}
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
        <S.Pagination01Wrapper>
          <Paginations01 refetch={props.refetch} count={props.count} />
        </S.Pagination01Wrapper>
        <S.BoardCreate onClick={props.onClickMoveBoardWrite}>
          <S.WriteIcon src="/images/board/list/write_icon.png" />
          게시물등록하기
        </S.BoardCreate>
      </S.ListWrapperBottom>
    </S.Wrapper>
  );
}
