import * as S from './BoardWrite.styles'
import { IBoardWriteUIProps } from './BoardWrite.types'
import { Modal } from 'antd'
import DaumPostcode from 'react-daum-postcode'

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Position>
      {props.isOpen && (
        <Modal
          visible={true}
          width={700}
          closable={false}
          cancelText={'취소'}
          okText={'확인'}
          onOk={props.onSuccessAddressSearch}
          onCancel={props.onClickAddressCancel}
        >
          <DaumPostcode onComplete={props.onSuccessAddressSearch} />
        </Modal>
      )}
      <S.Wrapper>
        <S.Title>{props.isEdit ? '게시글수정' : '게시글등록'}</S.Title>
        <S.WrapperProfile>
          <div>
            <S.Label>작성자</S.Label>
            <S.WriterContent
              ref={props.inputRef}
              type="text"
              onChange={props.onChangeWriter}
              placeholder="이름을 적어주세요."
              defaultValue={props.data?.fetchBoard?.writer || ''}
              readOnly={!!props.data?.fetchBoard?.writer}
            />
            <S.ErrorMassage>{props.writerError}</S.ErrorMassage>
          </div>
          <div>
            <S.Label>비밀번호</S.Label>
            <S.PasswordContent
              type="password"
              onChange={props.onChangePassword}
              // password는 다른 방식으로 일치하는지 만들어줘야할듯
              placeholder="비밀번호를 입력해주세요."
            />
            <S.ErrorMassage>{props.passwordError}</S.ErrorMassage>
          </div>
        </S.WrapperProfile>
        <S.WrapperName>
          <div>
            <S.Label>제목</S.Label>
            <S.NameContent
              type="text"
              onChange={props.onChangePost}
              placeholder="제목을 적어주세요."
              defaultValue={props.data?.fetchBoard?.title}
            />
            <S.ErrorMassage>{props.postError}</S.ErrorMassage>
          </div>
        </S.WrapperName>
        <S.WrapperContent>
          <div>
            <S.Label>내용</S.Label>
            <S.ContentInput
              onChange={props.onChangeContent}
              placeholder="내용을 입력해 주세요."
              defaultValue={props.data?.fetchBoard?.contents}
            />
            <S.ErrorMassage>{props.contentError}</S.ErrorMassage>
          </div>
        </S.WrapperContent>
        <S.WrapperAddress>
          <S.Label>주소</S.Label>
          <div style={{ display: 'flex' }}>
            <S.Zipcode
              placeholder="00000"
              readOnly
              value={
                props.zipcode ||
                props.data?.fetchBoard?.boardAddress?.zipcode ||
                ''
              }
            />
            <S.AddressSearchBtn onClick={props.onClickAddressSearch}>
              우편번호 검색
            </S.AddressSearchBtn>
          </div>
        </S.WrapperAddress>
        <S.AddressDetail
          readOnly
          value={
            props.address || props.data?.fetchBoard?.boardAddress?.address || ''
          }
        />
        <S.AddressDetail
          onChange={props.onChangeAddressDetail}
          defaultValue={
            props.data?.fetchBoard?.boardAddress?.addressDetail || ''
          }
        />
        <div>
          <S.Label>유튜브</S.Label>
          <div>
            <S.YoutubeUrl
              placeholder="링크를 넣어주세요."
              onChange={props.onChangeYoutubeUrl}
              defaultValue={props.data?.fetchBoard?.youtubeUrl || ''}
            />
          </div>
        </div>
        <div>
          <S.Label>사진 첨부</S.Label>
          <div>
            <S.PictureInput
              // style={{ display: 'none' }}
              ref={props?.fileRef}
              type="file"
              onChange={props?.onChangeFile}
            />
            <S.WrapperUploadBtn>
              <S.PictureDetail onClick={props?.onClickImage}>
                Upload
              </S.PictureDetail>
              <S.PictureDetail onClick={props?.onClickImage}>
                Upload
              </S.PictureDetail>
              <S.PictureDetail onClick={props?.onClickImage}>
                Upload
              </S.PictureDetail>
            </S.WrapperUploadBtn>
            <S.WrapperPicture>
              <S.Image
                src={`https://storage.googleapis.com/${props.image[0]}`}
              />
              <S.Image
                src={`https://storage.googleapis.com/${props.image[1]}`}
              />
              <S.Image
                src={`https://storage.googleapis.com/${props.image[2]}`}
              />
            </S.WrapperPicture>
          </div>
        </div>
        <S.RegisterBtn
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
          isActive={props.isEdit ? true : props.isActive}
        >
          {props.isEdit ? '수정하기' : '등록하기'}
        </S.RegisterBtn>
      </S.Wrapper>
    </S.Position>
  )
}
