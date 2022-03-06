import * as S from "./MypagePicked.styles";
import { v4 as uuidv4 } from "uuid";

export default function MypagePickedUI(props) {
  return (
    <S.Position>
      <S.Wrapper>
        <S.BackBtn onClick={props.onClickBack}>뒤로가기</S.BackBtn>
        <S.Title>찜목록</S.Title>
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
        </S.PickedList>
      </S.Wrapper>
    </S.Position>
  );
}
