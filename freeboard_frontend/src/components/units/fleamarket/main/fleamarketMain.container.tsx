import { useQuery } from "@apollo/client";
import { withAuth } from "../../../../components/commons/hocs/withAuth";
import { IQuery } from "../../../../commons/types/generated/types";
import FleamarketMainUI from "./fleamarketMain.presenter";
import { FETCH_USER_LOGGED_IN } from "./fleamarketMain.queries";

export default function FleamarketMain() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  console.log(data?.fetchUserLoggedIn.name);
  return <FleamarketMainUI data={data} />;
}
// 일단 메인페이지 비로그인해도 로그인 가능하게 해놓음 바꿀수도있음.
