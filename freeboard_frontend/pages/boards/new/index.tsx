import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";
export default function BoardsNewPage() {
  return <BoardWrite isEdit={false} isActive={false} />;
} // isActive 임시 불린타입적용 해야되나? ㅇㅇ 스타일 부분에 isActive를 넣어줬으니까
