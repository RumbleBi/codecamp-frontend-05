import Button01 from "../../../commons/buttons/01";

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
    </div>
  );
}
