import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
export default function WebEditorPage() {
  const { register, handleSubmit, setValue, trigger } = useForm({
    // setValue 값을 강제로 넣어줘야한다 hookform에서는 못받아들임
    mode: "onChange",
  });
  const handleChange = (value: string) => {
    console.log(value);

    // register로 등록하지 않고 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br></p>" ? "" : value);
    // 빈 값을 넣어주기 위한 조건문 콘솔로그 보면 이해가 된다구

    // onChange를 확인하기 위해 쓴다. yup은 변경이 되었을 때 검증을 하기 때문에 잡아줘야한다.
    // onChange가 됐는지 안됐는지 확인, react-hook-form에 알려주는 기능!
    trigger("contents");
  };

  return (
    <div>
      작성자 : <input type="text" {...register("writer")} />
      <br />
      비밀번호 : <input type="password" {...register("password")} />
      <br />
      제목 : <input type="text" {...register("title")} />
      <br />
      내용 : {process.browser && <ReactQuill onChange={handleChange} />}
      <br />
      <button>등록하기</button>
    </div>
  );
}
