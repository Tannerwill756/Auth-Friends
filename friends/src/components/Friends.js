import React from "react";

const Friends = (props) => {
  console.log(props.friends);
  return (
    <>
      {props.friends.map((e) => (
        <div key={e.id}>
          <p>{e.name}</p>
          <p>age: {e.age}</p>
          <p>email: {e.email}</p>
        </div>
      ))}
    </>
  );
};

export default Friends;
