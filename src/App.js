import { useEffect, useState } from "react";
import Form from "./From";
import UserList from "./UserList";
import { fetchUsers } from "./api/fetchUsers";
import postUsers from "./api/postUser";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers("http://localhost/mixed/server/").then((data) => {
      console.log(data);
      setUsers(data);
    });
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    postUsers("http://localhost/mixed/server/", {
      username: e.target.username.value,
      surname: e.target.surname.value,
    }).then(console.log);
  };

  return (
    <>
      <Form onSubmit={onFormSubmit} />
      <UserList users={users} />
    </>
  );
};

export default App;
