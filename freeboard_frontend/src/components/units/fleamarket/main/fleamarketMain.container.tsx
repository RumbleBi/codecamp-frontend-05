import { useQuery } from "@apollo/client";
import { withAuth } from "../../../../components/commons/hocs/withAuth";
import {
  IQuery,
  IQueryFetchUseditemArgs,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import FleamarketMainUI from "./fleamarketMain.presenter";
import {
  FETCH_USED_ITEM,
  FETCH_USER_LOGGED_IN,
  FETCH_USED_ITEMS,
} from "./fleamarketMain.queries";
import router from "next/router";

export default function FleamarketMain() {
  // 로그인시 ~~환영멘트용
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  console.log(data?.fetchUserLoggedIn.name);

  // 게시글목록
  const { data: dataItems, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, {
    variables: { page: 1, search: "" },
  });

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

  const onClickMoveToDetail = (id: string) => (event) => {
    router.push(`/fleamarket/${id}`);
  };

  return (
    <FleamarketMainUI
      data={data}
      dataItems={dataItems}
      onClickReg={onClickReg}
      onLoadMore={onLoadMore}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}
// 일단 메인페이지 비로그인해도 로그인 가능하게 해놓음 바꿀수도있음.
