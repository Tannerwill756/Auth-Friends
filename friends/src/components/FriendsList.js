import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friends from "./Friends";
import FriendsForm from "./FriendsForm";

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
      <FriendsForm />
      <Friends friends={newFriend.friends} />
    </div>
  );
};

export default FriendsList;
