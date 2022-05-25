import * as S from './LayoutHeader.styles'

export default function LayoutHeaderUI(props) {
  return (
    <S.Position>
      <S.Wrapper>
        <S.Left>
          <S.Logo onClick={props.onClickTitle}>Ani Gallery</S.Logo>
          <div onClick={props.onClickFreeBoardList}>자유게시판</div>
          <div onClick={props.onClickFleamarketList}>중고게시판</div>
          <div>애니정보</div>
        </S.Left>
        <S.Right>
          {props.data?.fetchUserLoggedIn ? (
            <div>
              <div>{props.data?.fetchUserLoggedIn.name} 님</div>
              <div>
                포인트: {props.data?.fetchUserLoggedIn.userPoint.amount}
              </div>
              <div onClick={props.onClickMoveToPayment}>포인트 충전하기</div>
              <div onClick={props.onClickLogout}>로그아웃</div>
            </div>
          ) : (
            <div onClick={props.onClickLogin}>로그인/가입</div>
          )}
        </S.Right>
      </S.Wrapper>
    </S.Position>
  )
}
