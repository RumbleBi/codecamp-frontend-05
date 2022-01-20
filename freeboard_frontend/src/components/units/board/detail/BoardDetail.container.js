import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";

// 여기서 요청하고싶은 내용을 추가하면 왜 나머지 데이터들이 안나오지??
export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.dynamic) },
  });

  const onClickMoveToList = () => {
    router.push("/boards");
  };

  //여기 수정
  const onClickMoveToEdit = () => {
    router.push(`/boards/${router.query.dynamic}/edit`);
    console.log(data); //데이터는 찍히는듯??
  };

  const onClickDeleteBoard = async () => {
    try {
      await deleteBoard({
        variables: { boardId: String(router.query.dynamic) },
      });
      alert(`삭제가 되었습니다.`);
      router.push("/boards");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDeleteBoard={onClickDeleteBoard}
    />
  );
}
