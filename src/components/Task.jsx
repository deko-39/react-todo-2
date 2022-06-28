import React from "react";
export const Task = (props) => {
  function handleClick(event, id) {
    event.preventDefault();
    props.handleDelete(id);
  }

  function handleEdit(event, id) {
    event.preventDefault();
    props.handleEdit(id);
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
                    onClick={(event) => handleEdit(event, el.id)}
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
    </>
  );
};
