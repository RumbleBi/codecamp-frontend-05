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
  UPLOAD_FILE,
} from './MyPage.queries'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
export default function Mypage() {
  const [fileUrls, setFileUrls] = useState([''])
  const [name, setName] = useState('')
  const router = useRouter()
  // 이미지파일 업로드
  const [uploadFile] = useMutation(UPLOAD_FILE)
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
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }
  // 업로드 사진 변경시 함수
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls]
    newFileUrls[index] = fileUrl
    setFileUrls(newFileUrls)
  }
  // 이미지 등록 버튼
  const onClickChangePicture = async () => {
    await updateUser({
      variables: {
        updateUserInput: {
          picture: dataUser?.fetchUserLoggedIn.picture,
        },
      },
      refetchQueries: [
        {
          query: FETCH_USER_LOGGED_IN,
        },
      ],
    })
  }
  console.log(dataUser?.fetchUserLoggedIn.picture)
  return (
    <MypageUI
      name={name}
      data={data}
      fileUrls={fileUrls}
      dataUser={dataUser}
      refetch={refetch}
      onChangeName={onChangeName}
      onClickChangeName={onClickChangeName}
      onClickChangePicture={onClickChangePicture}
      onChangeFileUrls={onChangeFileUrls}
    />
  )
}
