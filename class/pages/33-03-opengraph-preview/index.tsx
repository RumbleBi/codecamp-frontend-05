import axios from "axios";
import { useEffect } from "react";

// cheerio = 스크래핑 도구 : html 코드를 한번 긁어내는 것
// puppeteer = 크롤링 도구 : 긁어오는건 맞는데 정기적으로 긁어오는 것
export default function OpengraphPreviewPage() {
  // 디스코드 개발자 시점
  useEffect(() => {
    const getOpengraph = async () => {
      const result = await axios.get("https://www.gmarket.co.kr/"); // daum.net 은 CORS 차단 당하므로 백엔드에서 요청하는 것이 일반적이다.
      // console.log(result.data);
      // console.log(result.data.split("<meta"));
      const opengraph = result.data
        .split("<meta ")
        .filter((el) => el.includes("og:url"))[0]
        .split(" ");
      console.log(
        opengraph[1].replaceAll('content="', "").replaceAll('"/>', "")
      );
    };
    getOpengraph();
  }, []);
  return (
    <div>
      <div></div>
    </div>
  );
}
