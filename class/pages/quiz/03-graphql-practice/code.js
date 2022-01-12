/*

1. number가 3번인 게시글의 내용과 작성일이 무엇인가요?(내용과 작성일만 조회해 주세요.)

//solving
query {
  fetchBoard (number: 3) {
    contents
    createdAt
  }
}

//answer
{
  "data": {
    "fetchBoard": {
      "contents": "수정된 내용은?!",
      "createdAt": "2022-01-11T12:03:49.240Z"
    }
  }
}

2. 본인의 이름으로 프로필을 작성해 보세요.

//solving 
mutation{
  createProfile(name: "조진일", age: 29, school: "코드캠프"){
  	_id
    number
    message
	}
}

//answer
{
  "data": {
    "createProfile": {
      "_id": null,
      "number": null,
      "message": "프로필이 정상적으로 등록되었습니다."
    }
  }
}

3. 본인의 이름으로 게시글을 작성해 보세요.

//solving
mutation {
  createBoard(writer: "조진일", title: "첫글", contents: "나는#FFD400을 제일 좋아해!") {
    _id
    number
    message
  }
}

//answer
{
  "data": {
    "createBoard": {
      "_id": null,
      "number": 83,
      "message": "게시물이 정상적으로 등록되었습니다."
    }
  }
}

4. 자신의 프로필을 조회해 보세요.

//solving
query{
  fetchProfile(name: "조진일") {
    number
    name
    age
    school
  }
}

//answer
{
  "data": {
    "fetchProfile": {
      "number": 75,
      "name": "조진일",
      "age": 29,
      "school": "코드캠프"
    }
  }
}

5. 자신의 게시글을 조회해 보세요.

//solving
query{
  fetchBoard(number: 83) {
    number
    writer
    title
    contents
    like
    createdAt
  }
}

//answer
{
  "data": {
    "fetchBoard": {
      "number": 83,
      "writer": "조진일",
      "title": "첫글",
      "contents": "나는#FFD400을 제일 좋아해!",
      "like": 0,
      "createdAt": "2022-01-12T08:02:16.608Z"
    }
  }
}

6. 본인의 프로필에서, 학교를 자신이 졸업한 초등학교로 바꿔보세요.

//solving
mutation {
  updateProfile (name: "조진일", age: 29, school: "대영초등학교") {
    _id
    number
    message
  }
}

//answer
{
  "data": {
    "updateProfile": {
      "_id": null,
      "number": null,
      "message": "프로필이 정상적으로 수정되었습니다."
    }
  }
}

7. 본인의 게시글에서, 제목과 내용을 바꿔보세요.

//solving
mutation {
  updateBoard (number: 83, writer: "첫글", title: "조진일", contents: "나는#FFD400을 제일 좋아해!") {
    _id
    number
    message
  }
}

//answer
{
  "data": {
    "updateBoard": {
      "_id": null,
      "number": 83,
      "message": "게시물이 정상적으로 수정되었습니다."
    }
  }
}

8. 자신이 좋아하는 만화 주인공으로 프로필을 작성해 보세요.

//solving
mutation{
  createProfile(name: "범블비", age: 3, school: "오토봇"){
  	_id
    number
    message
	}
}

//answer
{
  "data": {
    "createProfile": {
      "_id": null,
      "number": null,
      "message": "프로필이 정상적으로 등록되었습니다."
    }
  }
}

9. 위 8번에서 작성한 프로필을 삭제해 주세요.

//solving
mutation {
  deleteProfile (name: "범블비") {
    _id
    number
    message
  }
}

//answer
{
  "data": {
    "deleteProfile": {
      "_id": null,
      "number": null,
      "message": "프로필이 정상적으로 삭제되었습니다."
    }
  }
}

10. 상품을 하나 만들어 보세요.

//solving
mutation {
  createProduct (seller: "조진일", createProductInput: {
    name: "아이폰",
    detail: "color: #FFD400",
    price: 100
  }) {
    _id
    number
    message
  }
}

//answer
{
  "data": {
    "createProduct": {
      "_id": "5743e0b7-7b24-4f3f-8074-293563ef6223",
      "number": null,
      "message": "상품이 정상적으로 등록되었습니다."
    }
  }
}

11. 위 10번에서 만들었던 상품의 가격을 500원 인상해 보세요.

//solving
mutation {
  updateProduct (productId: "5743e0b7-7b24-4f3f-8074-293563ef6223", updateProductInput: {
    name: "아이폰",
    detail: "color: #FFD400",
    price: 600
  }) {
    _id
    number
    message
  }
}

//answer
{
  "data": {
    "updateProduct": {
      "_id": "5743e0b7-7b24-4f3f-8074-293563ef6223",
      "number": null,
      "message": "상품이 정상적으로 수정되었습니다."
    }
  }
}

12. 위에서 만든 상품을 조회하되, 가격만 조회해 보세요.

//solving
query {
  fetchProduct (productId: "5743e0b7-7b24-4f3f-8074-293563ef6223") {
    price
  }
}

//answer
{
  "data": {
    "fetchProduct": {
      "price": 600
    }
  }
}

13. 조회했던 상품을 삭제해 보세요.

//solving
mutation {
  deleteProduct (productId: "5743e0b7-7b24-4f3f-8074-293563ef6223") {
    _id
    number
    message
  }
}

//answer
{
  "data": {
    "deleteProduct": {
      "_id": "5743e0b7-7b24-4f3f-8074-293563ef6223",
      "number": null,
      "message": "상품이 정상적으로 삭제되었습니다."
    }
  }
}

14. 삭제한 상품이 정말로 삭제되었는지 다시 한번 조회해 보세요.

//solving
query {
  fetchProduct (productId: "5743e0b7-7b24-4f3f-8074-293563ef6223") {
    _id
    seller
    name
    detail
    price
    createdAt
  }
}

//answer
{
  "data": {
    "fetchProduct": null
  }
}

15. 게시물 목록 중, 2페이지를 조회해 보세요.

//solving
query {
  fetchProducts(page: 2) {
    _id
    seller
    name
    detail
    price
    createdAt
  }
}

//answer
{
  "data": {
    "fetchProducts": [
      {
        "_id": "5d1469b5-a18f-4efd-ad8f-b963c536c43d",
        "seller": "신기소",
        "name": "신라면",
        "detail": "농심",
        "price": 1000,
        "createdAt": "2022-01-12T04:02:27.939Z"
      },
      {
        "_id": "2e37c57f-6501-4bab-a3a0-433c39b052e3",
        "seller": "보보",
        "name": "마우스",
        "detail": "게이밍마우스",
        "price": 500,
        "createdAt": "2022-01-12T04:01:13.301Z"
      },
      {
        "_id": "275a7a34-b734-43f2-84d9-cdd7390094c9",
        "seller": "철수",
        "name": "키보드",
        "detail": "무선 키보드",
        "price": 12000,
        "createdAt": "2022-01-12T04:00:35.491Z"
      },
      {
        "_id": "be9f6f8b-593f-429e-b746-6da8c1fb9462",
        "seller": "왔어요왔어",
        "name": "핫식스",
        "detail": "핫식스인데 핫하지 않아요",
        "price": 2200,
        "createdAt": "2022-01-12T03:59:43.903Z"
      },
      {
        "_id": "6705dd8a-8f0b-4b14-9e02-8223e31e2c24",
        "seller": "철수",
        "name": "키보드",
        "detail": "무선 키보드",
        "price": 12000,
        "createdAt": "2022-01-12T03:59:38.016Z"
      },
      {
        "_id": "257c2776-e2d9-42f6-8253-4f0e5c7e4876",
        "seller": "철수",
        "name": "키보드",
        "detail": "무선 키보드",
        "price": 12000,
        "createdAt": "2022-01-12T03:59:37.420Z"
      },
      {
        "_id": "decb0dcc-1698-4234-a9a7-17ebb1d4f9e3",
        "seller": "ddddddddddddddddddddddddddddddddddd",
        "name": "fd",
        "detail": "ddf",
        "price": 12,
        "createdAt": "2022-01-12T03:59:05.113Z"
      },
      {
        "_id": "231abf6b-1611-41b7-866f-6e0ba7d8ce60",
        "seller": "진일",
        "name": "진일2",
        "detail": "업데이트했어용",
        "price": 9999,
        "createdAt": "2022-01-12T03:58:40.410Z"
      },
      {
        "_id": "b771a5b1-1f46-4889-9703-f2fc9eed4285",
        "seller": "kjh",
        "name": "푸드코트",
        "detail": "어디가 맛있나요?",
        "price": 1200,
        "createdAt": "2022-01-12T03:57:19.476Z"
      },
      {
        "_id": "12aeaa76-1ccf-4b85-a863-5bdbc2bd986f",
        "seller": "독자",
        "name": "허브",
        "detail": "portNum:80, 4ea",
        "price": 10000,
        "createdAt": "2022-01-12T03:56:56.998Z"
      }
    ]
  }
}

16. 게시물 목록을 조회할 때, page를 입력하지 않으면 어떤 결과가 발생하나요?

//solving
query {
  fetchProducts(page: ) {
    _id
    seller
    name
    detail
    price
    createdAt
  }
}

//awswer

동작하지 않습니다.

17. 프로필이 전체 몇 개가 있는지 확인해 보세요.

//solving
query {
  fetchProfilesCount
}

//answer
{
  "data": {
    "fetchProfilesCount": 105
  }
}

18. 게시물은 몇 개가 있나요?

//solving
query {
  fetchProductsCount
}

//answer
{
  "data": {
    "fetchProductsCount": 52
  }
}
*/