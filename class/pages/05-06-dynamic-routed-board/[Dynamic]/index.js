import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

export default function DynamicRoutedPage() {
  const router = useRouter();
  router.push();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.Dynamic) },
  });
  //전에 console.log로 찍힌 값은 문자열이었기 때문에 넘버타입으로 변환해야한다
  //무조건 data 이름으로 써야함 useQuery는 페이지가 실행될때 자동으로 요청이 된다.
  //useMutation 은 내가 원하는 함수를 만들고 원할 때 실행할 수 있다.

  console.log(data);

  return (
    <>
      {/* data && 조건부 렌더링. 왜 이걸 쓰냐.. 코드가 실행되면서 비동기 식으로 실행되기 때문에 FATCH_BOARD에서 데이터를 가져오는 사이 
            비동기된 다른 코드들이 실행되기 때문에 데이터를 받기전에 실행시키려하기 때문에 페이지 오류가 뜬다 (error => data : undifined) */}
      {/* data? => 옵셔널 체이닝 신기술!! 똑같은 기능이다 */}
      <div>{router.query.Dynamic}번 게시글 페이지 이동 완료</div>
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data && data.fetchBoard.title}</div>
      <div>내용: {data && data.fetchBoard.contents}</div>
    </>
  );
}
