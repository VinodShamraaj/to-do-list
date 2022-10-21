import React from "react";
import { Tooltip, Tag, List, Button, Popconfirm, Switch } from "antd";
import {
  CloseOutlined,
  CheckOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

const ToDo = ({ todo, onToggle }) => {
  return (
    <List.Item
      actions={[
        <Tooltip
          title={todo.complete ? "Mark as uncompleted" : "Mark as completed"}
        >
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={() => onToggle(todo.id)}
            defaultChecked={todo.complete}
            style={{ marginRight: "60px" }}
          />
        </Tooltip>,
      ]}
      className="list-item"
      key={todo.id}
    >
      <div className="todo-item">
        <Tag
          color={todo.complete ? "cyan" : "red"}
          icon={
            todo.complete ? <CheckCircleOutlined /> : <CloseCircleOutlined />
          }
          className="todo-tag"
        >
          {todo.task}
        </Tag>
      </div>
    </List.Item>
  );
};

export default ToDo;
