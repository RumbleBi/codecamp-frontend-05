import BoardWriteContext from "../../src/components/units/21-context-api/BoardWrite.contatiner";
import { createContext } from "react";

export const ExampleContext = createContext(null);
export default function ContextAPIPage() {
  const Values = {
    isEdit: true,
  };

  // 객체로 담아둬서 아래 value 값에 넣어서 한번에 넣을 수 있다!!
  return (
    <ExampleContext.Provider value={Values}>
      <BoardWriteContext />
    </ExampleContext.Provider>
  );
  // 태그 사이에 깔린 애들만 쓸 수 있음.
}
