import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = () => {
  const [newFriend, setNewFriend] = useState({
    friends: [],
    name: "",
    age: "",
    email: "",
  });

  console.log(newFriend.friends);

  const changeHandler = (event) => {
    event.preventDefault();
    setNewFriend({
      ...newFriend,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        // console.log(res);
        setNewFriend({
          friends: res.data,
        });
      });
  }, []);

  return (
    <div>
      <h1>HELLO </h1>
      {/* {newFriend.friends.map((e) => {
        <p>{e.name}</p>;
      })} */}
    </div>
  );
};

export default FriendsList;
