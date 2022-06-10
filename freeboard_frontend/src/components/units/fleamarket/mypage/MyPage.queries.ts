import { gql } from '@apollo/client'

// 최근 거래내역
export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      _id
      amount
      balance
      useditem {
        name
        price
        images
      }
    }
  }
`
// 유저 정보
export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
      createdAt
      updatedAt
      userPoint {
        amount
      }
    }
  }
`
// 유저 정보 업데이트
export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      name
      picture
    }
  }
`
