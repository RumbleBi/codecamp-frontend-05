import { useContext } from "react";
import { ExampleContext } from "../../../../pages/21-04-context-api/index";
export default function BoardWriteContextUI() {
  const { isEdit } = useContext(ExampleContext);
  return (
    <div>
      <div>{isEdit ? "수정하기" : "등록하기"}</div>
    </div>
  );
  // 다이렉트로 꽃아버리기. props 타고 안내려가고
}
