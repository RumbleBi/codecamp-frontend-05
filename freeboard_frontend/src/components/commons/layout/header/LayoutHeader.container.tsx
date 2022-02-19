import { useRouter } from "next/router";
import { Fragment } from "react";
import * as S from "./LayoutHeader.styles";
export default function LayoutHeader() {
  const router = useRouter();
  const onClickTitle = () => {
    router.push("/");
  };
  return (
    <Fragment>
      <S.Wrapper>
        <S.Title onClick={onClickTitle}>일본여행사</S.Title>
      </S.Wrapper>
    </Fragment>
  );
}
