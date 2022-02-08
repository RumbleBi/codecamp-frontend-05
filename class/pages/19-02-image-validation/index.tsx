import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { checkFileValidation } from "../../src/commons/libraries/utils.ts/utils";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageValidationPage() {
  const [image, setImage] = useState(""); // <string | undefined>(""); ("")이므로 자동으로 스트링으로 추론한다.
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files?.[0]; // 동시선택 가능하게 s붙임 input에도 multiple 넣어줘야함. files?. 배열값이 null일 수도 있기 때문에 써준다 배열도 객체의 속성을 어느정도 가지고 있기 때문에 .이 가능
    console.log(files);

    const isValid = checkFileValidation(files);
    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file: files } }); // 스토리지에 파일을 저장하고 url을 받게 되는 것이다.
      console.log(result.data?.uploadFile.url);

      setImage(result.data?.uploadFile.url || ""); // 자동으로 추론된 스트링일 수 있다는 것을 적용시켜준다 useState부분이랑 둘중에 하나 골라주면된다.
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile} multiple />
      <img src={`https://storage.googleapis.com/${image}`} />
    </div>
  );
}
