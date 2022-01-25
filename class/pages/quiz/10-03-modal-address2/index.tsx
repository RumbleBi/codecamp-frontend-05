import { useState } from "react";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState("");
  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const onCompleteDaumPostcode = (data: any) => {
    //console.log(data);
    setAddress(data.address);
    setIsModalVisible(false);
  };

  return (
    <div>
      <button onClick={onToggleModal}>우편번호검색</button>
      <span>{address}</span>
      {isModalVisible && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={onCompleteDaumPostcode} />
        </Modal>
      )}
    </div>
  );
}
