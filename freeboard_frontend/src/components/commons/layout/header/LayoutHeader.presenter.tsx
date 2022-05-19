import * as S from './LayoutHeader.styles'

export default function LayoutHeaderUI(props) {
  return (
    <S.Position>
      <S.Wrapper>
        <S.Left>
          <div onClick={props.onClickTitle}>Ani Gallery</div>
          <div onClick={props.onClickFreeBoardList}>자유게시판</div>
          <div>중고게시판</div>
          <div>애니정보</div>
        </S.Left>
        <S.Right>
          <div onClick={props.onClickLogin}>로그인/가입</div>
        </S.Right>
      </S.Wrapper>
    </S.Position>
  )
}
