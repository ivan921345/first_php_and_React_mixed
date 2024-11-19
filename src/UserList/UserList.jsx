import User from "../User/User";

const UserList = ({ users = [] }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <User user={user} />;
        </li>
      ))}
    </ul>
  );
};

export default UserList;
