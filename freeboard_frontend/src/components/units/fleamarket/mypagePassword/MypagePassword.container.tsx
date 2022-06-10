import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import {
  IMutation,
  IMutationResetUserPasswordArgs,
} from '../../../../commons/types/generated/types'
import MyPagePasswordUI from './MypagePassword.presenter'
import { LOGOUT_USER, RESET_USER_PASSWORD } from './MypagePassword.queries'

export default function MyPagePassword() {
  const router = useRouter()
  const [isActive, setIsActive] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordCheck, setNewPasswordCheck] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordErrorCheck, setPasswordErrorCheck] = useState('')

  const RegexPassword =
    // 숫자, 영문, 특수문자 각 1자리 이상이면서 8자에서 16자 사이 통과
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
  const [logoutUser] = useMutation(LOGOUT_USER)
  const [resetUserPassword] = useMutation<
    Pick<IMutation, 'resetUserPassword'>,
    IMutationResetUserPasswordArgs
  >(RESET_USER_PASSWORD)

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value)
    if (!RegexPassword.test(event.target.value)) {
      setPasswordError('올바르지 않은 형식의 비밀번호입니다.')
    } else {
      setPasswordError('')
    }
  }
  const onChangePasswordCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPasswordCheck(event.target.value)
    if (!RegexPassword.test(event.target.value)) {
      setPasswordErrorCheck('올바르지 않은 형식의 비밀번호입니다.')
    } else {
      setPasswordErrorCheck('')
    }
  }

  const onClickResetPassword = async () => {
    if (newPassword === newPasswordCheck) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
    if (!isActive) {
      alert('비밀번호가 일치하지 않습니다 확인해주세요!')
      return
    }
    try {
      await resetUserPassword({
        variables: {
          password: newPasswordCheck,
        },
      })
      alert('비밀번호가 변경되었습니다! 다시 로그인해 주세요!')
      logoutUser()
      router.push('/fleamarket/login')
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }

  return (
    <MyPagePasswordUI
      onChangePasswordCheck={onChangePasswordCheck}
      onChangePassword={onChangePassword}
      onClickResetPassword={onClickResetPassword}
      passwordError={passwordError}
      passwordErrorCheck={passwordErrorCheck}
    />
  )
}
