import Head from "next/head";
import * as S from "./Payment.styles";

export default function PaymentBasketUI(props) {
  return (
    <S.Position>
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
      <S.Wrapper>
        <div>
          <h1>결제 페이지</h1>
        </div>
        <div>
          <S.UserInfo>{props.data?.fetchUserLoggedIn.name}</S.UserInfo>
          <S.UserInfo>{props.data?.fetchUserLoggedIn.email}</S.UserInfo>
          <S.UserInfo>
            {props.data?.fetchUserLoggedIn.userPoint.amount}
          </S.UserInfo>
        </div>
        <S.SelectPaymentWrapper>
          충전하기
          <S.ChargingBtn id={"5000"} onClick={props.onClickAmount}>
            5000
          </S.ChargingBtn>
          충전하기
          <S.ChargingBtn id={"10000"} onClick={props.onClickAmount}>
            10000
          </S.ChargingBtn>
          충전하기
          <S.ChargingBtn id={"20000"} onClick={props.onClickAmount}>
            20000
          </S.ChargingBtn>
          충전하기
          <S.ChargingBtn id={"50000"} onClick={props.onClickAmount}>
            50000
          </S.ChargingBtn>
          충전하기
          <S.ChargingBtn id={"100"} onClick={props.onClickAmount}>
            100
          </S.ChargingBtn>
          포인트 충전하기: <br />
          {/* <input onChange={props.onChangeAmount} type="text" /> */}
          <button onClick={props.onClickPayment}>결제하기</button>
        </S.SelectPaymentWrapper>
      </S.Wrapper>
    </S.Position>
  );
}
