import { Layout } from "antd";
import "antd/dist/antd.css";
import { Fragment } from "react";

import ContentComponent from "./components/Content";
import FooterComponent from "./components/Footer";
import HeaderComponent from "./components/Header";

function App() {
  return (
    <Fragment>
      <Layout className="layout" style={{ color: "FFFFFF" }}>
        <HeaderComponent />
        <ContentComponent />
        <FooterComponent />
      </Layout>
    </Fragment>
  );
}

export default App;
