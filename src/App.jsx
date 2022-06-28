import React from "react";
import { useState } from "react";
import { Form } from "./components/Form";
import { Task } from "./components/Task";

export const App = () => {
  const [task, setTask] = useState([
    { id: 1, name: "1", des: "A", date: "2022-02-14" },
    { id: 2, name: "2", des: "B", date: "2022-02-14" },
    { id: 3, name: "2", des: "C", date: "2022-02-14" },
    { id: 4, name: "2", des: "D", date: "2022-02-14" },
    { id: 5, name: "2", des: "E", date: "2022-02-14" },
  ]);

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

  function handleEdit(data) {
    const element = task.find((el) => el.id === data.id);
    /// TO-do: update the new data
  }

  return (
    <>
      <Form handleSubmit={handleSubmit} />
      <Task task={task} handleDelete={handleDelete} handleEdit={handleEdit} />
    </>
  );
};
