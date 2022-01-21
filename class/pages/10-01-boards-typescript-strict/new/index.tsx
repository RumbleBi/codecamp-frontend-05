import BoardWrite from "../../../src/components/units/board/10-write/BoardWrite.container";

export default function BoardsNewPage() {
  //여기는 [mynumber]가 없는 곳이기 때문에 오류가 난다.
  return <BoardWrite isEdit={false} />;
}
