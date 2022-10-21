import React, { useState } from "react";
import { Typography, Layout, Card } from "antd";

//components
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

import "./App.css";

const { Paragraph } = Typography;
const { Header } = Layout;

var nextID = 0;

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [editableStr, setEditableStr] = useState("To Do List");

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id == id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const handleFormSubmit = (task) => {
    const updated = [...toDoList];
    let numberOfItems = toDoList.length;
    updated[numberOfItems] = {
      ...updated[numberOfItems],
      id: nextID,
      task: task["task"],
      complete: false,
    };
    nextID++;
    setToDoList(updated);
  };

  return (
    <div className="App">
      <Layout className="site-layout">
        <Header className="site-layout-background">
          <Paragraph
            className="site-layout-background"
            editable={{ onChange: setEditableStr }}
          >
            {editableStr}
          </Paragraph>
        </Header>
        <Card
          style={{
            backgroundColor: "rgb(63, 106, 118)",
            border: 0,
            paddingLeft: "40px",
            minHeight: "22vh",
          }}
          size="small"
        >
          <ToDoForm onFormSubmit={handleFormSubmit} />
        </Card>
        <ToDoList
          toDoList={toDoList}
          onToggle={handleToggle}
          onFilter={handleFilter}
        />
      </Layout>
    </div>
  );
}

export default App;
