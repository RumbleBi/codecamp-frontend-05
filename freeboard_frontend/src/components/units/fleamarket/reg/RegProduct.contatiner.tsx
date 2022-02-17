import FleamarketRegUI from "./RegProduct.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./RegProduct.queries";
import { useMutation } from "@apollo/client";
import { FormValues } from "./RegProduct.types";
import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";

const schema = yup.object().shape({
  name: yup.string().required("상품명을 입력해 주세요."),
  remarks: yup.string().required("한줄요약을 입력해 주세요."),
  contents: yup.string().required("상품설명을 입력해 주세요."),
  price: yup.number().required("판매가격을 입력해 주세요."),
  // tags: yup.string().required("최소 한 개의 태그를 설정해 주세요."),
  // useditemAddress: yup.string().required("주소를 입력해 주세요."),
});

export default function FleamarketReg() {
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const router = useRouter();
  const { isEdit, setIsEdit } = useContext(GlobalContext);

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onClickSubmit = async (data: FormValues) => {
    setIsEdit(false);
    const { name, remarks, contents, price } = data;
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name,
            remarks,
            contents,
            price,
          },
        },
      });
      router.push(`/fleamarket/${result.data.createUseditem._id}`);
      console.log(result.data);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUpdate = async (data) => {
    setIsEdit(true);
    const { name, remarks, contents, price } = data;
    try {
      await updateUseditem({
        variables: {
          updateUseditemInput: {
            name,
            remarks,
            contents,
            price,
          },
          useditemId: router.query.useditemId,
        },
      });
      router.push(`/fleamarket/${router.query.useditemId}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <FleamarketRegUI
      onClickSubmit={onClickSubmit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickUpdate={onClickUpdate}
      isEdit={isEdit}
    />
  );
}
//            name, remarks, contents, price, tags, useditemAddress, images
// input text 상품명, 한줄요약, 상품설명, 판매가격, 태그입력, 주소, 사진
// button 등록하기
