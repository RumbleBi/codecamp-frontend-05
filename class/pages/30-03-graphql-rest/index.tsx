import axios from "axios";

export default function GraphqlRestPage() {
  const onClickGraphql = () => {
    axios.post("http://backend05.codebootcamp.co.kr/graphql", {
      query: `
      mutation createBoard {
           createBoard(
               createBoardInput: {
                   writer: "지니리",
                    password: "123123", 
                    title: "제목", 
                    contents: "내용"
                }
                ){
                    _id, writer
                } 
            }`,
    });
  };
  return (
    <div>
      <button onClick={onClickGraphql}>graphql Axios 테스트!!</button>
    </div>
  );
}
