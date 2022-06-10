import { v4 as uuidv4 } from 'uuid'
import Uploads02 from '../../../commons/uploads/02/Uploads02.container'
import * as S from './Mypage.styles'
export default function MypageUI(props) {
  return (
    <S.Position>
      <S.Title>마이페이지</S.Title>
      <S.Wrapper>
        <S.MenuBar>
          <S.FirstMenu onClick={props.onClickPointInfo}>포인트내역</S.FirstMenu>
          <div onClick={props.onClickPWChange}>비밀번호변경</div>
          <div onClick={props.onClickSelling}>상품판매내역</div>
          <div onClick={props.onClickBuying}>상품구매내역</div>
          <div onClick={props.onClickPickedList}>내가찜한상품</div>
        </S.MenuBar>
        <S.ViewWrapper>
          <S.IdWrapper>
            아이디 : {props.dataUser?.fetchUserLoggedIn.email}
          </S.IdWrapper>
          <S.NameWrapper>
            <span>이름 : {props.dataUser?.fetchUserLoggedIn.name}</span>
            <input onChange={props.onChangeName} type="text" />
            <button onClick={props.onClickChangeName}>이름변경</button>
          </S.NameWrapper>
          <S.PictureWrapper>
            <span>프로필사진변경 :</span>
            <Uploads02
              key={uuidv4()}
              fileUrl={props.fileUrl}
              onChangeFileUrl={props.onChangeFileUrl}
            />
            <S.PictureChangeBtn onClick={props.onClickChangePicture}>
              적용하기
            </S.PictureChangeBtn>
          </S.PictureWrapper>
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
