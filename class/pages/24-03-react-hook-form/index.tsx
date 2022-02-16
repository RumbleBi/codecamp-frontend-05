import { useForm } from "react-hook-form";

interface FormValues {
  Writer?: string;
  Title?: string;
  Contents?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm();

  const onClickSubmit = (data: FormValues) => {
    console.log(data);
  };

  //   console.log("리렌더링체크!!"); 인풋값을 바꿔도 리렌더링이 안되지롱ww
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("Writer")} />
      제목: <input type="text" {...register("Title")} />
      내용: <input type="text" {...register("Contents")} />
      <button>등록하기</button>
      {/* 만약 등록하기 버튼에 onClick 속성을 넣으면 둘 다 실행된다 조심!! 쓰고싶으면 버튼 타입을 버튼으로 주자! type="button" */}
      {/* <button type="button" onClick={}>나만의 버튼</button> */}
    </form>
  );
}
// form => input 태그들을 묶어주는 역할
// 버튼의 기본기능은 submit 기능이 있으므로 type="sumbit" 을 적지 않아도 default로 적용된다.
// 개인 커스텀 버튼을 만들려면 type="button"을 해야한다.
