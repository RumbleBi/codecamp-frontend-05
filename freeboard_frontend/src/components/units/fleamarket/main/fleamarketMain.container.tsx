import { useQuery } from "@apollo/client";
import { withAuth } from "../../../../commons/hocs/withAuth";
import { IQuery } from "../../../../commons/types/generated/types";
import FleamarketMainUI from "./fleamarketMain.presenter";
import { FETCH_USER_LOGGED_IN } from "./fleamarketMain.queries";

function FleamarketMain() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  console.log(data?.fetchUserLoggedIn.name);
  return <FleamarketMainUI data={data} />;
}

export default withAuth(FleamarketMain);
