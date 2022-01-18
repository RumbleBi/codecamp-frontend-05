import * as S from "./Dynamic-routed.styles";
export default function DynamicRoutedPageUI(props) {
  console.log(props.data);
  return (
    <>
      <S.TEST>게시한시간:{props.data?.fetchBoard.createdAt}</S.TEST>
      <S.TEST>작성자: {props.data?.fetchBoard.writer}</S.TEST>
      <S.TEST>제목: {props.data?.fetchBoard.title}</S.TEST>
      <S.TEST>내용: {props.data?.fetchBoard.contents}</S.TEST>
    </>
  );
}
