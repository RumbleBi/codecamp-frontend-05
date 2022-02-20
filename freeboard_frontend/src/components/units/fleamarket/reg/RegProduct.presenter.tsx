import Button01 from "../../../commons/buttons/01";
import Input01 from "../../../commons/inputs/01";
import * as S from "./RegProduct.styles";
import { v4 as uuidv4 } from "uuid";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import { useContext } from "react";
import { RegContext } from "../../../../../pages/fleamarket/[useditemId]/edit";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

interface IFleamarketRegUIProps {
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  register: any;
  handleSubmit: any;
  formState: any;
  isEdit: boolean;
}

export default function FleamarketRegUI(props: IFleamarketRegUIProps) {
  const { isEdit } = useContext(RegContext);
  return (
    <S.Position>
      {props.isOpen && (
        <Modal visible={true}>
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
      <S.Wrapper>
        <S.InputWrapper>
          <S.FormContentWrapper>
            <S.ContentTitle>상품명</S.ContentTitle>
            <Input01 type="text" register={props.register("name")} />
            <S.ErrorMessage>
              {props.formState.errors.name?.message}
            </S.ErrorMessage>
            <S.ContentTitle>한줄요약</S.ContentTitle>
            <Input01 type="text" register={props.register("remarks")} />
            <S.ErrorMessage>
              {props.formState.errors.remarks?.message}
            </S.ErrorMessage>
            <S.ContentTitle>상품설명</S.ContentTitle>
            <Input01 type="text" register={props.register("contents")} />
            <S.ErrorMessage>
              {props.formState.errors.contents?.message}
            </S.ErrorMessage>
            <S.ContentTitle>판매가격</S.ContentTitle>
            <Input01 type="text" register={props.register("price")} />
            <S.ErrorMessage>
              {props.formState.errors.price?.message}
            </S.ErrorMessage>
            <S.ContentTitle>태그입력</S.ContentTitle>
            <Input01 type="text" register={props.register("tags")} />
            <S.ErrorMessage>
              {props.formState.errors.tags?.message}
            </S.ErrorMessage>
          </S.FormContentWrapper>
        </S.InputWrapper>
        <S.ContentWrapper>
          <S.PostTitle>주소</S.PostTitle>
          <S.PostWrapper>
            <S.PostZipcode
              placeholder="00000"
              readOnly
              value={
                props.zipcode ||
                props.data?.fetchUseditem?.useditemAddress?.zipcode ||
                ""
              }
            />
            <S.PostSearchBtn onClick={props.onClickAddressSearch}>
              우편번호검색
            </S.PostSearchBtn>
            <S.PostInput
              readOnly
              value={
                props.address ||
                props.data?.fetchUseditem.useditemAddress?.address ||
                ""
              }
            />
            <S.PostInput
              onChange={props.onChangeAddressDetail}
              defaultValue={
                props.data?.fetchUseditem.useditemAddress?.addressDetail || ""
              }
            />
          </S.PostWrapper>
          <S.ImageWrapper>
            <S.ImageTitle>사진첨부</S.ImageTitle>
            {props.fileUrls.map((el, index) => (
              <Uploads01
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </S.ImageWrapper>
        </S.ContentWrapper>
        <S.ButtonWrapper
          onSubmit={
            isEdit
              ? props.handleSubmit(props.onClickUpdate)
              : props.handleSubmit(props.onClickSubmit)
          }
        >
          <Button01
            isValid={props.formState?.isValid}
            name={isEdit ? "수정하기" : "등록하기"}
          />
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.Position>
  );
}
//             name, remarks, contents, price, tags, useditemAddress, images
// input text 상품명, 한줄요약, 상품설명, 판매가격, 태그입력, 주소, 사진
// button 등록하기
