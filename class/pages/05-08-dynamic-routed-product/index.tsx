import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      name
      detail
      price
      seller
    }
  }
`;

export default function QueryProduct() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.Dynamic },
  });
  return (
    <div>
      <div>{router.query.Dynamic}번 게시글 페이지 이동 완료</div>
      <div>판매자: {data?.fetchProduct?.seller}</div>
      <div>상품명: {data?.fetchProduct?.name}</div>
      <div>상세내용: {data?.fetchProduct?.detail}</div>
      <div>상품가격: {data?.fetchProduct?.price}</div>
    </div>
  );
}
