import React, { useState } from "react";
import { Button } from "./components/Button";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./redux/users/usersOperations";
import { UsersList } from "./components/UsersList/UsersList";
import { useSelector } from "react-redux";
import { selectUsers } from "./redux/users/usersSelectors";
import { UserForm } from "./components/UserForm/UserForm";

export const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const clickHandler = () => {
    dispatch(fetchUsers());
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  return (
    <>
      {!users.length > 0 ? (
        <Button text="Show users list" clickHandler={clickHandler} />
      ) : (
        <>
          <Button text="Add user" clickHandler={openForm} />
          {isFormOpen && <UserForm />}
          <UsersList />
        </>
      )}
    </>
  );
};
