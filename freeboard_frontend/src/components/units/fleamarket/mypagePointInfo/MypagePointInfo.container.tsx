import MypagePointInfoUI from './MypagePointInfo.presenter'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { FETCH_POINT_TRANSACTIONS } from './MypagePointInfo.queries'
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
} from '../../../../commons/types/generated/types'
import { ChangeEvent, useState } from 'react'
import _ from 'lodash'

export default function MypagePointInfo() {
  const router = useRouter()
  const [keyword, setKeyword] = useState<string>()
  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchPointTransactions'>,
    IQueryFetchPointTransactionsArgs
  >(FETCH_POINT_TRANSACTIONS, {
    variables: { search: '', page: 1 },
  })
  // 검색기능
  const getDebounce = _.debounce((el) => {
    refetch({ search: el, page: 1 })
    setKeyword(el)
  }, 200)
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value)
  }
  // 페이지네이션
  const onClickPage = (event: ChangeEvent<HTMLButtonElement>) => {
    if (event.target instanceof Element)
      refetch({ search: keyword, page: Number(event.target.id) })
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
    <MypagePointInfoUI
      data={data}
      keyword={keyword}
      refetch={refetch}
      onChangeSearch={onChangeSearch}
      onClickPage={onClickPage}
      onClickPWChange={onClickPWChange}
      onClickPickedList={onClickPickedList}
      onClickSelling={onClickSelling}
      onClickBuying={onClickBuying}
      onClickPointInfo={onClickPointInfo}
    />
  )
}
