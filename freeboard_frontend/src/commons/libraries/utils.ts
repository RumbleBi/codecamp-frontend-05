import { Modal } from "antd";

export const getDate = (getDate) => {
  const change = new Date(getDate);
  const yyyy = change.getFullYear();
  const mm = change.getMonth() + 1;
  const dd = change.getDate();
  return `${yyyy}-${mm}-${dd}`;
};

export const checkFileValidation = (files?: File) => {
  if (!files?.size) {
    Modal.error({ content: "파일이 존재하지 않습니다." });
    return false;
  }
  if (files.size > 5 * 1024 * 1024) {
    Modal.error({ content: "파일 용량이 너무 큽니다.(5MB 제한)" });
    return false;
  }
  if (!files.type.includes("jpeg") && !files.type.includes("png")) {
    Modal.error({ content: "파일 용량이 너무 큽니다.(5MB 제한)" });
    return false;
  }
  return true;
};
