import { v4 as uuidv4 } from 'uuid'
import * as S from './MyPage.styles'
export default function MypageUI(props) {
  const handleClick = (el) => {
    console.log('click ', el)
  }
  return (
    <S.Position>
      <S.Title>마이페이지</S.Title>
      <S.Wrapper>
        <S.MenuBar>
          <S.FirstMenu>포인트 충전 내역</S.FirstMenu>
          <div>상품판매내역</div>
          <div>상품구매내역</div>
          <div>찜목록</div>
        </S.MenuBar>
        <S.ViewWrapper>
          <div>계정 : </div>
          <div>
            <span>이름 : </span>
            <button>이름변경</button>
          </div>
          <div>
            <span>프로필사진변경 : </span>
            <button>사진변경</button>
            <img src="/images/avatar_icon40X40.png" />
          </div>
        </S.ViewWrapper>
      </S.Wrapper>
    </S.Position>
  )
}

// {props.data?.fetchPointTransactions.map((el, index) => (
//   <div key={el._id}>
//     <div>
//       <Element>잔액: {el.balance}</Element>
//     </div>
//     <div>
//       <Element>상품이름: {el.useditem.name}</Element>
//       <Element>상품가격: {el.useditem.price}</Element>
//       <div>
//         {el.useditem.images
//           ?.filter((el: string) => el)
//           .map((el: string) => (
//             <ElemtnetImg
//               key={uuidv4()}
//               src={`https://storage.googleapis.com/${el}`}
//             />
//           ))}
//       </div>
//     </div>
//   </div>
// ))}
