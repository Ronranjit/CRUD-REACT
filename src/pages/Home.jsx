import axios from "axios";
import React, { useEffect, useState } from "react";
import PersonList from "../components/PersonList";
import Spinner from "../components/Spinner";
import bib from "../img/Bibliophile-rafiki.png";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalUsers, setTotalUser] = useState([]);

  const getAllUsers = async () => {
    try {
      const res = await axios.get(
        "https://crudcrud.com/api/17c9de6705694c2dae4e98794b5552c5/users"
      );
      setTotalUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://crudcrud.com/api/17c9de6705694c2dae4e98794b5552c5/users", {
        name,
        email,
      })
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error);
      });
    window.location.reload();
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <section>
      <div className="flex mx-auto justify-center   mt-3 ">
        <div>
          <h1 className=" text-6xl inline-block mb-4">Register</h1>
          <p>please create your account here</p>
        </div>
      </div>
      <div className="flex h-screen justify-evenly items-center   font-primary ">
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
          <div className="mt-11">
            {!totalUsers || totalUsers.length === 0 ? (
              <p className="capitalize text-center">no users</p>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>email</th>
                        <th> Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {totalUsers.map((user, index) => (
                        <PersonList user={user} index={index} key={user.id} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </div>
        <div>
          <img src={bib} width={500} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
