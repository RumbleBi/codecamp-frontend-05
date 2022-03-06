import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useFetchUserInfo } from "../../../commons/hooks/useUserLoggedIn";
import RegDetailUI from "./RegDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  TOGGLE_USEDITEM_PICK,
} from "./RegDetail.queries";

export default function RegDetail() {
  const router = useRouter();
  const [myPick, setMyPick] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const { data: userData } = useFetchUserInfo();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });
  const onClickMyPick = async () => {
    try {
      setMyPick((prev) => !prev);
      await toggleUseditemPick({
        variables: { useditemId: String(router.query.useditemId) },
      });
      console.log(router.query.useditemId);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickMoveToMain = () => {
    router.push("/fleamarket/main");
  };
  const onClickMoveToEdit = () => {
    router.push(`/fleamarket/${router.query.useditemId}/edit`);
  };
  const onClickDeleteUseditem = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: String(router.query.useditemId) },
      });
      Modal.success({ content: "삭제가 완료되었습니다." });
      router.push("/fleamarket/main");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickBuyUseditem = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: router.query.useditemId },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <RegDetailUI
      data={data && data}
      userData={userData}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickDeleteUseditem={onClickDeleteUseditem}
      onClickMoveToMain={onClickMoveToMain}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMyPick={onClickMyPick}
      myPick={myPick}
      onClickBuyUseditem={onClickBuyUseditem}
    />
  );
}
