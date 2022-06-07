import Button02 from '../../../commons/buttons/02'
import * as S from './RegDetail.styles'
import Dompurify from 'dompurify'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

export default function RegDetailUI(props) {
  console.log(props.userData?.fetchUserLoggedIn._id)
  console.log('-------------------')
  console.log(props.data?.fetchUseditem.seller._id)
  return (
    <S.Position>
      <S.Wrapper>
        <S.Title>상세페이지</S.Title>
        <S.ProfileWrapper>
          <S.Name>상품명 : {props.data?.fetchUseditem?.name}</S.Name>
          <S.CreatedAt>
            {props.data?.fetchUseditem?.createdAt.slice(0, 10)}
          </S.CreatedAt>
        </S.ProfileWrapper>
        <S.UseditemDetailWrapper>
          <S.Remarks>제목 : {props.data?.fetchUseditem?.remarks}</S.Remarks>
          <S.Price>가격 : {props.data?.fetchUseditem?.price}</S.Price>
          <S.Address>
            <S.AddressTitle>거래장소 : </S.AddressTitle>
            <div>{props.data?.fetchUseditem?.useditemAddress?.address}</div>
            <S.AddressDetail>
              {props.data?.fetchUseditem?.useditemAddress?.addressDetail}
            </S.AddressDetail>
          </S.Address>
          {process.browser ? (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(
                  String(props.data?.fetchUseditem?.contents)
                ),
              }}
            ></S.Contents>
          ) : (
            <div />
          )}
          <S.PickitemWrapper>
            {props.myPick === true ? (
              <BsHeartFill
                onClick={props.onClickMyPickCancel}
                style={{ cursor: 'pointer' }}
              />
            ) : (
              <BsHeart
                onClick={props.onClickMyPick}
                style={{ cursor: 'pointer' }}
              />
            )}
          </S.PickitemWrapper>
          <S.ImageWrapper>
            {props.data?.fetchUseditem?.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <S.Image
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </S.ImageWrapper>
        </S.UseditemDetailWrapper>
        {props.userData?.fetchUserLoggedIn._id ===
        props.data?.fetchUseditem.seller._id ? (
          <S.ButtonWrapper>
            <Button02 onClick={props.onClickMoveToMain} name={'목록으로'} />
            <Button02 onClick={props.onClickMoveToEdit} name={'수정하기'} />
            <Button02 onClick={props.onClickDeleteUseditem} name={'삭제하기'} />
          </S.ButtonWrapper>
        ) : (
          <S.ButtonWrapper>
            <Button02 onClick={props.onClickMoveToMain} name={'목록으로'} />
            <Button02 onClick={props.onClickBuyUseditem} name={'구입하기'} />
          </S.ButtonWrapper>
        )}
      </S.Wrapper>
    </S.Position>
  )
}
