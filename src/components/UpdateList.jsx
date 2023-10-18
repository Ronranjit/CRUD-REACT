import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import bib from "../img/Bibliophile-rafiki.png";

const UpdateList = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [totalUsers, setTotalUser] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://crudcrud.com/api/17c9de6705694c2dae4e98794b5552c5/users/${id}`
      )
      .then((res) => {
        const fetchSingleUser = res.data;
        setTotalUser(fetchSingleUser);
        setName(fetchSingleUser.name);
        setEmail(fetchSingleUser.email);
        console.log(fetchSingleUser.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .put(
        `https://crudcrud.com/api/17c9de6705694c2dae4e98794b5552c5/users/${id}`,
        {
          name,
          email,
        }
      )
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };

  return (
    <section>
      <div className="flex mx-auto justify-center mt-3 ">
        <div>
          <p className="font-medium text-4xl">
            Please update your details here
          </p>
        </div>
      </div>
      <div className="flex h-screen justify-evenly items-center mt-5  font-primary ">
        <div>
          <form onSubmit={onSubmit} className="text-center ">
            <input
              onChange={(e) => setName(e.target.value)}
              className=" input-width border bg-gray-100 block rounded-sm shadow-lg py-3 mb-9 placeholder:p-3"
              type="text"
              placeholder="enter your name"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="input-width  mt-3 rounded-sm shadow-lg block border py-3 bg-gray-100 mb-9 placeholder:p-3"
              type="email"
              placeholder="enter your email"
            />
            <button
              type="submit"
              className="input-width  btn  mt-3 rounded-sm shadow-lg text-white block  py-2 bg-black hover:text-black font-normal"
            >
              submit
            </button>
          </form>
        </div>
        <div>
          <img src={bib} width={500} alt="" />
        </div>
      </div>
    </section>
  );
};

export default UpdateList;
