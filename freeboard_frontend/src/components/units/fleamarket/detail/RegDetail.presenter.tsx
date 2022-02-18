import Button01 from "../../../commons/buttons/01";
import * as S from "./RegDetail.styles";
export default function RegDetailUI(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit(props.onClickMoveToMain)}>
        <Button01 isValid={props.formState?.isValid} name={"목록으로"} />
      </form>
      <form onSubmit={props.handleSubmit(props.onClickMoveToEdit)}>
        <Button01 isValid={props.formState?.isValid} name={"수정하기"} />
      </form>
      <form onSubmit={props.handleSubmit(props.onClickDeleteUseditem)}>
        <Button01 isValid={props.formState?.isValid} name={"삭제하기"} />
      </form>
      <S.Wrapper>
        <div>{props.data?.fetchUseditem?.name}</div>
        <div>{props.data?.fetchUseditem?.remarks}</div>
        <div>{props.data?.fetchUseditem?.contents}</div>
        <div>{props.data?.fetchUseditem?.price}</div>
      </S.Wrapper>
    </div>
  );
}
