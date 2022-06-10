// fetchPointTransactions 포인트 내역(충전,적립,사용)
// fetchPointTransactionsOfLoading (포인트 충전 내역)
// fetchPointTransactionsCountOfLoading (포인트 충전 횟수)
import { gql } from '@apollo/client'

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
export const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfLoading(search: $search, page: $page) {
      _id
      amount
      balance
      status
      statusDetail
      useditem {
        name
        price
        seller
        soldAt
      }
    }
  }
`

export const FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING = gql``
