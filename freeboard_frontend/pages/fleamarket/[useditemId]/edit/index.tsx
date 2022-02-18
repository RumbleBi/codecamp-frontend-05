import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";
import { withAuth } from "../../../../src/components/commons/hocs/withAuth";
import RegistrationProductPage from "../../reg/index";
// const FETCH_USED_ITEM = gql`
//   query fetchUseditem($useditemId: ID!) {
//     fetchUseditem(useditemId: $useditemId) {
//       _id
//       name
//       remarks
//       contents
//       price
//     }
//   }
// `;

function RegEditPage() {
  const [isEdit, setIsEdit] = useState(true);
  // const router = useRouter();

  // const { data } = useQuery<
  //   Pick<IQuery, "fetchUseditem">,
  //   IQueryFetchUseditemArgs
  // >(FETCH_USED_ITEM, {
  //   variables: { useditemId: String(router.query.useditemId) },
  // });
  return <RegistrationProductPage isEdit={true} />;
}
export default withAuth(RegEditPage);
