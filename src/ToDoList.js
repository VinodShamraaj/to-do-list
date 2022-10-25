import React from "react";
import { Button, Layout, List } from "antd";

// component
import ToDo from "./ToDo";

const ToDoList = ({ toDoList, onToggle, onFilter }) => {
  return (
    <Layout className="site-layout">
      <Layout className="site-layout-list">
        <List
          locale={{
            emptyText: "There's nothing to do :(",
          }}
          dataSource={toDoList}
          renderItem={(todo) => <ToDo todo={todo} onToggle={onToggle} />}
          pagination={{
            position: "bottom",
          }}
        />
        <br />
        <Button className="btn-clear" type="primary" onClick={onFilter}>
          Clear Completed
        </Button>
      </Layout>
    </Layout>
  );
};

export default ToDoList;
