import { FullscreenExitOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import "antd/dist/antd.css"; // _app.tsx 에 전역으로 설정해놓음. 쓸필요없음<!DOCTYPE html>

const MyIcon = styled(FullscreenExitOutlined)`
  font-size: 50px;
  color: red;
`;

export default function LibraryIconPage() {
  return <MyIcon />;
  // return <FullscreenExitOutlined id="dakdj아무거나" />; // 지금상태에서는 antd 에서 id값을 주지 못하도록 설정했기 때문에 안된다. 나중에 배움 지금은 좋아요 싫어요같은거
  // 피그마 이미지로 쓰자!!
}
