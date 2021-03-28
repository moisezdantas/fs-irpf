import { Layout, Menu } from "antd";

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header>
      <div className="logo"></div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Home</Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
