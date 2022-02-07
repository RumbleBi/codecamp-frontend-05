import { Fragment } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { firebaseApp } from "../_app";

export default function FirebasePage() {
  const onClickSubmit = async () => {
    //firebase에 한줄 등록
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      writer: "철수",
      title: "내용이에용",
      contents: "허리가아퍼용ㅠ",
    });
  };

  const onClcikFetch = async () => {
    //firebase에서 데이터 꺼내오기
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const docs = result.docs.map((el) => el.data()); // firebase문법
    console.log(docs);
  };
  return (
    <Fragment>
      <h1>파이어베이스 연습 페이지</h1>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClcikFetch}>조회하기</button>
    </Fragment>
  );
}
