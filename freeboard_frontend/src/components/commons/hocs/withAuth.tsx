import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  useEffect(() => {
    if (!document.cookie) {
      alert("로그인을 먼저 해 주세요!!");
      router.push("/fleamarket/login");
    }
    // if (!localStorage.getItem("accessToken")) {
    //   alert("로그인을 먼저 해 주세요!!");
    //   router.push("/fleamarket/login");
    // }
  }, []);
  return <Component {...props} />;
};
