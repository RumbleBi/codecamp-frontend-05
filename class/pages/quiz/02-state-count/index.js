import {useState} from 'react'

export default function count() {
    const [Hello, setHello] = useState("안녕하세요")
    const [Wellcom, setWellcom] = useState("반갑습니다")


    function ChangeWord() {
        

    }
    return (
        <button onClick={ChangeWord}>{Hello}</button>
    )
}