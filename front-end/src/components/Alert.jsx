import { Alert, Row, Col } from "antd";

export const AlertComponent = ({ type, message }) => {
  return (
    <Row>
      <Col xs={12} lg={8} xl={8}>
        <Alert message={message} type={type} />
      </Col>
    </Row>
  );
};
