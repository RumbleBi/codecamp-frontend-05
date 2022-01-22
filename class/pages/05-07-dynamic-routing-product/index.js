import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;
//shorthand property => js 객체의 키와 값이 같으면 값을 생략하여 표현할 수 있다.

export default function GraphqlMutationProduct() {
  const [mySeller, setMySeller] = useState("");
  const [myInput, setMyInput] = useState("");
  const [myInput2, setMyInput2] = useState("");
  const [myInput3, setMyInput3] = useState("");
  // const [myContents, setMyContents] = useState("")

  const router = useRouter();

  const [createProduct] = useMutation(CREATE_PRODUCT); //[실행하는 함수] (요청하는 값)

  const onClickSubmit = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller: "진일이",
          createProductInput: {
            name: "아이폰",
            detail: "굿아이폰",
            price: 1000, //문자열로 받아주기 때문에 형변환이 필요하다 <input type="number" /> 태그도 숫자로 되어있지만, 텍스트이기 때문에 문자열이므로 형변환필요
          },
        },
      });
      console.log(result.data.createProduct._id);
      router.push(
        `/05-08-dynamic-routed-product/${result.data.createProduct._id}`
      );
    } catch (error) {
      console.log(error.message);
    } finally {
      //무조건 마지막에 한번 실행되는 곳 성공이든 실패든
    }

    // const apple = 3
    // const banana = 10
    // console.log("철수는 사과를" + apple + "개 가지고 있거, 바나나를 " + banana + "개 가지고 있어요")
    // console.log(`철수는 사과를 ${apple}을 가지고 있고, 바나나를 ${banana}개 가지고 있어요`) //백틱을 활용한 템플릿 리터럴 방식
  };
  const onChangeSeller = (event) => {
    setMySeller(event.target.value);
  };

  const onChangeInput = (event) => {
    setMyInput(event.target.value);
  };

  const onChangeInput2 = (event) => {
    setMyInput2(event.target.value);
  };

  const onChangeInput3 = (event) => {
    setMyInput3(event.target.value);
  };

  const onClickCreateProduct = () => {
    const result = createProduct;
    const _id = console.log(result);
    router.push("/05-08-dynamic-routed-product/1" + _id);
  };
  // const onChangeMyWri = (event) => {
  //   setMyWriter(event.target.value)
  // }

  // const onChangeMyTitle = (event) => {
  //   setMyTitle(event.target.value)
  // }

  // const onChangeMyContents = (event) => {
  //   setMyContents(event.target.value)
  // }

  return (
    <>
      판매자: <input type="text" onChange={onChangeSeller} />
      <br />
      상품명: <input type="text" onChange={onChangeInput} />
      <br />
      상품내용: <input type="text" onChange={onChangeInput2} />
      <br />
      상품가격: <input type="text" onChange={onChangeInput3} />
      <br />
      <input type="number" />
      <button onClick={onClickSubmit}>상품등록하기</button>
      {/* <button onClick={onClickCreateProduct}>상품등록하기</button> */}
    </>
  );
}
