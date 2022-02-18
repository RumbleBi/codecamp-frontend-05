import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

export const withAuth =
  (Component: ComponentType) =>
  <P extends `Recode<string, never>`>(props: P) => {
    const router = useRouter();
    useEffect(() => {
      if (!localStorage.getItem("accessToken")) {
        alert("로그인을 먼저 해 주세요!!");
        router.push("/23-04-login-check");
      }
    }, []);
    return <Component {...props} />;
  };
