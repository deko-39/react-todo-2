import React, { useState } from "react";

export const Form = (props) => {
  const [data, setData] = useState({ name: "", des: "", date: "" });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
  }

  const handleChange = (event) => {
    event.preventDefault();
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Task todo:</legend>
        <label htmlFor="fname">Task name:</label>
        <input
          type="text"
          id="fname"
          name="name"
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="lname">Description:</label>
        <input type="text" id="lname" name="des" onChange={handleChange} />{" "}
        <br />
        <label htmlFor="date">Date:</label>
        <input type="date" id="email" name="date" onChange={handleChange} />
        <input type="submit" value="Submit" />
      </fieldset>
    </form>
  );
};
