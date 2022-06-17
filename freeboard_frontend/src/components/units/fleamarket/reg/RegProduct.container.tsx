import FleamarketRegUI from './RegProduct.presenter'
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from './RegProduct.queries'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useState } from 'react'

// const schema = yup.object().shape({
//   name: yup.string().required('상품명을 입력해 주세요.'),
//   remarks: yup.string().required('제목을 입력해 주세요.'),
//   // contents: yup.string().required('내용을 입력해 주세요.'),
//   price: yup.string().required('판매가격을 입력해 주세요.'),
// })
// 웹 에디터

export default function FleamarketReg(props) {
  const [createUseditem] = useMutation(CREATE_USED_ITEM)
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM)
  const [name, setName] = useState('')
  const [remarks, setRemarks] = useState('')
  const [contents, setContents] = useState('')
  const [price, setPrice] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [fileUrls, setFileUrls] = useState(['', '', '', ''])
  const [zipcode, setZipcode] = useState('')
  const [address, setAddress] = useState('')
  const [addressDetail, setAddressDetail] = useState('')
  const [tags, setTags] = useState('')
  // YUP 사용하여 Input 필수입력검증
  const router = useRouter()
  // const { register, handleSubmit, formState, setValue, trigger } = useForm({
  //   mode: 'onChange',
  //   resolver: yupResolver(schema),
  // })
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const onChangeRemarks = (event: ChangeEvent<HTMLInputElement>) => {
    setRemarks(event.target.value)
  }
  const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value)
  }
  const onChangeTags = (event: ChangeEvent<HTMLInputElement>) => {
    setTags(event.target.value)
  }
  // 웹 에디터 추가
  const handleChange = (value) => {
    setContents(value === '<p><br></p>' ? '' : value)
  }
  // 사진 업로드 데이터 변경시마다 FETCH
  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images])
    }
  }, [props.data])
  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value)
  }
  const onClickAddressSearch = () => {
    setIsOpen(true)
  }
  const onClickAddressCancel = () => {
    setIsOpen(false)
  }
  // Daum API 사용으로인해, 타입지정 찾아야됨
  const onCompleteAddressSearch = (data: any) => {
    setAddress(data.address)
    setZipcode(data.zonecode)
    setIsOpen(false)
  }
  // 업로드 사진 변경시 함수
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls]
    newFileUrls[index] = fileUrl
    setFileUrls(newFileUrls)
  }
  // 등록버튼함수
  const onClickSubmit = async () => {
    const transTags = tags.split('#').splice(1)

    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name,
            remarks,
            contents,
            tags: transTags,
            price: Number(price),
            useditemAddress: {
              zipcode,
              address,
              addressDetail,
            },
            images: fileUrls,
          },
        },
      })
      router.push(`/fleamarket/${result.data.createUseditem._id}`)
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }
  // 수정버튼함수
  const onClickUpdate = async () => {
    const transTags = tags.split('#').splice(1)

    try {
      await updateUseditem({
        variables: {
          updateUseditemInput: {
            name,
            remarks,
            contents,
            tags: transTags,
            price: Number(price),
            useditemAddress: {
              zipcode,
              address,
              addressDetail,
            },
            images: fileUrls,
          },
          useditemId: router.query.useditemId,
        },
      })
      router.push(`/fleamarket/${router.query.useditemId}`)
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }

  return (
    <FleamarketRegUI
      onChangeTags={onChangeTags}
      onChangeName={onChangeName}
      onChangeRemarks={onChangeRemarks}
      handleChange={handleChange}
      onChangePrice={onChangePrice}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeFileUrls={onChangeFileUrls}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      fileUrls={fileUrls}
      isOpen={isOpen}
      data={props.data}
      isEdit={props.isEdit}
      name={name}
      remarks={remarks}
      contents={contents}
      price={price}
      zipcode={zipcode}
      address={address}
      onClickAddressCancel={onClickAddressCancel}
    />
  )
}
