import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";

interface IMyButtonProps {
  isValid: boolean;
}
const MyButton = styled.button`
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "#ffd400" : ""};
`;

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
    reslover: yupResolver(schema),
  });

  const onClickSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      이메일: <input type="text" {...register("email")} />
      <div>{formState.errors.email?.message}</div>
      비밀번호: <input type="text" {...register("password")} />
      <div>{formState.errors.password?.message}</div>
      {formState.isValid}
      <MyButton isValid={formState.isValid}>로그인</MyButton>
    </form>
  );
}
