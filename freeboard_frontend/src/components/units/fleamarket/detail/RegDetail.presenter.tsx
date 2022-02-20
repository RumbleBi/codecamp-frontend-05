import Button01 from "../../../commons/buttons/01";
import * as S from "./RegDetail.styles";
export default function RegDetailUI(props) {
  return (
    <S.Position>
      <S.Wrapper>
        <S.ProfileWrapper>
          <S.Name>{props.data?.fetchUseditem?.name}</S.Name>
          <S.CreatedAt>
            {props.data?.fetchUseditem?.createdAt.slice(0, 10)}
          </S.CreatedAt>
        </S.ProfileWrapper>
        <S.UseditemDetailWrapper>
          <S.Remarks>{props.data?.fetchUseditem?.remarks}</S.Remarks>
          <S.Contents>{props.data?.fetchUseditem?.contents}</S.Contents>
          <S.Price>{props.data?.fetchUseditem?.price}</S.Price>
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
        <S.Zipcode>
          {props.data?.fetchUseditem?.useditemAddress?.zipcode}
        </S.Zipcode>
        <S.Address>
          {props.data?.fetchUseditem?.useditemAddress?.address}
        </S.Address>
        <S.AddressDetail>
          {props.data?.fetchUseditem?.useditemAddress?.addressDetail}
        </S.AddressDetail>
        <S.ButtonWrapper>
          <form onSubmit={props.handleSubmit(props.onClickMoveToMain)}>
            <Button01 isValid={props.formState?.isValid} name={"목록으로"} />
          </form>
          <form onSubmit={props.handleSubmit(props.onClickMoveToEdit)}>
            <Button01 isValid={props.formState?.isValid} name={"수정하기"} />
          </form>
          <form onSubmit={props.handleSubmit(props.onClickDeleteUseditem)}>
            <Button01 isValid={props.formState?.isValid} name={"삭제하기"} />
          </form>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.Position>
  );
}
