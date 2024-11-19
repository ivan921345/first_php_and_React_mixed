const User = ({ user }) => {
  return (
    <>
      name: {user.username}
      surname: {user.surname}
    </>
  );
};

export default User;
