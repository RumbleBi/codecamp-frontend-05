import _ from "lodash";
import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, useState, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  isMatched: boolean;
}

const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // const onClickSearch = () => {
  //   refetch({ search: search, page: 1 });
  //   setKeyword(search);
  // }; // 검색후 다른 검색을 실행할 때, 다시 1 페이지로 가야하기 때문에 리패치 page를 1로 둔다.

  const getDebounce = _.debounce((el) => {
    refetch({ search: el, page: 1 });
    setKeyword(el);
  }, 200); // 0.2초가 지난 후에 실행(작업이 끝나고)

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    // setSearch(event.target.value || "");
    getDebounce(event.target.value);
  };

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (event.target instanceof Element)
      refetch({ search: keyword, page: Number(event.target.id) });
  };
  // keyWord를 따로 만든이유 : search 하나로는 단어 검색후, input칸에 새로 검색단어를 넣으면(버튼 안누르고) 페이지 리페치 시, 버튼을 누르지 않고도 바뀌는 문제가 있다.

  return (
    <>
      <h1>검색 페이지</h1>
      검색어입력:
      <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>작성자 : {el.writer} | </span>
          <span>
            제목 :
            {el.title
              .replaceAll(keyword, `#$%${keyword}#$%`)
              .split("#$%")
              .map((el) => (
                <Word key={uuidv4()} isMatched={el === keyword}>
                  {el}
                </Word>
              ))}{" "}
          </span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={uuidv4()} onClick={onClickPage} id={String(index + 1)}>
          {` ${index + 1} `}
        </span>
      ))}
    </>
  );
}
// isMatched keyword 뒤에 ? true : false 필요없음 안해도 작동함ㅇㅇ
