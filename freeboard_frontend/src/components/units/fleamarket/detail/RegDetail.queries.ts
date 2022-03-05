import { gql } from "@apollo/client";

export const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const FETCH_USED_ITEM = gql`
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
        lat
        lng
      }
      images
      createdAt
    }
  }
`;
