import * as S from "./Wordle.styles";

export default function WordlePageUI(props: any) {
  return (
    <S.HomeWrapper>
      <S.WordInput0 maxLength={1} onChange={props.onChangeInput0} />
      <S.WordInput1 maxLength={1} onChange={props.onChangeInput1} />
      <S.WordInput2 maxLength={1} onChange={props.onChangeInput2} />
      <S.WordInput3 maxLength={1} onChange={props.onChangeInput3} />
      <S.WordInput4 maxLength={1} onChange={props.onChangeInput4} />
      <S.SubmitBtn onClick={props.onClickSubmit}>제출</S.SubmitBtn>
    </S.HomeWrapper>
  );
}
