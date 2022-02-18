import { useContext } from "react";
import Button01 from "../../../commons/buttons/01";
import Input01 from "../../../commons/inputs/01";

interface IProps {
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  register: any;
  handleSubmit: any;
  formState: any;
  isEdit: boolean;
}

export default function FleamarketRegUI(props: IProps) {
  return (
    <form
      onSubmit={
        props.isEdit
          ? props.handleSubmit(props.onClickSubmit)
          : props.handleSubmit(props.onClickUpdate)
      }
    >
      상품명
      <Input01 type="text" register={props.register("name")} />
      <div>{props.formState.errors.name?.message}</div>
      한줄요약
      <Input01 type="text" register={props.register("remarks")} />
      <div>{props.formState.errors.remarks?.message}</div>
      상품설명
      <Input01 type="text" register={props.register("contents")} />
      <div>{props.formState.errors.contents?.message}</div>
      판매가격
      <Input01 type="text" register={props.register("price")} />
      <div>{props.formState.errors.price?.message}</div>
      {/* 태그
      <Input01 type="text" register={props.register("tags")} />
      <div>{props.formState.errors.tags?.message}</div> */}
      {/* 상세주소
      <Input01 type="text" register={props.register("useditemAddress")} />
      <div>{props.formState.errors.useditemAddress.message}</div> */}
      <Button01
        isValid={props.formState?.isValid}
        name={props.isEdit ? "등록하기" : "수정하기"}
      />
    </form>
  );
}
//             name, remarks, contents, price, tags, useditemAddress, images
// input text 상품명, 한줄요약, 상품설명, 판매가격, 태그입력, 주소, 사진
// button 등록하기
