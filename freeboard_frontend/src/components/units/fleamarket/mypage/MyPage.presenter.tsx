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

const PointList = styled.div`
  background-color: red;
  width: 60%;
  min-height: 50vh;
  height: auto;
`;

const Element = styled.div`
  color: blue;
  width: 100px;
  min-height: 20px;
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
        <Menu
          onClick={handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={["2"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.ItemGroup key="g1" title="Item 1">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Item 2">
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
        <PointList>
          {props.data?.fetchPointTransactions.map((el, index) => (
            <div key={el._id}>
              <div>
                최근 거래내역
                <Element>잔액: {el.balance}</Element>
              </div>
              <div>
                <Element>상품이름: {el.useditem.name}</Element>
                <Element>상품가격: {el.useditem.price}</Element>
                <span>
                  {el.useditem.images
                    ?.filter((el: string) => el)
                    .map((el: string) => (
                      <ElemtnetImg
                        key={uuidv4()}
                        src={`https://storage.googleapis.com/${el}`}
                      />
                    ))}
                </span>
              </div>
            </div>
          ))}
        </PointList>
      </Wrapper>
    </Position>
  );
}
