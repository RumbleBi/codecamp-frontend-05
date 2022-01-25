import { Modal } from "antd";

export default function ModalAlertPage() {
  const onClickSuccessBtn = () => {
    Modal.success({ content: "오우~성공해브렀으~" });
  };
  const onClickFailBtn = () => {
    Modal.error({ content: "실패해브렀어~" });
  };
  return (
    <div>
      <button onClick={onClickSuccessBtn}>성공알림창</button>
      <button onClick={onClickFailBtn}>실패알림창</button>
    </div>
  );
}
