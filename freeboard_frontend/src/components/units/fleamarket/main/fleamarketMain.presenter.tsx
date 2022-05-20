import * as S from './fleamarketMain.styles'
import InfiniteScroll from 'react-infinite-scroller'
import Dompurify from 'dompurify'
import Searchbars01 from '../../../commons/searchbars/01/Searchbars01.container'
export default function FleamarketMainUI(props) {
  return (
    <S.Position>
      <S.Wrapper>
        <Searchbars01
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
        />
        <S.ListWrapper>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
          >
            {props.dataItems?.fetchUseditems.map((el) => (
              <S.DataList onClick={props.onClickMoveToDetail(el)} key={el._id}>
                <div>
                  <S.DataInfo>판매자: {el.name}</S.DataInfo>
                  <S.DataInfo>한줄요약: {el.remarks}</S.DataInfo>
                  <S.DataInfo>가격: {el.price}</S.DataInfo>
                  <S.DataInfo>작성시간: {el.createdAt.slice(0, 10)}</S.DataInfo>
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
                {process.browser ? (
                  <S.DateContents
                    dangerouslySetInnerHTML={{
                      __html: Dompurify.sanitize(String(el.contents)),
                    }}
                  ></S.DateContents>
                ) : (
                  <div />
                )}
              </S.DataList>
            ))}
          </InfiniteScroll>
        </S.ListWrapper>
      </S.Wrapper>
    </S.Position>
  )
}
