import { useMutation, useQuery } from "@apollo/client";
import { withAuth } from "../../../../components/commons/hocs/withAuth";
import {
  IMutation,
  IQuery,
  IQueryFetchUseditemArgs,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import FleamarketMainUI from "./fleamarketMain.presenter";
import {
  FETCH_USED_ITEM,
  FETCH_USER_LOGGED_IN,
  FETCH_USED_ITEMS,
  LOGOUT_USER,
} from "./fleamarketMain.queries";
import router from "next/router";
import { getDate2 } from "../../../../commons/libraries/utils";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import { useFetchUserInfo } from "../../../commons/hooks/useUserLoggedIn";
export default function FleamarketMain() {
  const { setItem } = useContext(GlobalContext);
  const [keyword, setKeyword] = useState("");
  const [logoutUser] = useMutation(LOGOUT_USER);

  // 로그인시 ~~환영멘트용
  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const { data } = useFetchUserInfo();
  // 게시글목록
  const {
    data: dataItems,
    fetchMore,
    refetch,
  } = useQuery<Pick<IQuery, "fetchUseditems">, IQueryFetchUseditemsArgs>(
    FETCH_USED_ITEMS,
    {
      variables: { page: 1, search: "" },
    }
  );

  // 서치바 리패치 부분

  // const { data: dataSearch, refetch } = useQuery(FETCH_USED_ITEMS);

  // 최근본 상품 보이게하기
  const todayDate = getDate2(new Date());

  const onLoadMore = () => {
    if (!dataItems) return;
    fetchMore({
      variables: {
        page: Math.ceil(dataItems?.fetchUseditems?.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems) {
          return { fetchUseditems: [...prev.fetchUseditems] };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  // 게시글 등록하기
  const onClickReg = () => {
    router.push("/fleamarket/reg");
  };
  // 게시글 상세페이지 이동

  const onClickMoveToDetail = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem(todayDate) || "[]");
    const temp = baskets.filter((filterEl) => filterEl._id !== el._id);

    const { __typename, ...plus } = el;
    temp.unshift(plus);
    localStorage.setItem(todayDate, JSON.stringify(temp));
    setItem(temp);
    router.push(`/fleamarket/${el._id}`);
  };

  // 검색페이지
  function onChangeKeyword(value: string) {
    setKeyword(value);
  }
  // 마이페이지
  const onClickMoveToMyPage = () => {
    router.push("/fleamarket/mypage");
  };
  // 충전페이지
  const onClickMoveToPayment = () => {
    router.push("/fleamarket/payment");
  };
  // 로그아웃
  const onClickLogout = async () => {
    await window.location.reload();
    alert("로그아웃되었습니다!");
    // document.cookie = "accessToken=";
    logoutUser();
    router.push("/fleamarket/login");
  };
  return (
    <FleamarketMainUI
      data={data}
      dataItems={dataItems}
      onClickReg={onClickReg}
      onLoadMore={onLoadMore}
      onClickMoveToDetail={onClickMoveToDetail}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
      refetch={refetch}
      onClickMoveToMyPage={onClickMoveToMyPage}
      onClickMoveToPayment={onClickMoveToPayment}
      onClickLogout={onClickLogout}
    />
  );
}
// 일단 메인페이지 비로그인해도 로그인 가능하게 해놓음 바꿀수도있음.
