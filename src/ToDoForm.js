import React from "react";
import { Form, Row, Col, Button, Input } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

const ToDoForm = (props) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    props.onFormSubmit({
      task: values["task"],
    });
    // form.resetFields();
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="horizontal"
      size="large"
      autoComplete="off"
      className="todo-form"
    >
      <Row>
        <Col xs={24} sm={24} md={17} lg={19} xl={20}>
          <Form.Item
            name={"task"}
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input placeholder="What are we doing today?" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={7} lg={5} xl={4} push={1}>
          <Form.Item>
            <Button type="primary" htmlType="submit" block className="btn-add">
              <PlusCircleFilled />
              Add ToDo
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default ToDoForm;
