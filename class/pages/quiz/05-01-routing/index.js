import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { useRouter } from 'next/router'


const CREATE_PRODUCT = gql`
mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
  createProduct(seller: $seller, createProductInput: $createProductInput){
       _id
       number
       message
  }
}
`


export default function GraphqlMutationProduct() {
  const [createProduct] = useMutation(CREATE_PRODUCT)
  const router = useRouter()
  const [mySeller, setMySeller] = useState("")
  const [myName, setMyName] = useState("")
  const [myDetail, setMyDetail] = useState("")
  const [myPrice, setMyPrice] = useState("")

  const onClickSubmit = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller: mySeller,
          createProductInput: {
            name: myName,
            detail: myDetail,
            price: Number(myPrice),
          }
        }
      })
      console.log(result.data.createProduct._id)
      router.push(`/quiz/05-02-routed/${result.data.createProduct._id}`)
    } catch (error) {
      console.log(error.message)
    } //finally {
    //}

  }
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
      상품명: <input type="text" onChange={onChangeName}/><br />
      상품내용: <input type="text" onChange={onChangeDetail}/><br />
      상품가격: <input type="text" onChange={onChangePrice}/><br />
      <button onClick={onClickSubmit}>상품등록하기</button>
    </>
  )
}
