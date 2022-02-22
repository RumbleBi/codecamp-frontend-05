import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function PagenationPage() {
  const [isEdits, setIsEdits] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const { data, fetchMore } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });
  const [isEdit, setIsEdit] = useState(false);
  const onClickIsEdit = (event) => {
    console.log(event.target.id);
    const aaa = isEdits; // 원본 자체를 넣어버림
    aaa[event.target.id] = true;
    console.log(aaa);
    setIsEdits([...aaa]);
    // setIsEdit(true);
  };

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoards.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards) {
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
      {data?.fetchBoards?.map((el, index) => (
        <div key={el._id}>
          <span>
            {el.title} {el.writer}
          </span>
        </div>
      ))}
    </InfiniteScroll>
  );
}
