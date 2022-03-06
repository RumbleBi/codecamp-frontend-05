import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
} from "../../../../commons/types/generated/types";
import MypageUI from "./MyPage.presenter";
import { FETCH_POINT_TRANSACTIONS } from "./MyPage.queries";
import { useRouter } from "next/router";
export default function Mypage() {
  const router = useRouter();
  // 포인트 내역 (충전, 적립, 사용)
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchPointTransactions">,
    IQueryFetchPointTransactionsArgs
  >(FETCH_POINT_TRANSACTIONS, {
    variables: { page: 1, search: "" },
  });
  const onClickMyPickPage = () => {
    router.push("/fleamarket/mypage/pickedList");
  };
  const onClickChangePwPage = () => {
    router.push("/fleamarket/mypage/changePw");
  };

  console.log(data);
  return (
    <MypageUI
      data={data}
      refetch={refetch}
      onClickMyPickPage={onClickMyPickPage}
      onClickChangePwPage={onClickChangePwPage}
    />
  );
}
