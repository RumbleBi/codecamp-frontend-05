import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

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

export default function GraphqlMutationProduct() {
  const [mySeller, setMySeller] = useState("");
  const [myInput, setMyInput] = useState("");
  const [myInput2, setMyInput2] = useState("");
  const [myInput3, setMyInput3] = useState("");
  // const [myContents, setMyContents] = useState("")

  const [createProduct] = useMutation(CREATE_PRODUCT); //[실행하는 함수] (요청하는 값)

  const onClickSubmit = async () => {
    await createProduct({
      variables: {
        seller: mySeller,
        createProductInput: {
          name: myInput,
          detail: myInput2,
          price: Number(myInput3), //문자열로 받아주기 때문에 형변환이 필요하다 <input type="number" /> 태그도 숫자로 되어있지만, 텍스트이기 때문에 문자열이므로 형변환필요
        },
      },
    });
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
    </>
  );
}
