import { useRouter } from 'next/router'
import LayoutHeaderUI from './LayoutHeader.presenter'

export default function LayoutHeader() {
  const router = useRouter()
  const onClickTitle = () => {
    router.push('/')
  }
  const onClickFreeBoardList = () => {
    router.push('/boards/')
  }
  const onClickLogin = () => {
    router.push('/fleamarket/login')
  }
  return (
    <LayoutHeaderUI
      onClickFreeBoardList={onClickFreeBoardList}
      onClickTitle={onClickTitle}
      onClickLogin={onClickLogin}
    />
  )
}
