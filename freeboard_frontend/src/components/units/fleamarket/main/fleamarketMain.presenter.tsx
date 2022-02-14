import { Fragment } from "react";

export default function FleamarketMainUI(props) {
  return (
    <Fragment>
      <div>{props.data?.fetchUserLoggedIn.name}님 환영합니다!</div>
    </Fragment>
  );
}
