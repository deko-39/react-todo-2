import React, { useEffect, useState } from "react";

export const Edit = (props) => {
  const initData = { id: -1, name: "", des: "", date: "2014-02-09" };
  const [data, setData] = useState(initData);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(props.visible);
    setData(props.editElement);
  }, [props]);

  function handleClose(event) {
    event.preventDefault();
    setVisible(false);
    setData(initData);
  }

  function handleSubmit(event, data) {
    event.preventDefault();
    setVisible(false);
    setData(initData);
    props.handleUpdate(data);
  }

  const handleChange = (event) => {
    event.preventDefault();
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <form
      onSubmit={(event) => handleSubmit(event, data)}
      style={{ display: !visible ? "none" : true }}
    >
      <fieldset>
        <legend>Edit</legend>
        <label htmlFor="fname">Task name:</label>
        <input
          type="text"
          id="fname"
          name="name"
          onChange={handleChange}
          value={data.name || ""}
        />{" "}
        <br />
        <label htmlFor="lname">Description:</label>
        <input
          type="text"
          id="lname"
          name="des"
          onChange={handleChange}
          value={data.des || ""}
        />{" "}
        <br />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="email"
          name="date"
          value={data.date || ""}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </fieldset>
    </form>
  );
};
