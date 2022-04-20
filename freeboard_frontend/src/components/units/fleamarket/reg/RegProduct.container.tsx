import FleamarketRegUI from './RegProduct.presenter'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  CREATE_USED_ITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from './RegProduct.queries'
import { useMutation } from '@apollo/client'
import { FormValues } from './RegProduct.types'
import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useState } from 'react'
const schema = yup.object().shape({
  name: yup.string().required('상품명을 입력해 주세요.'),
  remarks: yup.string().required('한줄요약을 입력해 주세요.'),
  contents: yup.string().required('상품설명을 입력해 주세요.'),
  price: yup.string().required('판매가격을 입력해 주세요.'),
  tags: yup.string().required('최소 한 개의 태그를 설정해 주세요.'),
  // useditemAddress: yup.string().required("주소를 입력해 주세요."),
})
// 웹 에디터

export default function FleamarketReg(props) {
  const [createUseditem] = useMutation(CREATE_USED_ITEM)
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM)

  const [isOpen, setIsOpen] = useState(false)
  const [fileUrls, setFileUrls] = useState(['', '', '', ''])
  const [zipcode, setZipcode] = useState('')
  const [address, setAddress] = useState('')
  const [addressDetail, setAddressDetail] = useState('')
  // const [tags, setTags] = useState([]);
  // YUP 사용하여 Input 필수입력검증
  const router = useRouter()
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })
  // 태그 입력값받기
  // const onChangeTags = (event) => {
  //   setTags(event.target.value);
  // };

  // 웹 에디터 추가
  const handleChange = (value: string) => {
    setValue('contents', value === '<p><br></p>' ? '' : value)
    trigger('contents')
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
  const onClickSubmit = async (data: FormValues) => {
    const { name, remarks, contents, price } = data
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name,
            remarks,
            contents,
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
  const onClickUpdate = async (data) => {
    const { name, remarks, contents, price } = data
    try {
      await updateUseditem({
        variables: {
          updateUseditemInput: {
            name,
            remarks,
            contents,
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
      onClickSubmit={onClickSubmit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickUpdate={onClickUpdate}
      onChangeFileUrls={onChangeFileUrls}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      fileUrls={fileUrls}
      isOpen={isOpen}
      data={props.data}
      zipcode={zipcode}
      address={address}
      handleChange={handleChange}
    />
  )
}
//            name, remarks, contents, price, tags, useditemAddress, images
// input text 상품명, 한줄요약, 상품설명, 판매가격, 태그입력, 주소, 사진
// button 등록하기
