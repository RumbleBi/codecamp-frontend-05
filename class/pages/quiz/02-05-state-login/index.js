// 1) 아이콘 등 모든 그림은 제플린과 동일하게 만들어 주세요.
// 2) state, setState, useState를 사용하여 이메일과 비밀번호가 빈칸인지 검증하고, 빈칸이라면 그림과 같은 메시지를 나타나게 만들어 주세요.
// 3) 이메일은 @가 포함되어있는지, 비밀번호는 8자리가 넘는지 확인해 주세요
// 4) 맨 윗줄의 와이파이, 배터리 등은 만들지 않습니다.
import styled from "@emotion/styled";
import { useState } from "react"

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 640px;
    padding: 0 50px 0 50px;
    background-image: url("/images/background.png");

`

const LogoWrapper = styled.div`
    display: flex;              //하위 자식인 "잇츠로드"의 위치를 잡기위해 선언
    flex-direction: column;
    align-items: center;
    padding-top: 220px;
    padding-bottom: 160px;
`

const LogoImg = styled.img`
    z-index: 2;
    width: 100px;
    height: 100px;
    
`

const LogoImg2 = styled.img`
    z-index: 1;
    margin: -18px;
    width: 70px;
    height: 20px;
`

const LogoTitle = styled.div`
    font-size: 60px;
    font-weight: bold;
    padding-top: 30px;
    color: white;
`

const InputWrapper = styled.div`
    width: 540px;
`

const EmailInputWrapper = styled.div`
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
    padding-bottom: 20px;
`

const EmailInput = styled.input`
    width: 80%;
    font-size: 24px;
    color: gray;
    background: none;
    outline: none;
    border: none;
`
const PasswordInputWrapper = styled.div`
    border-bottom: 1px solid gray;
    padding-bottom: 20px;
    margin-bottom: 10px;
`

const PasswordInput = styled.input`
    width: 80%;
    margin-top: 40px;
    font-size: 24px;
    color: gray;
    background: none;
    outline: none;
    border: none;
`

const EmailError = styled.div`
    padding-top: 10px;
    font-size: 18px;
    color: red;
`

const PasswordError = styled.div`
    padding-top: 10px;
    font-size: 18px;
    color: red;
`

const LoginButton = styled.div`
    display: flex;              //하위 자식인 "로그인"의 위치를 잡기위해 선언
    justify-content: center;
    align-items: center;
    width: 100%;                //Wrapper의 padding 640px - 50px한 값
    height: 76px;
    border-radius: 30px;
    padding: 25px 0;            //위 아래, 오른쪽 완쪽 (3개일 경우: 위 오른쪽왼쪽 아래)
    cursor: pointer;
`

const LoginButtonTitle = styled.div`
    opacity: 1;                 //투명도 0~1 진할수록 1에 가까워짐
    font-size: 26px;
    font-weight: bold;
    color: white;
`

const EtcButton = styled.div`
    display: flex;              //하위 자식인 "이메일찾기", "비밀번호찾기", "회원가입", "|"의 위치를 잡기위해 선언
    justify-content: space-evenly;
    width: 100%;
`

const EtcItem = styled.div`
    font-size: 20px;
    color: white;
    cursor: pointer;
`

const SocialLoginButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 76px;
    border-radius: 38px;
    padding: 25px 0;
    color: #FFD400;
    border: 2px solid #FFD400;
    margin: 60px 0px 80px;
    cursor: pointer;
`

const SocialLoginButtonImg = styled.img`
    width: 28px;
    height: 28px;
    margin-right: 20px;
`

const SocialLoginButtonTitle = styled.div`
    opacity: 1;
    font-size: 26px;
    font-weight: bold;
`

export default function EatsLoad () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const onChangeEmail = (event) => {
        setEmail(event.target.value)            //다시한번 봐두기
        if (email.includes("@")) {
            setEmailError("")
        } else {
            setEmailError("이메일 주소를 다시 확인해주세요.")
        }
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
        if (password.length >= 8 && password.length <= 16) {
            setPasswordError("")
        } else {
            setPasswordError("8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.")
        }
    }

    const onClickLogin = () => {
        if (emailError === "" && passwordError === "") {
            alert("로그인하셨습니다")
        }
    }

    return (
        <Container>
            <Wrapper>
                <LogoWrapper>
                    <LogoImg src="/images/logo-white.png"></LogoImg>
                    <LogoImg2 src="/images/logo-white2.png"></LogoImg2>
                    <LogoTitle>잇츠로드</LogoTitle>
                </LogoWrapper>
                <InputWrapper>
                    <EmailInputWrapper>
                        <EmailInput placeholder="이메일을 입력해주세요" onChange={onChangeEmail}></EmailInput>
                    </EmailInputWrapper>
                    <EmailError>{emailError}</EmailError>
                    <PasswordInputWrapper>
                        <PasswordInput placeholder="비밀번호를 입력해주세요" type="password" onChange={onChangePassword}></PasswordInput>
                    </PasswordInputWrapper>
                    <PasswordError>{passwordError}</PasswordError>
                </InputWrapper>
                <LoginButton onClick={onClickLogin}>
                    <LoginButtonTitle>로그인</LoginButtonTitle>
                </LoginButton>
                <EtcButton>
                    <EtcItem>이메일 찾기</EtcItem>
                    <EtcItem>|</EtcItem>
                    <EtcItem>비밀번호 찾기</EtcItem>
                    <EtcItem>|</EtcItem>
                    <EtcItem>회원가입</EtcItem>
                </EtcButton>
                <SocialLoginButton>
                    <SocialLoginButtonImg src="/images/logo-kakao.png"></SocialLoginButtonImg>
                    <SocialLoginButtonTitle>카카오톡으로 로그인</SocialLoginButtonTitle>
                </SocialLoginButton>
            </Wrapper>
        </Container>
    )
}
