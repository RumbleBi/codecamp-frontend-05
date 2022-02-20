import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { createContext, useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";
import { withAuth } from "../../../../src/components/commons/hocs/withAuth";
import FleamarketReg from "../../../../src/components/units/fleamarket/reg/RegProduct.contatiner";
const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      useditemAddress {
        zipcode
        address
        addressDetail
      }
      images
      createdAt
    }
  }
`;
export const RegContext = createContext({});

function RegEditPage() {
  const router = useRouter();
  const myValue = {
    isEdit: true,
  };

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });
  return (
    <RegContext.Provider value={myValue}>
      <FleamarketReg data={data} />
    </RegContext.Provider>
  );
}
export default withAuth(RegEditPage);
