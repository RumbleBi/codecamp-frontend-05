import Button01 from '../../../commons/buttons/01'
import * as S from './RegProduct.styles'
import { v4 as uuidv4 } from 'uuid'
import Uploads01 from '../../../commons/uploads/01/Uploads01.container'
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
        <S.Logo>
          {props.isEdit ? '중고상품 수정하기' : '중고상품 등록하기'}
        </S.Logo>
        <S.FormContentWrapper>
          <S.ContentInfo>상품명</S.ContentInfo>
          <form>
            <S.Input
              type="text"
              register={props.register('name')}
              defaultValue={props.data?.fetchUseditem?.name || ''}
            />
          </form>
          <S.ErrorMessage>
            {props.formState.errors.name?.message}
          </S.ErrorMessage>
          <S.ContentInfo>제목</S.ContentInfo>
          <form>
            <S.Input
              type="text"
              register={props.register('remarks')}
              defaultValue={props.data?.fetchUseditem?.remarks || ''}
            />
          </form>
          <S.ErrorMessage>
            {props.formState.errors.remarks?.message}
          </S.ErrorMessage>
          <S.ContentInfo>내용</S.ContentInfo>
          <from>
            <S.ContentInput>
              {process.browser && (
                <ReactQuill
                  defaultValue={props.data?.fetchUseditem?.contents || ''}
                  onChange={props.handleChange}
                />
              )}
            </S.ContentInput>
          </from>
          <S.ErrorMessage>
            {props.formState.errors.contents?.message}
          </S.ErrorMessage>
          <S.ContentInfo>판매가격</S.ContentInfo>
          <form>
            <S.Input
              type="text"
              register={props.register('price')}
              defaultValue={props.data?.fetchUseditem?.price || ''}
            />
          </form>
          <S.ErrorMessage>
            {props.formState.errors.price?.message}
          </S.ErrorMessage>
          <S.ContentInfo>태그입력 (#잇템#가성비#직거래) </S.ContentInfo>
          <S.TagsInput
            placeholder="#잇템#가성비#직거래"
            type="text"
            onChange={props.onChangeTags}
            defaultValue={
              props.data?.fetchUseditem?.tags
                ? '#' + props.data?.fetchUseditem?.tags.join('')
                : ''
            }
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
              defaultValue={
                props.zipcode ||
                props.data?.fetchUseditem?.useditemAddress?.zipcode ||
                ''
              }
            />
            <S.PostSearchBtn
              style={{ fontSize: '16px' }}
              onClick={props.onClickAddressSearch}
            >
              우편번호검색
            </S.PostSearchBtn>
          </S.PostNumberWrapper>
          <S.PostWrapper>
            <S.PostInput
              readOnly
              value={
                props.address ||
                props.data?.fetchUseditem?.useditemAddress?.address ||
                ''
              }
              defaultValue={
                props.address ||
                props.data?.fetchUseditem?.useditemAddress?.address ||
                ''
              }
            />
            <S.PostInput
              onChange={props.onChangeAddressDetail}
              defaultValue={
                props.data?.fetchUseditem?.useditemAddress?.addressDetail || ''
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
            props.isEdit
              ? props.handleSubmit(props.onClickUpdate)
              : props.handleSubmit(props.onClickSubmit)
          }
        >
          <Button01
            isValid={props.formState?.isValid}
            name={props.isEdit ? '수정하기' : '등록하기'}
          />
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.Position>
  )
}
