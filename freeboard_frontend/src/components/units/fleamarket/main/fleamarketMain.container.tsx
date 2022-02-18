import { useQuery } from "@apollo/client";
import { withAuth } from "../../../../components/commons/hocs/withAuth";
import { IQuery } from "../../../../commons/types/generated/types";
import FleamarketMainUI from "./fleamarketMain.presenter";
import { FETCH_USER_LOGGED_IN } from "./fleamarketMain.queries";
import router from "next/router";

export default function FleamarketMain() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  console.log(data?.fetchUserLoggedIn.name);

  const onClickReg = () => {
    router.push("/fleamarket/reg");
  };
  return <FleamarketMainUI data={data} onClickReg={onClickReg} />;
}
// 일단 메인페이지 비로그인해도 로그인 가능하게 해놓음 바꿀수도있음.
