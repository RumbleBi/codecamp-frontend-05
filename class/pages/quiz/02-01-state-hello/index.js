import {useState} from 'react'

export default function count() {
    const [Hello, setHello] = useState("안녕하세요")
    
    function StateChangeWord() {
        setHello("반갑습니다")
    }

    function LetChangeWord() {
        let Hello2 = document.getElementById("LetChange").innerText
        Hello2 = "반갑습니다"
        
    }

    return (
        <div>
            <button onClick={StateChangeWord}>{Hello}</button>
            <button id ="LetChange" onClick={LetChangeWord}>안녕하세요</button>
        </div>
    )
}