import axios from 'axios'
import {useState} from 'react'
export default function RestGet() {
    const [userGet, setUserGet] = useState("")

    const OnUserGet = async() => {
        const result = await axios.get("https://koreanjson.com/users")
        console.log(result.data[5].name)
        setUserGet(result.data[5].name)
    }

    return (
        <>
            <button onClick={OnUserGet}>REST-API 요청하기</button>
            <div>{userGet}</div>
        </>
    )
}