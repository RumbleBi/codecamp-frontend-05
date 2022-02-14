import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import FleamarketMainUI from "./fleamarketMain.presenter";
import { FETCH_USER_LOGGED_IN } from "./fleamarketMain.queries";
export default function FleamarketMain() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  console.log(data?.fetchUserLoggedIn.name);
  return <FleamarketMainUI data={data} />;
}
