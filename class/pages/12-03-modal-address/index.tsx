import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState("");
  const [zonecode, setZonecode] = useState("");
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onCompleteDaumPostcode = (data: any) => {
    // 외부데이터이기 때문에 타입을 지정할 수 없다. data로그를 보고 들어오는 데이터를 직접 설정할 수는 있다.
    console.log(data);
    setAddress(data.address);
    setZonecode(data.zonecode);
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        우편번호검색
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcode onComplete={onCompleteDaumPostcode} />
      </Modal>
    </>
  );
}
