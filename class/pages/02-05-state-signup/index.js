import { useState } from "react";

export default function StateSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("에러메세지가 없습니다.");
  const [passwordError, setPasswordError] = useState("에러메세지가 없습니다.");

  function aaa(event) {
    // onChange={aaa} aaa는 '이벤트 핸들러 함수' on~~으로 시작하는것들은 event에 들어오게 된다. 구글 개발자환경에서 확인 가능
    // event.target => <input type="text" /> 태그 전체를 가져옴
    // console.log(event.target.value) => 해당 태그의 값을 가져옴
    setEmail(event.target.value);
  }

  function bbb(event) {
    setPassword(event.target.value);
  }

  function ccc() {
    // console.log('email: ' + email)
    // console.log('password: ', password)

    // if (email.includes("@") === false) {
    //     alert("이메일에 @가 없습니다. 잘못된 이메일이네요!!")
    // } else {
    //     alert("회원가입을 축하합니다!!")
    // }                                    알림창방식

    if (email.includes("@") === false) {
      setEmailError("문제가 있습니다");
      setPasswordError("비밀번호가 이상합니다");
    } //입력창 아래에 메시지 방식
  }

  return (
    <div>
      이메일: <input type="text" onChange={aaa} />
      <br />
      <span>{emailError}</span>
      <br />
      <br />
      비밀번호: <input type="password" onChange={bbb} />
      <br />
      <span>{passwordError}</span>
      <br />
      <br />
      <button onClick={ccc}>회원가입</button>
    </div>
  );
}

//state 의 변수가 회원가입한 폼의 내용들을 한데 묶어 하나의 state변수에 모두 저장하여 백엔드로 보낸다.
