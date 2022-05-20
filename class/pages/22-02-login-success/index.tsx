// import { gql, useQuery } from "@apollo/client";
// import { IQuery } from "../../src/commons/types/generated/types";
// const FETCH_USER_LOGGED_IN = gql`
//   query fetchUserLoggedIn {
//     fetchUserLoggedIn {
//       email
//       name
//     }
//   }
// `;

// export default function LoginSuccessPage() {
//   const { data } =
//     useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
//   console.log(data?.fetchUserLoggedIn.name);
//   return (
//     <div>
//       <div>{data?.fetchUserLoggedIn.email}님 환영합니다!!</div>
//     </div>
//   );
// }
import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    email
    name
  }
`;
export default function LoginSuccessPage() {
  return (
    <div>
      <div>00님 환영합니다!!</div>
    </div>
  );
}
