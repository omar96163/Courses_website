"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../loading";

function Users() {
  const [users, setusers] = useState([]);
  const [error, seterror] = useState("");
  const [Loading, setLoading] = useState(false);

  const [deleteId, setDeleteId] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState("");
  const [Deleteemail, setDeleteemail] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);

  async function Getusers() {
    setLoading(true);
    const token = localStorage.getItem("token") || "";
    try {
      const res = await axios.get(
        "https://express-courses-app-production.up.railway.app/api/theusers",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setusers(res.data.data.users);
    } catch (err) {
      if (
        err.response.status === 401 ||
        err.response.status === 500 ||
        err.response.status === 403
      ) {
        seterror(err.response.data.error);
      } else {
        seterror(err.message || "something wrong");
      }
    } finally {
      setLoading(false);
    }
  }

  async function DeleteUsers(id) {
    const token = localStorage.getItem("token") || "";
    try {
      await axios.delete(
        `https://express-courses-app-production.up.railway.app/api/theusers/${id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setDeleteId("");
      setDeleting(false);
      setDeleteError("");
      setDeleteemail("");
      setConfirmDelete(false);
      Getusers();
    } catch (err) {
      if (
        err.response.status === 401 ||
        err.response.status === 403 ||
        err.response.status === 404 ||
        err.response.status === 500
      ) {
        const errors = err.response.data.error;
        console.log(errors);
        setDeleteError(errors);
      } else {
        setDeleteError(err.message || "something wrong");
      }
    }
  }

  useEffect(() => {
    Getusers();
  }, []);

  return (
    <main className="flex flex-col items-center justify-start min-h-screen text-gray-300 mt-10 mx-5">
      <h2 className="text-3xl text-cyan-500 font-bold mt-5">Users List</h2>
      <button
        onClick={() => {
          setDeleting(true);
        }}
        className={`bg-red-300 text-black hover:bg-white hover:text-red-500 rounded-md shadow-md p-1.5 cursor-pointer 
          transition duration-300 shadow-red-500 hover:scale-110  active:scale-95 mt-5 ${
            users.length === 0 ? "hidden" : ""
          }`}
      >
        Del -
      </button>
      {deleting && (
        <div className="flex flex-col items-center justify-center gap-5 mt-8 opacity-0 animate-[goDown_.4s_ease_forwards]">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-3">
            <h3 className="font-bold text-xl">Choose an E-mail to delete :</h3>
            <input
              onChange={(e) => {
                const email = e.target.value.toLowerCase();
                const selecteduser = users.find(
                  (user) => user.email.toLowerCase() === email
                );

                if (selecteduser) {
                  setDeleteemail(selecteduser.email);
                  setDeleteId(selecteduser._id);
                } else {
                  setDeleteId("");
                }
              }}
              placeholder="🔎 E-mail"
              type="text"
              list="E-mail"
              className="bg-red-300 py-2 px-4 rounded-xl shadow-md shadow-red-500 text-black 
              border border-red-300 focus:border-black focus:outline-none appearance-none"
            ></input>
            <datalist id="E-mail">
              {users.map((user) => (
                <option key={user._id} value={user.email}></option>
              ))}
            </datalist>
            <button
              onClick={() => {
                if (deleteId) {
                  setConfirmDelete(true);
                } else {
                  setConfirmDelete(false);
                  alert("this email is not defined");
                }
              }}
              className="bg-red-300 text-black rounded-md p-1.5 cursor-pointer transition duration-300 
              active:scale-95 hover:bg-white hover:text-red-500 shadow-md shadow-red-500 hover:scale-110"
            >
              delete
            </button>
            <button
              onClick={() => {
                setDeleteId("");
                setDeleteemail("");
                setDeleteError("");
                setDeleting(false);
                setConfirmDelete(false);
              }}
              className="bg-cyan-300 text-black rounded-md p-1.5 cursor-pointer transition duration-300 
              active:scale-95 hover:bg-white hover:text-cyan-500 shadow-md shadow-cyan-500 hover:scale-110"
            >
              Cancel
            </button>
          </div>
          {confirmDelete && (
            <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
              <p className="font-medium text-[14px] md:text-base flex flex-col md:flex-row items-center justify-center">
                Are you sure you want to delete{" "}
                <span className="font-black mx-3 pb-1 border-b-[1px] text-red-500">
                  {Deleteemail} ?
                </span>
              </p>
              <button
                onClick={() => DeleteUsers(deleteId)}
                className="bg-red-300 text-black rounded-md p-1.5 cursor-pointer transition duration-300 
                hover:bg-white hover:text-red-500 shadow-md shadow-red-500 hover:scale-110 active:scale-95"
              >
                Yes, Delete
              </button>
            </div>
          )}
          {deleteError && (
            <p className="text-red-500 font-bold rounded w-fit mt-1 text-center">
              {deleteError}
            </p>
          )}
        </div>
      )}
      <main className="mt-14">
        {Loading ? (
          <Loader />
        ) : error ? (
          <p className="text-red-500 text-center mt-32 text-2xl">{error}</p>
        ) : users.length > 0 ? (
          <div
            className="flex flex-row flex-wrap items-start justify-center text-center gap-10 min-h-screen mx-32
            opacity-0 animate-[goUp_1s_ease_forwards_.5s]"
          >
            {users.map((user) => (
              <div
                key={user._id}
                className="group flex flex-col items-center justify-around w-72 h-80 px-2 py-4 rounded-2xl text-center
                bg-gradient-to-br from-[#1c1c1f]/70 via-[#35353a]/70 to-[#1c1c1f]/70 border border-white/10
                hover:bg-gradient-to-bl hover:shadow-cyan-300 hover:-translate-y-2 transition duration-300
                backdrop-blur-md shadow-[0_10px_25px_-5px_rgba(0,0,0,0.8)]"
              >
                <img
                  src={
                    user.avatar && user.avatar !== "default"
                      ? `https://express-courses-app-production.up.railway.app/uploads/${user.avatar}`
                      : "/profile.png"
                  }
                  alt="avatar"
                  className="w-20 h-20 rounded-full object-cover border border-gray-300"
                />
                <p className="text-[20px] md:text-[24px]">
                  {user.firstname} {user.lastname}
                </p>
                <p className="text-[16px] md:text-[20px]">{user.email}</p>
                <p className="text-[16px] md:text-[20px] text-cyan-700">
                  {user.role}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-red-500 text-center mt-32 text-2xl">
            No users yet
          </p>
        )}
      </main>
    </main>
  );
}

export default Users;
