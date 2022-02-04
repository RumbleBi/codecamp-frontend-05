import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiPage() {
  const [dogUrl, setDogUrl] = useState("");
  useEffect(() => {
    const fetchDog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random"); // promise 때문에 async 없으면 undefined 뜸. 데이터가 올때까지 기다리지 않으니까
      console.log(result.data.message);
      setDogUrl(result.data.message);
    };
    fetchDog();
  }, []);

  // 크롬 개발자 도구로 Object 확인 가능 즉. result 객체에 data 등등 들어가 있음을 확인 가능.
  return (
    <div>
      <div>오픈API 연습!!</div>
      <img src={dogUrl} />
    </div>
  );
}
