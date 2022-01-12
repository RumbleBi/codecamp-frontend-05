/*

1. createBoard를 활용해, 게시물을 하나 등록해 주세요.

//solving
mutation {
    createBoard(createBoardInput: {
      writer: "조진일",
      password: "qlalf",
      title: "로또 997회차 당첨번호",
      contents: "4,7,14,16,24,44,+20",
    }) {
      _id
      writer
      title
      contents
    }
  }

//answer
{
  "data": {
    "createBoard": {
      "_id": "61de97b88cd4860029b47925",
      "writer": "조진일",
      "title": "로또 997회차 당첨번호",
      "contents": "4,7,14,16,24,44,+20"
    }
  }
}

2. 게시글의 제목과 내용은 무엇인가요?

//solving
query {
  fetchBoard(boardId: "61de97b88cd4860029b47925") {
    title
    contents
  }
}

//answer
{
  "data": {
    "fetchBoard": {
      "title": "로또 997회차 당첨번호",
      "contents": "4,7,14,16,24,44,+20"
    }
  }
}

3. 등록한 게시글에 좋아요를 1 올려주세요.

//solving
mutation {
  likeBoard(boardId: "61de97b88cd4860029b47925")
}

//answer
{
  "data": {
    "likeBoard": 1
  }
}

4. 등록한 게시글에 싫어요도 1 올려주세요.

//solving
mutation {
  dislikeBoard(boardId: "61de97b88cd4860029b47925")
}

//answer
{
  "data": {
    "dislikeBoard": 1
  }
}

5. 등록한 게시글의 좋아요와 싫어요는 각각 몇 개 인가요?

//solving
query {
  fetchBoard(boardId: "61de97b88cd4860029b47925") {
    likeCount
    dislikeCount
  }
}

//answer
{
  "data": {
    "fetchBoard": {
      "likeCount": 1,
      "dislikeCount": 1
    }
  }
}

6. 현재 등록된 게시글의 총 갯수는 몇 개 인가요?

//solving
query {
  fetchBoardsCount
}


//answer
{
  "data": {
    "fetchBoardsCount": 9
  }
}

7. 등록한 게시글의 제목을 수정해 보세요!

//solving
mutation {
  updateBoard (password: "qlalf", boardId: "61de97b88cd4860029b47925", updateBoardInput: {
    title: "로또 1000회차 당첨번호"
  }) {
  	title
  }
}

//answer
{
  "data": {
    "updateBoard": {
      "title": "로또 1000회차 당첨번호"
    }
  }
}

8. fetchBoards 전체 게시물 조회를 활용하여 방금 쓴 게시물을 검색해 보세요.

//solving
query {
  fetchBoards(search: "로또") {
    _id
    writer
    title
    contents
  }
}

//answer
{
  "data": {
    "fetchBoards": [
      {
        "_id": "61de97b88cd4860029b47925",
        "writer": "조진일",
        "title": "로또 1000회차 당첨번호",
        "contents": "4,7,14,16,24,44,+20"
      }
    ]
  }
}

9. 등록한 게시글에 댓글을 3개 추가해 보세요

//solving
mutation {
  createBoardComment(boardId: "61de97b88cd4860029b47925", createBoardCommentInput: {
    writer: "익명1",
    password: "1234",
    contents: "1등당첨!!",
    rating: 5.0
  }) {
    _id
    writer
    contents
  }
}

mutation {
  createBoardComment(boardId: "61de97b88cd4860029b47925", createBoardCommentInput: {
    writer: "익명2",
    password: "1234",
    contents: "2등당첨!!",
    rating: 4.0
  }) {
    _id
    writer
    contents
  }
}

mutation {
  createBoardComment(boardId: "61de97b88cd4860029b47925", createBoardCommentInput: {
    writer: "익명3",
    password: "1234",
    contents: "3등당첨!!",
    rating: 3.0
  }) {
    _id
    writer
    contents
  }
}

//answer
{
  "data": {
    "createBoardComment": {
      "_id": "61de9e2e8cd4860029b47931",
      "writer": "익명1",
      "contents": "1등당첨!!"
    }
  }
}

{
  "data": {
    "createBoardComment": {
      "_id": "61de9e468cd4860029b47932",
      "writer": "익명2",
      "contents": "2등당첨!!"
    }
  }
}

{
  "data": {
    "createBoardComment": {
      "_id": "61de9e708cd4860029b47933",
      "writer": "익명3",
      "contents": "3등당첨!!"
    }
  }
}

10. 첫번째 댓글의 내용을 수정해 보세요!

//solving
mutation {
  updateBoardComment(boardCommentId: "61de9e2e8cd4860029b47931", password: "1234", updateBoardCommentInput: {
    contents: "사실 꽝이에요ㅎ",
    rating: 1.0
  }) {
    _id
    writer
    contents
    rating
  }
}

//answer

  "data": {
    "updateBoardComment": {
      "_id": "61de9e2e8cd4860029b47931",
      "writer": "익명1",
      "contents": "사실 꽝이에요ㅎ",
      "rating": 1
    }
  }
}

11. 두번째 댓글을 삭제해 보세요!

//solving

mutation {
  deleteBoardComment(password: "1234", boardCommentId: "61de9e468cd4860029b47932")
}

//answer

{
  "data": {
    "deleteBoardComment": "61de9e468cd4860029b47932"
  }
}


12. 등록한 게시글에 달려있는 모든 댓글을 조회해 보세요.(작성자와 내용만 조회합니다.)

//solving
query {
  fetchBoardComments(boardId: "61de97b88cd4860029b47925") {
    writer
    contents
  }
}

//answer
{
  "data": {
    "fetchBoardComments": [
      {
        "writer": "익명3",
        "contents": "3등당첨!!"
      },
      {
        "writer": "익명1",
        "contents": "사실 꽝이에요ㅎ"
      }
    ]
  }
}

13. BEST게시글을 조회해 보세요!

//solving
query {
  fetchBoardsOfTheBest {
    title
  }
}

//answer
{
  "data": {
    "fetchBoardsOfTheBest": [
      {
        "title": "3일차 과제 수정"
      },
      {
        "title": "수정된 제목"
      },
      {
        "title": "수정했다구"
      },
      {
        "title": "바꿈"
      }
    ]
  }
}

14 회원가입을 해 보세요! (사용자, 즉, User를 만드는 API입니다!)

//solving
mutation {
  createUser(createUserInput: {
    email: "Ask me",
    password: "Ask me",
    name: "조진일"
  }) {
    _id
    email
    name
    
  }
}

//answer
잘나옵니다 두번눌러서 "message": "이미 존재하는 이메일입니다."

*/