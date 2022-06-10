import * as S from './MypagePicked.styles'
import { v4 as uuidv4 } from 'uuid'

export default function MypagePickedUI(props) {
  return (
    <S.Position>
      <S.Title>내가찜한상품</S.Title>
      <S.Wrapper>
        <S.MenuBar>
          <S.FirstMenu onClick={props.onClickPointInfo}>포인트내역</S.FirstMenu>
          <div onClick={props.onClickPWChange}>비밀번호변경</div>
          <div onClick={props.onClickSelling}>상품판매내역</div>
          <div onClick={props.onClickBuying}>상품구매내역</div>
          <div onClick={props.onClickPickedList}>내가찜한상품</div>
        </S.MenuBar>
        <S.ViewWrapper></S.ViewWrapper>
        {/*
        <S.PickedList>
          {props.data?.fetchUseditemsIPicked.map((el) => (
            <S.PickedElement key={el._id}>
              <S.Name>게시자: {el.name}</S.Name>
              <S.Remarks>리마크: {el.remarks}</S.Remarks>
              <S.Contents>내용: {el.contents}</S.Contents>
              <S.Price>가격: {el.price}</S.Price>
              <div>
                {el.images
                  ?.filter((el: string) => el)
                  .map((el: string) => (
                    <S.Image
                      key={uuidv4()}
                      src={`https://storage.googleapis.com/${el}`}
                    />
                  ))}
              </div>
            </S.PickedElement>
          ))}
        </S.PickedList> */}
      </S.Wrapper>
    </S.Position>
  )
}
