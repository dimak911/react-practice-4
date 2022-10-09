import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/users/usersOperations";

export const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;

      case "email":
        setEmail(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, email }));
    setName("");
    setEmail("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input name="name" type="text" value={name} onChange={handleChange} />
        </label>
        <label>
          <span>Email</span>
          <input
            name="email"
            type="text"
            value={email}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
