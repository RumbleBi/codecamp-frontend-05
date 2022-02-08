export const checkFileValidation = (files?: File) => {
  // 파일이 있을수도 없을 수도 있으니까 ? 붙이면 에러 사라짐. 아니면끝에 | undefined 붙이기

  // 파일존재 유무 검증
  if (!files?.size) {
    alert("파일이 존재하지 않습니다.");
    return false;
  }
  // 메가바이트 킬로바이트 바이트 순. 5메가 보다 크다면~
  if (files.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다.(제한 5MB)");
    return false;
  }
  // 파일 타입 검증
  if (!files.type.includes("jpeg") && !files.type.includes("png")) {
    alert(".jpeg 파일 또는 .png 파일만 업로드 가능합니다.");
    return false;
  }

  return true;
};
