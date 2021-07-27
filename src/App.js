import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/UserList/UserList";

function App() {
  const [User, setUser] = useState([]);
  const UserData = (data) => {
    setUser([{ name: data.name, age: data.age, id: Math.random() }, ...User]);
  };
  return (
    <div>
      <AddUser passData={UserData}></AddUser>
      {User.length > 0 ? <UserList users={User}></UserList> : ""}
    </div>
  );
}

export default App;
