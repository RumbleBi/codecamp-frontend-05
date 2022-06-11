import { getDate } from '../../../../commons/libraries/utils'
import Paginations01 from '../../../commons/layout/paginations/01/Paginations01.container'
import * as S from './MypageSelling.styles'

export default function MypageSellingUI(props) {
  return (
    <S.Position>
      <S.Title>상품판매내역</S.Title>
      <S.Wrapper>
        <S.MenuBar>
          <S.FirstMenu onClick={props.onClickPointInfo}>포인트내역</S.FirstMenu>
          <div onClick={props.onClickPWChange}>비밀번호변경</div>
          <div onClick={props.onClickSelling}>상품판매내역</div>
          <div onClick={props.onClickBuying}>상품구매내역</div>
          <div onClick={props.onClickPickedList}>내가찜한상품</div>
        </S.MenuBar>
        <S.ViewWrapper>
          <S.PointListWrapper>
            {props.data?.fetchPointTransactionsOfSelling.map(
              (el, index: number) => (
                <div key={el._id}>
                  <span style={{ width: '10%' }} index={index}>
                    {index + 1}
                  </span>
                  <span style={{ width: '20%' }} index={index}>
                    판매금액 : {el.amount}원
                  </span>
                  <span style={{ width: '20%' }} index={index}>
                    판매상품 : {el.useditem.remarks}
                  </span>
                  <span style={{ width: '30%' }} index={index}>
                    판매일자 : {getDate(el.createdAt)}
                  </span>
                </div>
              )
            )}
          </S.PointListWrapper>
          <S.PaginationsWrapper>
            <Paginations01 refetch={props.refetch} count={props.count} />
          </S.PaginationsWrapper>
        </S.ViewWrapper>
      </S.Wrapper>
    </S.Position>
  )
}
