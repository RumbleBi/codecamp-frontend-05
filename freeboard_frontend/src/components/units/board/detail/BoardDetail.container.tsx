import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.dynamic) },
  });

  const onClickMoveToList = () => {
    router.push("/boards");
  };

  const onClickMoveToEdit = () => {
    router.push(`/boards/${router.query.dynamic}/edit`);
  };

  const onClickDeleteBoard = async () => {
    try {
      await deleteBoard({
        variables: { boardId: String(router.query.dynamic) },
      });
      alert(`삭제가 되었습니다.`);
      router.push("/boards/");
    } catch (error) {
      alert("통신에러"); // alert(error.message); 개체가 알 수 없는 형식입니다.. 뭐임??
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
