import { gql, useQuery } from "@apollo/client";
import { withAuth } from "../../src/commons/hocs/withAuth";
import { IQuery } from "../../src/commons/types/generated/types";
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

const LoginSuccessPage = () => {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  console.log(data?.fetchUserLoggedIn.name);

  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("로그인을 먼저 해 주세요!!");
  //     router.push("/23-04-login-check");
  //   }
  // }, []);
  // src commons hocs withAuth 로 사용할 것

  return (
    <div>
      <div>{data?.fetchUserLoggedIn.email}님 환영합니다!!</div>
    </div>
  );
};

export default withAuth(LoginSuccessPage);
