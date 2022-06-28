import React, { useState } from "react";
import { Edit } from "./Edit";

export const Task = (props) => {
  const [visible, setVisible] = useState(false);
  const [editElement, setEditElement] = useState({});

  function handleClick(event, id) {
    event.preventDefault();
    props.handleDelete(id);
  }

  function handleEdit(event, el) {
    event.preventDefault();
    setVisible(true);
    setEditElement(el);
    console.log("AAA");
  }

  function handleUpdate(data) {
    props.handleEdit(data);
  }

  return (
    <>
      <table style={{ border: "#000 solid 1px" }}>
        <thead>
          <tr>
            <th>Id </th>
            <th>Task name</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {props.task.map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.des}</td>
                <td>{el.date}</td>
                <td>
                  <button
                    type="button"
                    onClick={(event) => handleEdit(event, el)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={(event) => handleClick(event, el.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Edit
        visible={visible}
        editElement={editElement}
        handleUpdate={handleUpdate}
      />
    </>
  );
};
