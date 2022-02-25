import { useEffect, useRef, useState } from "react";

export default function ImagePreloadPage() {
  const [loaded, setLoaded] = useState(false);
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>();
  useEffect(() => {
    const img = new Image(); // image 태그 생성
    img.src = "이미지주소";
    img.onload = () => {
      // 다운로드 됐을 때,
      setImgTag(img);
    };
  }, []);
  const onClickImagePreLoad = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
  };

  const onClickImageLoad = () => {
    setLoaded(true);
  };
  return (
    <div>
      ================== 이미지 프리로드 =====================
      <div ref={divRef}></div>
      <img
        src={
          "https://codebootcamp.co.kr/images/projects/contents/project_3-2_contents_gif.webp"
        }
      />
      <button onClick={onClickImagePreLoad}>이미지 프리로드</button>
      ================= 이미지 일반로드 ====================
      {loaded && (
        <img
          src={
            "https://codebootcamp.co.kr/images/projects/contents/project_3-2_contents_gif.webp"
          }
        />
      )}
      <button onClick={onClickImageLoad}>이미지 일반로드</button>
    </div>
  );
}
