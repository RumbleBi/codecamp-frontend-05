import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button01 from "../../src/components/commons/buttons/01/index";
import Input01 from "../../src/components/commons/inputs/01/index";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("이메일형식이 적합하지 않습니다.")
    .required("필수 입력 사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요.")
    .max(15, "최대 15자리 이상 입력해 주세요")
    .required("필수입력사항입니다."),
});

interface FormValues {
  email?: string;
  password?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onClickSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      이메일: <Input01 aaa="text" bbb={register("email")} />
      {/* 이메일: <input type="text" {...register("email")} /> */}
      <div>{formState.errors.email?.message}</div>
      비밀번호: <Input01 aaa="password" bbb={register("password")} />
      {/* 비밀번호: <input type="text" {...register("password")} /> */}
      <div>{formState.errors.password?.message}</div>
      <Button01 type="submit" isValid={formState.isValid} name="로그인" />
    </form>
  );
}
// src component commons 에서 데이터 확인!!
