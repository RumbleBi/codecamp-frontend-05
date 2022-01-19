import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
//import { CREATE_PRODUCT } from "../../../../src/components/units/board/product/BoardProduct.queries";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      seller
      name
      detail
      price
    }
  }
`;

export default function BoardsProductDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.number },
  });
  //variables: 추가해야되나?? 08-05-boards/[mynumber]참고
  //console.log(data);

  const onClickMoveToEdit = () => {
    router.push(`/quiz/08-01-BoardProduct/${router.query.number}/edit`);
  };

  return (
    <>
      <div>판매자: {data?.fetchProduct?.seller}</div>
      <div>이름: {data?.fetchProduct?.name}</div>
      <div>상세내용: {data?.fetchProduct?.detail}</div>
      <div>가격: {data?.fetchProduct?.price}</div>
      <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>
    </>
  );
}
