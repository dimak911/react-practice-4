import { useSelector } from "react-redux";
import { selectUsers } from "../../redux/users/usersSelectors";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/users/usersOperations";
import { useState } from "react";
import { UpdateUserForm } from "../UpdateUser/UpdateUserForm";

export const UsersList = () => {
  const [userToUpdate, setUserToUpdate] = useState(null);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const showUpdateForm = (id) => {
    const index = users.findIndex((user) => user.id === id);
    const user = users[index];
    setUserToUpdate(user);
  };

  return (
    <>
      <ul>
        {users.map(({ id, name, email }) => {
          return (
            <li key={id}>
              <p>{name}</p>
              <p>{email}</p>
              <button type="button" onClick={() => showUpdateForm(id)}>
                Edit User
              </button>
              {userToUpdate && userToUpdate.id === id && (
                <UpdateUserForm userToUpdate={userToUpdate} />
              )}
              <button type="button" onClick={() => handleDelete(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
