import Button01 from '../../../commons/buttons/01'
import Input01 from '../../../commons/inputs/01'
import * as S from './RegProduct.styles'
import { v4 as uuidv4 } from 'uuid'
import Uploads01 from '../../../commons/uploads/01/Uploads01.container'
import { ChangeEvent, useContext } from 'react'
import { RegContext } from '../../../../../pages/fleamarket/[useditemId]/edit'
import { Modal } from 'antd'
import DaumPostcode from 'react-daum-postcode'
// 웹 에디터 추가
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
interface IFleamarketRegUIProps {
  onClickSubmit: () => void
  onClickUpdate: () => void
  onClickAddressCancel: () => void
  onCompleteAddressSearch: () => void
  onChangeTags: any
  register: any
  handleSubmit: any
  formState: any
  isEdit: boolean
}
// 웹 에디터 추가
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

export default function FleamarketRegUI(props: IFleamarketRegUIProps) {
  const { isEdit } = useContext(RegContext)
  return (
    <S.Position>
      {props.isOpen && (
        <Modal
          visible={true}
          width={700}
          closable={false}
          cancelText={'취소'}
          okText={'확인'}
          onOk={props.onCompleteAddressSearch}
          onCancel={props.onClickAddressCancel}
        >
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
      <S.Wrapper>
        <S.Logo>중고상품 등록하기</S.Logo>
        <S.FormContentWrapper>
          <S.ContentInfo>상품명</S.ContentInfo>
          <Input01 type="text" register={props.register('name')} />
          <S.ErrorMessage>
            {props.formState.errors.name?.message}
          </S.ErrorMessage>
          <S.ContentInfo>제목</S.ContentInfo>
          <Input01 type="text" register={props.register('remarks')} />
          <S.ErrorMessage>
            {props.formState.errors.remarks?.message}
          </S.ErrorMessage>
          <S.ContentInfo>내용</S.ContentInfo>
          <S.ContentInput>
            {process.browser && <ReactQuill onChange={props.handleChange} />}
          </S.ContentInput>
          <S.ErrorMessage>
            {props.formState.errors.contents?.message}
          </S.ErrorMessage>
          <S.ContentInfo>판매가격</S.ContentInfo>
          <Input01 type="text" register={props.register('price')} />
          <S.ErrorMessage>
            {props.formState.errors.price?.message}
          </S.ErrorMessage>
          <S.ContentInfo>태그입력 ( #으로 구분 ) </S.ContentInfo>
          <S.TagsInput
            type="text"
            onChange={props.onChangeTags}
            defaultValue={'#'}
          />
          <S.ErrorMessage>
            {props.formState.errors.tags?.message}
          </S.ErrorMessage>
        </S.FormContentWrapper>
        <S.ContentWrapper>
          <S.PostTitle>주소</S.PostTitle>
          <S.PostNumberWrapper>
            <S.PostZipcode
              placeholder="00000"
              readOnly
              value={
                props.zipcode ||
                props.data?.fetchUseditem?.useditemAddress?.zipcode ||
                ''
              }
            />
            <S.PostSearchBtn onClick={props.onClickAddressSearch}>
              우편번호검색
            </S.PostSearchBtn>
          </S.PostNumberWrapper>
          <S.PostWrapper>
            <S.PostInput
              readOnly
              value={
                props.address ||
                props.data?.fetchUseditem.useditemAddress?.address ||
                ''
              }
            />
            <S.PostInput
              onChange={props.onChangeAddressDetail}
              defaultValue={
                props.data?.fetchUseditem.useditemAddress?.addressDetail || ''
              }
            />
          </S.PostWrapper>
          <S.ImageWrapper>
            <S.ImageTitle>사진첨부</S.ImageTitle>
            <S.ImageInputs>
              {props.fileUrls?.map((el, index) => (
                <Uploads01
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              ))}
            </S.ImageInputs>
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
            name={isEdit ? '수정하기' : '등록하기'}
          />
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.Position>
  )
}
