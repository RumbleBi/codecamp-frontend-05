import MypageSellingUI from './MypageSelling.presenter'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import {
  FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING,
  FETCH_POINT_TRANSACTIONS_OF_SELLING,
} from './MypageSelling.queries'
import {
  IQuery,
  IQueryFetchPointTransactionsOfSellingArgs,
} from '../../../../commons/types/generated/types'
import { ChangeEvent } from 'react'

export default function MypageSelling() {
  const router = useRouter()
  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchPointTransactionsOfSelling'>,
    IQueryFetchPointTransactionsOfSellingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_SELLING, {
    variables: { search: '', page: 1 },
  })
  // 페이지 네이션
  const onClickPage = (event: ChangeEvent<HTMLButtonElement>) => {
    if (event.target instanceof Element)
      refetch({ page: Number(event.target.id) })
  }
  // 페이지 int
  const { data: dataCount } = useQuery<
    Pick<IQuery, 'fetchPointTransactionsCountOfSelling'>
  >(FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING)

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
    <MypageSellingUI
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
