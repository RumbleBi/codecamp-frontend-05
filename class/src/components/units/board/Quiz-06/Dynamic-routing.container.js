import { useRouter } from "next/router";
import { useState } from "react";
import DynamicRoutingPageUI from "./Dynamic-routing.presenter";
export default function DynamicRoutingPage() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const onClickMove1 = () => {
    router.push("/05-06-dynamic-routed-board/1");
  };

  const onClickMove2 = () => {
    router.push("/05-06-dynamic-routed-board/2");
  };

  const onClickMove3 = () => {
    router.push("/05-06-dynamic-routed-board/3");
  };

  const onClickMove4 = () => {
    router.push("/05-06-dynamic-routed-board/3");
  };

  const onClickMove100 = () => {
    router.push("/05-06-dynamic-routed-board/100");
  };

  const onChangeColor = () => {
    if (isActive === false) {
      setIsActive(true);
    }
    if (isActive === true) {
      setIsActive(false);
    }
  };

  return (
    <DynamicRoutingPageUI
      onClickMove1={onClickMove1}
      onClickMove2={onClickMove2}
      onClickMove3={onClickMove3}
      onClickMove4={onClickMove4}
      onClickMove100={onClickMove100}
      onChangeColor={onChangeColor}
      isActive={isActive}
    />
  );
}
