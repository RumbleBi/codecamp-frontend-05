import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

const Position = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: green;
  width: 80%;
  min-height: 100vh;
`;
const MenuBar = styled.div`
  display: flex;
  align-items: start;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 36px;
`;
const PointList = styled.div`
  background-color: red;
  width: 80%;
  min-height: 50vh;
  height: auto;
`;

const Element = styled.div`
  color: pink;
  width: 100%;
  min-height: 30px;
  height: auto;
  font-size: 16px;
`;

const ElemtnetImg = styled.img`
  width: 100px;
  height: 100px;
`;
export default function MypageUI(props) {
  const handleClick = (el) => {
    console.log("click ", el);
  };
  return (
    <Position>
      <Wrapper>
        <MenuBar>
          <Menu
            onClick={handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={["2"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            {/* <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One"> */}
            {/* <Menu.ItemGroup key="g1" title="Item 1"> */}
            <Menu.Item key="1">비밀번호 변경</Menu.Item>
            <Menu.Item key="2">로그아웃</Menu.Item>
            {/* </Menu.ItemGroup> */}
            {/* <Menu.ItemGroup key="g2" title="Item 2"> */}
            <Menu.Item key="3">상품판매내역</Menu.Item>
            <Menu.Item key="4">상품구매내역</Menu.Item>
            <Menu.Item key="5">포인트 충전내역</Menu.Item>
            {/* </Menu.ItemGroup> */}
            {/* </SubMenu> */}
          </Menu>
        </MenuBar>

        <PointList>
          <Title>최근 거래내역</Title>
          {props.data?.fetchPointTransactions.map((el, index) => (
            <div key={el._id}>
              <div>
                <Element>잔액: {el.balance}</Element>
              </div>
              <div>
                <Element>상품이름: {el.useditem.name}</Element>
                <Element>상품가격: {el.useditem.price}</Element>
                <div>
                  {el.useditem.images
                    ?.filter((el: string) => el)
                    .map((el: string) => (
                      <ElemtnetImg
                        key={uuidv4()}
                        src={`https://storage.googleapis.com/${el}`}
                      />
                    ))}
                </div>
                ======================================================================================================
              </div>
            </div>
          ))}
        </PointList>
      </Wrapper>
    </Position>
  );
}
