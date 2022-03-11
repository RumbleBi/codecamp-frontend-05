import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function IsSubmittingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    setIsSubmitting(true);
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: "힣",
          password: "1234",
          title: "좋아요",
          contents: "정말좋아요",
        },
      },
    });
    console.log(result);

    setIsSubmitting(false);
  };
  return (
    <div>
      작성자: <input type="text" />
      <br />
      비밀번호:
      <input type="password" />
      <br />
      제목:
      <input type="text" />
      <br />
      내용:
      <input type="text" />
      <br />
      <button onClick={onClickSubmit} disabled={isSubmitting}>
        등록하기
      </button>
    </div>
  );
}
