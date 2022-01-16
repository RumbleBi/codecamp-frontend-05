import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

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

export default function DynamicRoutedPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.Dynamic },
  });
  console.log(data);

  return (
    <>
      <div>{router.query.Dynamic}번 게시글 페이지 이동 완료</div>
      <div>판매자: {data?.fetchProduct.seller}</div>
      <div>상품명: {data?.fetchProduct.name}</div>
      <div>상세내용: {data && data.fetchProduct?.detail}</div>
      <div>상품가격: {data && data.fetchProduct.price}</div>
    </>
  );
}