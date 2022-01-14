import {useState} from 'react'

export default function BtnCountUp() {
    const [countState, setCountState] = useState("카운트올리기")
    const [numberState, setNumberState] = useState(0)
    let countId = 0;

    function CountUpState() {
        setNumberState(++numberState);
    }

    function CountUpById() {
        countId++
        document.getElementById("numberId").innerText = countId
    }

    return (
        <>
            <button onClick={CountUpState}>{countState}</button>
            <div>{numberState}</div>
            <button onClick={CountUpById}>카운트올리기</button>
            <div id="numberId">0</div>
        </>
    )
}