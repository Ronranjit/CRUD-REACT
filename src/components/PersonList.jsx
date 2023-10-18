import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
const PersonList = ({ user, index }) => {
  const onDelete = (id) => {
    window.confirm("Are you sure want to delete");
    axios
      .delete(
        `https://crudcrud.com/api/17c9de6705694c2dae4e98794b5552c5/users/${id}`
      )
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <Link
          to={{
            pathname: `/update/${user._id}`,
            state: { name: user.name, email: user.email },
          }}
        >
          <button className="btn btn-xs btn-success">update</button>
        </Link>
        <button
          onClick={() => onDelete(user._id)}
          className="btn btn-xs btn-error ml-2"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default PersonList;
