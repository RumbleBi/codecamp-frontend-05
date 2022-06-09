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
