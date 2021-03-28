import { Layout } from "antd";
import FormComponent from "./Form";

const { Content } = Layout;

const ContentComponent = () => {
  return (
    <Content style={{ padding: "0 50px", marginTop: "20px" }}>
      <div className="site-layout-content" style={{ minHeight: "840px" }}>
        <FormComponent title="Consultar Imposto" />
      </div>
    </Content>
  );
};

export default ContentComponent;
