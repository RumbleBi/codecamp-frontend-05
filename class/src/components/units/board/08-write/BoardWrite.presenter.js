// import { MyInput, MyButton } from "./BoardWrite.styles";
import * as S from "./BoardWrite.styles"; //스타일 안의 전체 데이터를 사용
export default function BoardWriteUI(props) {
  //export default 를 사용하면, 상위 부모의 import (아무거나) from ""; 해도 무조건 데이터가 옮겨간다.
  return (
    <>
      <h1>{props.isEdit ? "수정하기" : "등록하기"}</h1>
      작성자: <S.MyInput type="text" onChange={props.ddd} />
      <br />
      제목: <S.MyInput type="text" onChange={props.kkk} />
      <br />
      내용: <S.MyInput type="text" onChange={props.lll} />
      <br />
      <S.MyButton
        onClick={props.isEdit ? props.xxx : props.ccc}
        ggg={props.isActive}
      >
        {props.isEdit ? "수정하기" : "등록하기"}
      </S.MyButton>
      {/* {props.isEdit ? (
        <S.MyButton onClick={props.xxx} ggg={props.isActive}>
          수정하기
        </S.MyButton>
      ) : (
        <S.MyButton onClick={props.ccc} ggg={props.isActive}>
          등록하기
        </S.MyButton>
      )}
      <div>{props.bbb}</div>
      {props.isEdit && (
        <S.MyButton onClick={props.xxx} ggg={props.isActive}>
          수정하기
        </S.MyButton>
      )}
      {!props.isEdit && (
        <S.MyButton onClick={props.ccc} ggg={props.isActive}>
          등록하기
        </S.MyButton>
      )} */}
    </>
  );
}

export const a = 3;