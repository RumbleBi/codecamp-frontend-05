import * as S from "./fleamarketMain.styles";
import InfiniteScroll from "react-infinite-scroller";
import Dompurify from "dompurify";
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
export default function FleamarketMainUI(props) {
  return (
    <S.Position>
      <S.TopWrapper>
        <S.RegButton onClick={props.onClickReg}>게시물등록하기</S.RegButton>

        <S.WelcomeTitle>
          {props.data?.fetchUserLoggedIn.name}님 환영합니다!
        </S.WelcomeTitle>
      </S.TopWrapper>
      <S.Wrapper>
        <S.ListWrapper>
          <Searchbars01
            refetch={props.refetch}
            refetchUseditemsCount={props.refetchUseditemsCount}
            onChangeKeyword={props.onChangeKeyword}
          />

          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
          >
            {props.dataItems?.fetchUseditems.map((el) => (
              <S.DataList onClick={props.onClickMoveToDetail(el)} key={el._id}>
                <div>
                  <S.DataTitle>판매자: {el.name}</S.DataTitle>
                  <S.DataTitle>한줄요약: {el.remarks}</S.DataTitle>
                </div>
                <div>
                  {process.browser ? (
                    <S.DataTitle
                      dangerouslySetInnerHTML={{
                        __html: Dompurify.sanitize(String(el.contents)),
                      }}
                    ></S.DataTitle>
                  ) : (
                    <div />
                  )}
                </div>
                <div>
                  <S.DataTitle>가격: {el.price}</S.DataTitle>
                </div>
                <div>
                  <S.DataTitle>
                    작성시간: {el.createdAt.slice(0, 10)}
                  </S.DataTitle>
                </div>
                <div>
                  <S.ImageWrapper>
                    {el.images
                      ?.filter((el: string) => el)
                      .map((el: string) => (
                        <S.Image
                          key={el}
                          src={`https://storage.googleapis.com/${el}`}
                        />
                      ))}
                  </S.ImageWrapper>
                </div>
              </S.DataList>
            ))}
          </InfiniteScroll>
        </S.ListWrapper>
      </S.Wrapper>
    </S.Position>
  );
}
