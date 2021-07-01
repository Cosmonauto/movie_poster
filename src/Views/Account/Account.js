import React from "react";

function Account(props) {
  const user = JSON.parse(`${localStorage.getItem("user")}`);
  return (
    <div>
      <h1>Hello, {user.email}!</h1>
    </div>
  );
}

export default Account;
