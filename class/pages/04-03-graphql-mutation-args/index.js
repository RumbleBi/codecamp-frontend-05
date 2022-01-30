import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
// $부분이 왜 두개나 되냐?? 보드 말고도 다른 프로필, 상품등록 등 여러 API에게 한번 요청하면, 여러 요청에 중복 되게 효율적으로 요청을 보내줄 수 있기 때문이다.
//graphql 의 장점이라고 볼 수 있다.

// 값을 받은 "나", "무제" 등을 받은 $writer 달라표시 부분들의 데이터들이 다시 2번째 createBoard에
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message  최소 1개를 요청해야한다.
    }
  }
`;

// createProduct(seller: $seller, 등등) {요청하는 값들 message 등등} 만약 여러개의 API요청을 받을라면, const CREATE_BOARD의 이름을 TOTAL_ 이런식으로 이해하기 쉽게 바꾸는 편이 낫다.

export default function GraphqlMutationArgs() {
  const [aaa, setAaa] = useState("");
  const [qqq] = useMutation(CREATE_BOARD); //[실행하는 함수] (요청하는 값)

  const zzz = async () => {
    const result = await qqq({
      variables: { writer: "나", title: "무제", contents: "없음" },
    });
    // variables 부분의 안의 값은 위의 const CREATE_BOARD 위로 올라가서 첫번째 mutation createBoard $writer, $title 을 찾아간다. 이건 gql의 규칙이다!!
    console.log(result);
    console.log(result.data.createBoard.message);
    setAaa(result.data.createBoard.message);
    // console.log(result.data.title);
    // setAaa(result.data.title);
  };
  return (
    <>
      <button onClick={zzz}>GRAPHQL-API 요청하기!!</button>
      <div>{aaa}</div>
    </>
  );
}
