import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent } from 'react'
import {
  IQuery,
  IQueryFetchPointTransactionsOfBuyingArgs,
} from '../../../../commons/types/generated/types'
import MypageBuyingUI from './MypageBuying.presenter'
import {
  FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_OF_BUYING,
} from './MypageBuying.queries'

export default function MypageBuying() {
  const router = useRouter()
  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchPointTransactionsOfBuying'>,
    IQueryFetchPointTransactionsOfBuyingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_BUYING, { variables: { page: 1 } })
  // 페이지 int
  const { data: dataCount } = useQuery<
    Pick<IQuery, 'fetchPointTransactionsCountOfSelling'>
  >(FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING)

  const onClickPage = (event: ChangeEvent<HTMLButtonElement>) => {
    if (event.target instanceof Element)
      refetch({ page: Number(event.target.id) })
  }

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
    <MypageBuyingUI
      data={data}
      count={dataCount?.fetchPointTransactionsCountOfSelling}
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
