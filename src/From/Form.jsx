const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Enter your username "
        type="text"
        name="username"
        id="username"
      />
      <input
        type="text"
        name="surname"
        id="surname"
        placeholder="Enter your surname"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
