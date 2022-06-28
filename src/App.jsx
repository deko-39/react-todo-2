import React from "react";
import { useState } from "react";
import { Form } from "./components/Form";
import { Task } from "./components/Task";
import { Edit } from "./components/Edit";

export const App = () => {
  const [task, setTask] = useState([
    { id: 1, name: "1", des: "A", date: "12/02/2022" },
    { id: 2, name: "2", des: "B", date: "12/03/2022" },
    { id: 3, name: "2", des: "B", date: "12/03/2022" },
    { id: 4, name: "2", des: "B", date: "12/03/2022" },
    { id: 5, name: "2", des: "B", date: "12/03/2022" },
  ]);

  const [visible, setVisible] = useState(false);
  const [editElement, setEditElement] = useState({});

  // newTask = {taskName: "", description: "", date: "" }

  function handleSubmit(newTask) {
    const taskLength = task.length;
    setTask([
      ...task,
      { ...newTask, id: taskLength ? task[task.length - 1]?.id + 1 : 1 },
    ]);
  }

  function handleDelete(id) {
    setTask([...task.filter((el) => el.id !== id)]);
  }

  function handleEdit(id) {
    setVisible(true);
    const element = task.find((el) => el.id === id);
    setEditElement(element);
  }

  function setVisi() {
    setVisible(false);
  }

  return (
    <>
      <Form handleSubmit={handleSubmit} />
      <Task task={task} handleDelete={handleDelete} handleEdit={handleEdit} />
      <Edit visible={visible} setVisi={setVisi} editElement={editElement} />
    </>
  );
};
