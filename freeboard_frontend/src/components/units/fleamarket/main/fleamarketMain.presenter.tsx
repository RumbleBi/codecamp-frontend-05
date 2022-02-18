import { Fragment } from "react";

export default function FleamarketMainUI(props) {
  return (
    <Fragment>
      <div>{props.data?.fetchUserLoggedIn.name}님 환영합니다!</div>
      <button onClick={props.onClickReg}>게시물등록하기</button>
    </Fragment>
  );
}
