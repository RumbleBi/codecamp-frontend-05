import * as S from "./wordle.styles";

export default function WordlePageUI(props: any) {
  return (
    <S.HomeWrapper>
      <S.WordInput1 maxLength={1} onChange={props.onChangeInput1} />
      <S.WordInput2 maxLength={1} onChange={props.onChangeInput2} />
      <S.WordInput3 maxLength={1} onChange={props.onChangeInput3} />
      <S.WordInput4 maxLength={1} onChange={props.onChangeInput4} />
      <S.WordInput5 maxLength={1} onChange={props.onChangeInput5} />
      <S.SubmitBtn onClick={props.onClickSubmit}>제출</S.SubmitBtn>
    </S.HomeWrapper>
  );
}
