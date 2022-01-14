// ## state를 활용한 인증번호 생성하기

// 1. 인증번호 6자리 "000000"과 "인증번호전송"이라는 버튼을 만들고, 버튼 클릭시 인증번호를 만들어서
// 인증번호 6자리가 변경되도록 적용해 주세요.
// 1-1) let과 document.getElementById()를 사용해 주세요.
// 1-2) state를 사용해 주세요.
import {useState} from 'react'

export default function verification() {
    const [verificationState, setVerificationState] = useState("000000")

    const setVerificationState = () => {
        
    }
    const CreateState = () => {
        setVerificationState();
    }

    return (
        <>
            <button onClick={CreateState}></button>
            <div>{verificationState}</div>
        </>
    )
}
// let isStarted = false;

// const getToken = () => {

//     // 버튼의 상태가 false 라면(버튼이 안눌린상태라면) => getToken 기능 실행
//         //만약 타이머가 돌기 시작할 때 => isStarted를 true로 바꿔준다
//         //만약 타이머가 종료되면 => isStarted를 false로 바꿔준다
//     // 아니면(타이머가 돌고 있는 중) 버튼을 못누르게 함

//     if (isStarted === false) {
//         isStarted = true;

//         let token = String(Math.floor(Math.random() * 100000)).padStart(6, "0");
//         document.getElementById("number").innerText = token;
//         // document.getElementById("number").style.color = '#' + token;

//         let time = 180;

//         setInterval(function() {
//             if (time >= 0) {
//                 const min = String(Math.floor(time / 60)).padStart(2, "0");
//                 const sec = String(time % 60).padStart(2, "0");
//                 document.getElementById("count").innerText = min;
//                 document.getElementById("count2").innerText = sec;
//                 time = time - 1;
//             } else {
//                 const timeOut = document.getElementById("btn2");
//                 timeOut.disabled = true;
//                 isStarted = false;
//             }
//         }, 1000)

//         } else {

//             alert("연타하지마 이자식아");
//         }
// }