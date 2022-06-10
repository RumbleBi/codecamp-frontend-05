import * as S from './MypagePointInfo.styles'

export default function MypagePointInfoUI(props) {
  return (
    <S.Position>
      <S.Title>포인트내역</S.Title>
      <S.Wrapper>
        <S.MenuBar>
          <S.FirstMenu onClick={props.onClickPointInfo}>포인트내역</S.FirstMenu>
          <div onClick={props.onClickPWChange}>비밀번호변경</div>
          <div onClick={props.onClickSelling}>상품판매내역</div>
          <div onClick={props.onClickBuying}>상품구매내역</div>
          <div onClick={props.onClickPickedList}>내가찜한상품</div>
        </S.MenuBar>
        <S.ViewWrapper>
          <div></div>
        </S.ViewWrapper>
      </S.Wrapper>
    </S.Position>
  )
}
