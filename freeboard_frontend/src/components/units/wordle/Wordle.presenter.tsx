import * as S from "./Wordle.styles";

export default function WordlePageUI(props: any) {
  return (
    <S.HomeWrapper>
      <S.WordInput0
        ref={props.first}
        maxLength={1}
        onChange={props.onChangeInput0}
        isCorrect0={props.isCorrect0}
      />
      <S.WordInput1
        maxLength={1}
        onChange={props.onChangeInput1}
        isCorrect1={props.isCorrect1}
      />
      <S.WordInput2
        maxLength={1}
        onChange={props.onChangeInput2}
        isCorrect2={props.isCorrect2}
      />
      <S.WordInput3
        maxLength={1}
        onChange={props.onChangeInput3}
        isCorrect3={props.isCorrect3}
      />
      <S.WordInput4
        maxLength={1}
        onChange={props.onChangeInput4}
        isCorrect4={props.isCorrect4}
      />
      <S.SubmitBtn onClick={props.onClickSubmit}>제출</S.SubmitBtn>
    </S.HomeWrapper>
  );
}
