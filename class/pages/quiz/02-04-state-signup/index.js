import {useState} from 'react'
import styled from '@emotion/styled'

export const Text = styled.div`
    color: red;
`
export default function StateSignup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    function Email(event) {
    
        setEmail(event.target.value)
    }

    function Password (event) {
        setPassword(event.target.value)
    }

    function PasswordCheck (event) {
        setPasswordCheck(event.target.value)
    }

    function SignIn() {
        if (password === passwordCheck && email.includes("@") === true) {
            alert("회원가입을 축하합니다!")
        }
        if (password !== passwordCheck) {
            setPasswordError("비밀번호가 일치하지 않습니다.")
        }
        if (email.includes("@") !== true) {
            setEmailError("올바른 이메일 형식을 적어주세요.")
        }
    }

    return (
        <div>
            이메일: <input type="text" onChange={Email} /><br /> 
            <Text>{emailError}</Text><br /><br />
            비밀번호: <input type="password" onChange={Password} /><br />
            <Text>{passwordError}</Text><br /><br />
            비밀번호확인: <input type="password" onChange={PasswordCheck} /><br />
            <Text>{passwordError}</Text><br /><br />
            <button onClick={SignIn} >회원가입</button>
        </div>
    )
}