import { Form, Button, Card, InputNumber } from "antd";
import IntlNumberInput from "react-intl-number-input";
import { useCallback, useState } from "react";
import { AlertComponent } from "./Alert";
import { fetchByIrrf } from "../api/api.js";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 8,
  },
};

const FormComponent = () => {
  const [totalSalary, setTotalSalary] = useState();
  const [dependent, setDependent] = useState();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState();

  const calculateIRPF = useCallback((person) => {
    const fetchData = async () => {
      try {
        setError(false);
        setSuccess(false);

        const result = await fetchByIrrf(person);

        setSuccess(true);
        setMessage(`Calculo do imposto é R$ ${result.data.toFixed(2)}`);
      } catch (error) {
        console.log(error);
        setError(true);
        setMessage("Ops deu erro ao calcular seu imposto, tente mais tarde");
      }
    };
    fetchData();
  }, []);

  const onFinish = (values) => {
    calculateIRPF({
      totalSalary: parseFloat(totalSalary),
      dependentsNumber: Number(dependent),
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (event, value) => {
    event.preventDefault();
    setTotalSalary(value);
  };

  const onChangeInput = (value) => {
    setDependent(value);
  };

  return (
    <Card title="Consultar Imposto de Renda">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Salário"
          name="totalSalary"
          rules={[
            {
              required: true,
              message: "Preenche total do seu salário!",
            },
          ]}
        >
          <IntlNumberInput
            className="ant-input-number-input-wrap"
            //style={{ width: "150px" }}
            locale="pt-BR"
            prefix="R$ "
            precision={2}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item label="Dependentes" name="dependent">
          <InputNumber
            min={1}
            max={100000}
            defaultValue={1}
            onChange={onChangeInput}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Consultar
          </Button>
        </Form.Item>
      </Form>
      {success && <AlertComponent type="success" message={message} />}
      {error && <AlertComponent type="error" message={message} />}
    </Card>
  );
};

export default FormComponent;
