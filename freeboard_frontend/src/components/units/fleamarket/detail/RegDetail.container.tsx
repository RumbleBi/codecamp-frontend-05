import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import RegDetailUI from "./RegDetail.presenter";
import { DELETE_USED_ITEM, FETCH_USED_ITEM } from "./RegDetail.queries";

export default function RegDetail() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });

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
  return (
    <RegDetailUI
      data={data}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickDeleteUseditem={onClickDeleteUseditem}
      onClickMoveToMain={onClickMoveToMain}
      onClickMoveToEdit={onClickMoveToEdit}
    />
  );
}
