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
  const [form] = Form.useForm();
  const [totalSalary, setTotalSalary] = useState(0);
  const [dependents, setDependents] = useState(0);
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
      dependentsNumber: Number(dependents),
    });
  };

  const onChange = (event, value) => {
    event.preventDefault();
    setTotalSalary(value);
  };

  const onChangeInput = (value) => {
    setDependents(value);
  };

  const resetForm = () => {
    form.resetFields();
    setError(false);
    setSuccess(false);
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
        form={form}
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
            locale="pt-BR"
            prefix="R$ "
            precision={2}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item label="Dependentes" name="dependent">
          <InputNumber min={0} max={20} onChange={onChangeInput} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Consultar
          </Button>
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => {
              resetForm();
            }}
          >
            Limpar
          </Button>
        </Form.Item>
      </Form>
      {success && <AlertComponent type="success" message={message} />}
      {error && <AlertComponent type="error" message={message} />}
    </Card>
  );
};

export default FormComponent;
