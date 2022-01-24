import ReactPlayer from "react-player";

export default function LibraryYoutubePage() {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=tFRrFMCb2Ns&ab_channel=%EB%B0%9C%EC%8A%A4%ED%83%80%ED%99%8D%EA%B5%AC"
      width={1000}
      height={500} //유튜브 링크는 css가 잘 안먹혀서 직접 설정해준다.
    />
  );
} // 포트폴리오에 유튜브 영상 링크 되도록하기 과제
