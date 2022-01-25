import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState("");
  const [zonecode, setZonecode] = useState("");
  // const showModal = () => {
  //   // setIsModalVisible(true); false => true 로 만들겠다는 의미
  //   setIsModalVisible((prev) => !prev);
  // };

  // const handleOk = () => {
  //   // setIsModalVisible(false); true => false
  //   setIsModalVisible((prev) => !prev);
  // };

  // const handleCancel = () => {
  //   // setIsModalVisible(false); false => true
  //   setIsModalVisible((prev) => !prev);
  // };

  const onToggleModal = () => {
    // 코드 하나만 작성해서 on, off느낌으로 만든다. 쓰고싶은 곳에다 넣으면됨ㄷㄷ 이러한 함수는 onToggle을 관습적으로 붙인다.
    setIsModalVisible((prev) => !prev);
  };

  const onCompleteDaumPostcode = (data: any) => {
    // 외부데이터이기 때문에 타입을 지정할 수 없다. data로그를 보고 들어오는 데이터를 직접 설정할 수는 있다.
    console.log(data);
    setAddress(data.address);
    setZonecode(data.zonecode);
    setIsModalVisible(false); // 기본 초기값은 false 다.
  };
  // <> </> Fragment 를 사용해야 하는 때, map 돌릴때 key값을 넣어줘야하는데 생략된상태면 넣을수가 없어서 Fragment를 넣어줘야한다.
  return (
    // 2번 rerendering이 일어난다. && 연산자를 사용해서
    <>
      <Button type="primary" onClick={onToggleModal}>
        우편번호검색
      </Button>
      {isModalVisible && ( // 적은상태에서 취소를 누르고 다시 검색을 누르면 적었던 데이터가 사라진다.
        <Modal
          title="Basic Modal"
          visible={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcode onComplete={onCompleteDaumPostcode} />
        </Modal>
      )}
    </>
  );
}
