import useAuth from "../../src/components/commons/hooks/useAuth";

export default function CustomHooksUseAuthPage() {
  const { isLoading } = useAuth();

  if (isLoading) return <></>;
  return (
    <div>
      <div>커스텀 훅 연습페이지!! - 권한분기(useAuth)</div>
      <div>로그인체크완료!! 웰컴!!</div>
    </div>
  );
}
