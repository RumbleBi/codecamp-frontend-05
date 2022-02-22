import { useState } from "react";
import Head from "next/head";

export default function PaymentPage() {
  const [amount, setAmount] = useState(0);

  const onChangeAmount = (event) => {
    setAmount(Number(event.target.value));
  };
  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp70574995"); // Example: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", // 상품ID 없애거나 중복되지않게 설정해놔야한다
        name: "노르웨이 회전 의자",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // m_redirect_url: "", // 모바일의 경우 리다이렉트의 필요성이 있기 때문에 써줘야한다 웹훅노티피케이션
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          // 성공
          console.log(rsp);
          // 1. 백엔드에 결제관련 데이터 넘겨주기
          // 즉, 뮤테이션 실행하기
          // ex createPointTransactionsOfLoading
        } else {
          // 실패
        }
      }
    );
  };
  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      결제금액: <input onChange={onChangeAmount} type="text" />
      <button onClick={onClickPayment}>결제하기</button>
    </div>
  );
}

// 이벤트를 발생시키는 방법
// [1. 클릭 등, 직접 이벤트 발생, 2. 가만히 있는데, 특정 시간에 자동으로 이벤트 발생 ] => 크론탭
