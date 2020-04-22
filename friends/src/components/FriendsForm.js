import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsForm = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
    email: "",
  });

  const changeHandler = (e) => {
    e.preventDefault();
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    axiosWithAuth()
      .post("/api/friends", person)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={person.name}
        onChange={changeHandler}
      />

      <label>Age</label>
      <input
        type="text"
        name="age"
        value={person.age}
        onChange={changeHandler}
      />

      <label>Email</label>
      <input
        type="text"
        name="email"
        value={person.email}
        onChange={changeHandler}
      />
      <button>Add Yourself</button>
    </form>
  );
};

export default FriendsForm;
