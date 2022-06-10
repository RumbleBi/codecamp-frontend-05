import { useMutation, useQuery } from '@apollo/client'
import {
  IMutation,
  IMutationUpdateUserArgs,
  IQuery,
  IQueryFetchPointTransactionsArgs,
} from '../../../../commons/types/generated/types'
import MypageUI from './MyPage.presenter'
import {
  FETCH_POINT_TRANSACTIONS,
  FETCH_USER_LOGGED_IN,
  UPDATE_USER,
} from './MyPage.queries'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
export default function Mypage() {
  const [fileUrl, setFileUrl] = useState('')
  const [name, setName] = useState('')
  const router = useRouter()
  // router
  const onClickPointInfo = () => {
    router.push('/fleamarket/mypage/onClickPointInfo')
  }
  const onClickPWChange = () => {
    router.push('/fleamarket/mypage/changePw')
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
  // 유저 정보 업데이트
  const [updateUser] = useMutation<
    Pick<IMutation, 'updateUser'>,
    IMutationUpdateUserArgs
  >(UPDATE_USER)
  // 유저 정보
  const { data: dataUser } =
    useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)
  // 포인트 내역 (충전, 적립, 사용)
  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchPointTransactions'>,
    IQueryFetchPointTransactionsArgs
  >(FETCH_POINT_TRANSACTIONS, {
    variables: { page: 1, search: '' },
  })
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const onClickChangeName = async () => {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            name,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USER_LOGGED_IN,
          },
        ],
      })
      alert('이름이 변경되었습니다.')
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }
  // 업로드 사진 변경시 함수
  const onChangeFileUrl = (fileUrl: string) => {
    const newFileUrl = fileUrl
    setFileUrl(newFileUrl)
  }
  // 이미지 등록 버튼
  const onClickChangePicture = async () => {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            picture: fileUrl,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USER_LOGGED_IN,
          },
        ],
      })
      alert('프로필사진이 변경되었습니다.')
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }
  return (
    <MypageUI
      name={name}
      data={data}
      fileUrl={fileUrl}
      dataUser={dataUser}
      refetch={refetch}
      onChangeName={onChangeName}
      onClickChangeName={onClickChangeName}
      onClickChangePicture={onClickChangePicture}
      onChangeFileUrl={onChangeFileUrl}
      onClickPWChange={onClickPWChange}
      onClickPickedList={onClickPickedList}
      onClickSelling={onClickSelling}
      onClickBuying={onClickBuying}
      onClickPointInfo={onClickPointInfo}
    />
  )
}
