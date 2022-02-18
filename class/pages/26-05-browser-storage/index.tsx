import { attachTypeApi } from "antd/lib/message";

export default function BrowserStoragePage() {
  const onClickSaveCookie = () => {
    document.cookie = "dhhj=토큰값;"; // 토큰인척함
    document.cookie = "zzz=맹구";
  };

  const onClickSaveLocal = () => {
    localStorage.setItem("bbb", "영희");
  };

  const onClickSaveSession = () => {
    sessionStorage.setItem("ccc", "훈이");
  };

  const onClickGetCookie = () => {
    // const aaa = document.cookie;
    // console.log(aaa); 토큰뒤에 [; ] 을 기준으로 나눠서 쿠키값이 붙어서 들어감!! split으로 구분해주자
    // ["토큰값", "쿠키값"]

    const aaa = document.cookie
      .split("; ")
      .filter((el) => el.startsWith("dhhj="))[0];
    const result = aaa.replace("dhhj=", "");
    console.log(result);
  };

  const onClickGetLocal = () => {
    const bbb = localStorage.getItem("bbb");
    console.log(bbb);
  };

  const onClickGetSession = () => {
    const ccc = sessionStorage.getItem("ccc");
    console.log(ccc);
  };

  return (
    <div>
      <button onClick={onClickSaveCookie}>쿠키저장</button>
      <button onClick={onClickSaveLocal}>로컬저장</button>
      <button onClick={onClickSaveSession}>세션저장</button>
      =======================
      <button onClick={onClickGetCookie}>쿠키조회</button>
      <button onClick={onClickGetLocal}>로컬조회</button>
      <button onClick={onClickGetSession}>세션조회</button>
    </div>
  );
}
