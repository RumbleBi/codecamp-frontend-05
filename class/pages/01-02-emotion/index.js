import styled from '@emotion/styled'
import {LogIn} from '../../styles/emotion'
import {Id} from '../../styles/emotion'
import {IdText} from '../../styles/emotion'
import {Password} from '../../styles/emotion'
import {PasswordText} from '../../styles/emotion'





export default function EmotionPage() {

    return (
        <div>
            <LogIn>로그인</LogIn>
            <Id>아이디</Id>
            <IdText></IdText>
            <Password>비밀번호</Password>
            <PasswordText></PasswordText>
        </div>
    )
}