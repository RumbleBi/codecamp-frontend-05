import { useState } from "react";
import { useRouter } from "next/router";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./BoardProduct.queries";
import { useMutation } from "@apollo/client";
import BoardsProductUI from "./BoardProduct.presenter";

export default function BoardsProduct(props) {
  const router = useRouter();

  const [create] = useMutation(CREATE_PRODUCT);
  const [update] = useMutation(UPDATE_PRODUCT);
  const [mySeller, setMySeller] = useState("");
  const [myName, setMyName] = useState("");
  const [myDetail, setMyDetail] = useState("");
  const [myPrice, setMyPrice] = useState("");

  async function onClickSubmit() {
    try {
      const result = await create({
        variables: {
          seller: mySeller,
          createProductInput: {
            name: myName,
            detail: myDetail,
            price: myPrice,
          },
        },
      });
      router.push(`./${result?.data.createProduct._id}`);
    } catch (error) {
      console.log("상품등록실패");
    }
  }
  const onChangeMySeller = (event) => {
    setMySeller(event.target.value);
  };
  const onChangeMyName = (event) => {
    setMyName(event.target.value);
  };
  const onChangeMyDetail = (event) => {
    setMyDetail(event.target.value);
  };
  const onChangeMyPrice = (event) => {
    setMyPrice(Number(event.target.value));
  };

  const onClickEdit = async () => {
    const result = await update({
      variables: {
        productId: router.query.number,
        updateProductInput: {
          name: myName,
          detail: myDetail,
          price: myPrice,
        },
      },
    });
    router.push(`/quiz/08-01-BoardProduct/${router.query.data}`);
  };

  return (
    <BoardsProductUI
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      onChangeMySeller={onChangeMySeller}
      onChangeMyName={onChangeMyName}
      onChangeMyDetail={onChangeMyDetail}
      onChangeMyPrice={onChangeMyPrice}
      ChangeEdit={props.ChangeEdit}
    />
  );
}
