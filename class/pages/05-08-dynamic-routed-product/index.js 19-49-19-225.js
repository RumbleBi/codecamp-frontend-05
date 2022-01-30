import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

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

export default function DynamicRoutedPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.Dynamic },
  });

  console.log(data);

  return (
    <>
      <div>{router.query.Dynamic}번 게시글 페이지 이동 완료</div>
      {/* <div>판매자: {data?.fetchProduct.seller}</div> */}
      <div>상품명: {data?.fetchProduct.name}</div>
      <div>상세내용: {data && data.fetchProduct?.detail}</div>
      {/* detail이 있으면 찍고, 없으면 안찍는 것. 게시글 삭제같은걸로 오류가 일어나는걸 방지 */}
      <div>상품가격: {data && data.fetchProduct.price}</div>
    </>
  );
}
