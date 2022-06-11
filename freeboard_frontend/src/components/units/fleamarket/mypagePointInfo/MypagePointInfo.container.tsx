import MypagePointInfoUI from './MypagePointInfo.presenter'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import {
  FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
} from './MypagePointInfo.queries'
import {
  IQuery,
  IQueryFetchPointTransactionsOfLoadingArgs,
} from '../../../../commons/types/generated/types'
import { ChangeEvent } from 'react'
import _ from 'lodash'

export default function MypagePointInfo() {
  const router = useRouter()
  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchPointTransactionsOfLoading'>,
    IQueryFetchPointTransactionsOfLoadingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_LOADING, {
    variables: { search: '', page: 1 },
  })

  // 페이지네이션
  const onClickPage = (event: ChangeEvent<HTMLButtonElement>) => {
    if (event.target instanceof Element)
      refetch({ page: Number(event.target.id) })
  }
  // 페이지값 int
  const { data: dataCount } = useQuery<
    Pick<IQuery, 'fetchPointTransactionsCountOfLoading'>
  >(FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING)
  // router
  const onClickPointInfo = () => {
    router.push('/fleamarket/mypage/pointInfo')
  }
  const onClickPWChange = () => {
    router.push('/fleamarket/mypage/changePassword')
  }
  const onClickPickedList = () => {
    router.push('/fleamarket/mypage/pickedList')
  }
  const onClickSelling = () => {
    router.push('/fleamarket/mypage/selling')
  }
  const onClickBuying = () => {
    router.push('/fleamarket/mypage/buying')
  }
  return (
    <MypagePointInfoUI
      data={data}
      count={dataCount}
      refetch={refetch}
      onClickPage={onClickPage}
      onClickPWChange={onClickPWChange}
      onClickPickedList={onClickPickedList}
      onClickSelling={onClickSelling}
      onClickBuying={onClickBuying}
      onClickPointInfo={onClickPointInfo}
    />
  )
}
