import axios from "axios";

export default function CallbackPromiseAsyncawaitPage() {
  const onClickCallback = () => {
    // axios.get("http://numbersapi.com/random?min=1&max=200") 편한방법..!
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");

    aaa.send();

    aaa.addEventListener("load", (res: any) => {
      const num = res.target.response.split(" ")[0]; // 랜덤 숫자

      const bbb = new XMLHttpRequest();

      bbb.open("get", `http://koreanjson.com/posts/${num}`);

      bbb.send();

      bbb.addEventListener("load", (res: any) => {
        const userId = JSON.parse(res.target.response).UserId;

        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res: any) => {
          console.log("최종결과값");
          console.log(JSON.parse(res.target.response));
        });
      });
    });
  };

  const onClickPromise = () => {
    console.log("여기는1번");
    // 엑시오스가 프로미스를 활용한 라이브러리이다. promise가 있어야 then 사용 가능
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        console.log("여기는2번");
        const num = res.data.split(" ")[0];
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        console.log("여기는3번");
        const userId = res.data.UserId;
        // prettier-ignore
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log("여기는4번");
        console.log(res);
      });
    console.log("여기는5번");
  }; // promiseChain 콜백문제는 해결, 그러나 직관적이지 않음 log 1 - 5 - 2 - 3 - 4 순으로 나옴

  const onClickAsyncAwait = async () => {
    // axios 가 promise를 가지고 있기때문에, async await가 사용 가능한 것이다!!
    // prettier-ignore
    const res1 = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const num = res1.data.split(" ")[0];

    const res2 = await axios.get(`http://koreanjson.com/posts/${num}`);
    const userId = res2.data.UserId;

    // prettier-ignore
    const res3 = await axios.get(`http://koreanjson.com/posts?userId=${userId}`);
    console.log(res3);
  }; // 직관적, 간단!

  return (
    <div>
      <button onClick={onClickCallback}>콜백요청</button>
      <button onClick={onClickPromise}>프로미스요청</button>
      <button onClick={onClickAsyncAwait}>에이싱크어웨이트요청</button>
    </div>
  );
}
