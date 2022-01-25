import { Modal } from "antd";
import { useState } from "react";
export default function ModalAlertQuizPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onClickOpenBtn = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <button onClick={onClickOpenBtn}>모달열기</button>
      <Modal
        title="게시글 등록"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>게시글이 등록되었습니다.</p>
      </Modal>
    </div>
  );
}
