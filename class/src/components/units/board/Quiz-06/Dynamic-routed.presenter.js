import * as S from "./Dynamic-routed.styles";
export default function DynamicRoutedPageUI(props) {
  return (
    <>
      <S.TEST>{props.data?.fetchBoard.number}번 게시글 페이지 이동 완료</S.TEST>
      <S.TEST>작성자: {props.data?.fetchBoard.writer}</S.TEST>
      <S.TEST>제목: {props.data?.fetchBoard.title}</S.TEST>
      <S.TEST>내용: {props.data?.fetchBoard.contents}</S.TEST>
    </>
  );
}
