import * as S from "./Dynamic-routing.styles";
export default function DynamicRoutingPageUI(props) {
  return (
    <>
      <S.Btn onClick={props.onClickMove1}>1번 게시글로 이동하기</S.Btn>
      <S.Btn onClick={props.onClickMove2}>2번 게시글로 이동하기</S.Btn>
      <S.Btn onClick={props.onClickMove3}>3번 게시글로 이동하기</S.Btn>
      <S.Btn onClick={props.onClickMove4}>4번 게시글로 이동하기</S.Btn>
      <S.Btn onClick={props.onClickMove100}>100번 게시글로 이동하기</S.Btn>
      <S.Btn onClick={props.onChangeColor} onChangeColor={props.isActive}>
        색바꾸기
      </S.Btn>
    </>
  );
}
