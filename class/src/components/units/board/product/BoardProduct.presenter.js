export default function BoardsProductUI(props) {
  return (
    <>
      <h1>상품{props.ChangeEdit ? "수정" : "등록"}페이지</h1>
      <br />
      상품명: <input type="text" onChange={props.onChangeMyName} />
      <br />
      판매자: <input type="text" onChange={props.onChangeMySeller} />
      <br />
      상세설명: <input type="text" onChange={props.onChangeMyDetail} />
      <br />
      가격 :<input type="number" onChange={props.onChangeMyPrice} />
      <br />
      <button
        onClick={props.ChangeEdit ? props.onClickEdit : props.onClickSubmit}
      >
        상품{props.ChangeEdit ? "수정" : "등록"}하기
      </button>
    </>
  );
}
