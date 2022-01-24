import ReactPlayer from "react-player";

export default function LibraryYoutubePage() {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=tFRrFMCb2Ns&ab_channel=%EB%B0%9C%EC%8A%A4%ED%83%80%ED%99%8D%EA%B5%AC"
      width={800}
      height={600}
      playing={true} // 자동 재생 on
      controls={true} // 플레이어 컨트롤 노출
      muted={true} // 음소거 시작
    />
  );
}
