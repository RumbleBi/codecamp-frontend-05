// ## 다이나믹 라우팅 & 데이터 조회

// 1. 판매자, 상품명, 상품내용, 상품가격을 입력할 수 있는 상품 등록 화면을 만들어 주세요.
// 2. 상품 등록 버튼을 누르면 createProduct를 활용하여 상품등록 mutation을 요청해 주세요.
// 3. mutation이 실패할 수도 있기 때문에, try ~ catch로 감싸 주세요.**(이를** **예외처리라고 합니다.)**
// 4. 상세보기 화면으로 동적 라우팅하여 이동해 주세요**(응답으로 받은 상품ID 활용)**
// 5. 동적라우팅된 화면에서 주소에 있는 상품ID를 가져오고**(router.query 활용)**, 가져온 상품ID로 fetchProduct를 활용하여 상품 정보를 조회해 주세요.
// 6. 조회한 상품 정보를 화면에 보여주세요.
// 7. 비동기 방식으로 컴포넌트가 렌더링되기 때문에, 아직 받아오지 못한 상품 data가 없어서 에러가 발생하나요? 그렇다면, 조건부 렌더링의 **&& 연산자**를 사용해 보세요.
// 8. 위 7번의 &&연산자를 **옵셔널 체이닝**을 사용해서 변경해 보세요.
// 9. data가 없을 때, 초기 상태를 loading... 으로 표기해 주세요.(**삼항 연산자**를 사용하면 되겠죠?)

import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { useRouter } from 'next/router'


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
  const router = useRouter()
  const [mySeller, setMySeller] = useState("")
  const [myName, setMyName] = useState("")
  const [myDetail, setMyDetail] = useState("")
  const [myPrice, setMyPrice] = useState("")

  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickCreateProduct = async () => {
    try {
    const result = await createProduct({
      variables: { 
        seller: mySeller, 
        createProductInput: {
          name: myName,
          detail: myDetail,
          price: myPrice
        }
      }
    })
    const result1 = createProduct
    console.log(result1)
    console.log(result.data.createProduct._id)
    router.push(`/05-02-routed/${result.data.createProduct._id}`)
  } catch(error) {
    console.log(error.message)
  } finally {
    //무조건 마지막에 한번 실행되는 곳 성공이든 실패든
  }


    // const apple = 3
    // const banana = 10
    // console.log("철수는 사과를" + apple + "개 가지고 있거, 바나나를 " + banana + "개 가지고 있어요")
    // console.log(`철수는 사과를 ${apple}을 가지고 있고, 바나나를 ${banana}개 가지고 있어요`) //백틱을 활용한 템플릿 리터럴 방식
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
      판매자: <input type="text" onChange={onChangeSeller} /><br />
      상품명: <input type="text" onChange={onChangeName}/><br />
      상품내용: <input type="text" onChange={onChangeDetail}/><br />
      상품가격: <input type="text" onChange={onChangePrice}/><br />
      <button onClick={onClickCreateProduct}>상품등록하기</button>
    </>
  );
}
