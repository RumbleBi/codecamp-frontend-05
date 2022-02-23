import * as S from "./fleamarketMain.styles";
import InfiniteScroll from "react-infinite-scroller";
export default function FleamarketMainUI(props) {
  return (
    <S.Position>
      <S.TopWrapper>
        <S.RegButton onClick={props.onClickReg}>게시물등록하기</S.RegButton>
        <S.RecentItems>최근본상품</S.RecentItems>
        <S.WelcomeTitle>
          {props.data?.fetchUserLoggedIn.name}님 환영합니다!
        </S.WelcomeTitle>
      </S.TopWrapper>
      <S.Wrapper>
        <S.ListWrapper>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
          >
            {props.dataItems?.fetchUseditems.map((el) => (
              <S.DataList
                onClick={props.onClickMoveToDetail(el._id)}
                key={el._id}
              >
                <S.DataTitle>판매자: {el.name}</S.DataTitle>
                <S.DataTitle>한줄요약: {el.remarks}</S.DataTitle>
                <S.DataTitle>내용: {el.contents}</S.DataTitle>
                <S.DataTitle>가격: {el.price}</S.DataTitle>
                {/* <S.DataTitle>{el.image}</S.DataTitle> */}
                <S.DataTitle>작성시간: {el.createdAt.slice(0, 10)}</S.DataTitle>
              </S.DataList>
            ))}
          </InfiniteScroll>
        </S.ListWrapper>
      </S.Wrapper>
    </S.Position>
  );
}
