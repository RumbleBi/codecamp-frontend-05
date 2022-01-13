import { useMutation,gql } from "@apollo/client";
import { useState} from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`

export default function GraphqlMutationProduct() {
  const [mySeller, setMySeller] = useState("")
  const [myName, setMyName] = useState("")
  const [myDetail, setMyDetail] = useState("")
  const [myPrice, setMyPrice] = useState("")
  const [createProduct] = useMutation(CREATE_PRODUCT); //[실행하는 함수] (요청하는 값)

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: { 
        seller: mySeller, 
        createProductInput: {
          name: myName,
          detail: myDetail,
          price: Number(myPrice) //문자열로 받아주기 때문에 형변환이 필요하다 <input type="number" /> 태그도 숫자로 되어있지만, 텍스트이기 때문에 문자열이므로 형변환필요
        }
      }
    })
    console.log(result)
    console.log(result.data.createProduct.message)

  };
  const onChangeSeller = (event) => {
    setMySeller(event.target.value)
  }

  const onChangeName = (event) => {
    setMyName(event.target.value)
  }

  const onChangeDetail = (event) => {
    setMyDetail(event.target.value)
  }

  const onChangePrice = (event) => {
    setMyPrice(event.target.value)
  }

  return (
    <>
      판매자: <input type="text" onChange={onChangeSeller} /><br />
      상품명: <input type="text" onChange={onChangeName} /><br />
      상품내용: <input type="text" onChange={onChangeDetail} /><br />
      상품가격: <input type="text" onChange={onChangePrice} /><br /> 
      <button onClick={onClickSubmit}>상품등록하기</button>
    </>
  );
}
