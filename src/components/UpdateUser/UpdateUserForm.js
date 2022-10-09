import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/users/usersOperations";

export const UpdateUserForm = ({ userToUpdate }) => {
  const { name: userName, email: userEmail } = userToUpdate;
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
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
    dispatch(updateUser({ ...userToUpdate, name, email }));
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
