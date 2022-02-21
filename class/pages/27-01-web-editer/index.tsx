// import ReactQuill from "react-quill"; //다이나믹 import로 변경하기 왜냐하면 next.js는 프리렌더링시, document, window 기능들을 사용할 수 없기 때문에 동적으로 렌더링하도록 설정해야한다.
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }); // 브라우저가 있는 곳에서만 리액트 퀼, ssr에서는 사용XXX
export default function WebEditorPage() {
  const handleChange = (value: string) => {
    console.log(value);
  };
  //   if (process.browser) {
  //     console.log("나는 브라우저다!!");
  //   } else {
  //     console.log("나는 FE서버다!!");
  //   }
  return (
    <div>
      작성자 : <input type="text" />
      <br />
      비밀번호 : <input type="password" />
      <br />
      제목 : <input type="text" />
      <br />
      내용 : {process.browser && <ReactQuill onChange={handleChange} />}
      <br />
      <button>등록하기</button>
    </div>
  );
}
