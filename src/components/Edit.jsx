import React, { useState } from "react";

export const Edit = (props) => {
  const [data, setData] = useState({ name: "", des: "", date: "" });

  function handleSubmit(event, id) {
    event.preventDefault();
    props.handleEdit(id, data);
  }

  const handleChange = (event) => {
    event.preventDefault();
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <form
      onSubmit={() => handleSubmit(props.editElement.id, data)}
      style={{ display: !props.visible ? "none" : true }}
    >
      <fieldset>
        <legend>Edit</legend>
        <label htmlFor="fname">Task name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={hand}
          value={data.name}
        />{" "}
        <br />
        <label htmlFor="lname">Description:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          onChange={handleChange}
          value={data.des}
        />{" "}
        <br />
        <label htmlFor="date">Date:</label>
        <input type="date" id="email" name="email" value={data.date} />
        <input type="submit" value="Submit" />
        <button type="button" onClick={() => props.setVisi()}>
          Close
        </button>
      </fieldset>
    </form>
  );
};
