import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";
import MypagePickedUI from "./MypagePicked.presenter";
import { FETCH_USEDITEMS_I_PICKED } from "./MypagePicked.queries";

export default function MypagePicked() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_I_PICKED, {
    variables: {
      search: "",
      page: 1,
    },
  });

  const onClickBack = () => {
    router.push("/fleamarket/mypage");
  };

  return <MypagePickedUI data={data} onClickBack={onClickBack} />;
}
