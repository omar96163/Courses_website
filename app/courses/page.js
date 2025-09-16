"use client";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import Loader from "../loading";

function Courses() {
  const [error, seterror] = useState("");
  const [courses, setcourses] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [totalPages, settotalPages] = useState(null);
  const [page, setPage] = useState(1);
  const limit = 10;

  const [deleteId, setDeleteId] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState("");
  const [Deletetitle, setDeletetitle] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);

  const [Adding, setAdding] = useState(false);
  const [AddError, setAddError] = useState("");
  const [AddArrayError, setAddArrayError] = useState([]);
  const [Addcoursetitle, setAddcoursetitle] = useState("");
  const [Addcourseprice, setAddcourseprice] = useState("");

  const [arrayerrors, setarrayerrors] = useState([]);
  const [updateerror, setupdateerror] = useState("");
  const [updatecourseId, setupdatecourseId] = useState(null);
  const [updatecoursetitle, setupdatecoursetitle] = useState("");
  const [updatecourseprice, setupdatecourseprice] = useState("");

  async function Getcourses(limit, page) {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://express-courses-app-production.up.railway.app/api/thecourses?limit=${limit}&page=${page}`
      );
      setcourses(res.data.data.courses);
      settotalPages(res.data.totalPages);
      seterror("");
    } catch (err) {
      seterror(err.message || "something wrong");
    } finally {
      setLoading(false);
    }
  }

  async function Updatecourse(id, title, price) {
    const token = localStorage.getItem("token") || "";
    try {
      await axios.patch(
        `https://express-courses-app-production.up.railway.app/api/thecourses/${id}`,
        {
          title: title,
          price: price,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setarrayerrors([]);
      setupdateerror("");
      setupdatecourseId(null);
      Getcourses(limit, page);
    } catch (err) {
      if (
        err.response.status === 400 ||
        err.response.status === 401 ||
        err.response.status === 403 ||
        err.response.status === 404 ||
        err.response.status === 500
      ) {
        const errors = err.response.data.error;
        if (Array.isArray(errors)) {
          setarrayerrors(errors);
          setupdateerror("");
        } else {
          setupdateerror(errors);
          setarrayerrors([]);
        }
      } else {
        setupdateerror(err.message || "something wrong");
        setarrayerrors([]);
      }
    }
  }

  async function DeleteCourse(id) {
    const token = localStorage.getItem("token") || "";
    try {
      await axios.delete(
        `https://express-courses-app-production.up.railway.app/api/thecourses/${id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setDeleteId("");
      setDeletetitle("");
      setDeleting(false);
      setDeleteError("");
      setConfirmDelete(false);
      Getcourses(limit, page);
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

  async function Add(title, price) {
    const token = localStorage.getItem("token") || "";
    try {
      await axios.post(
        "https://express-courses-app-production.up.railway.app/api/thecourses",
        {
          title: title,
          price: price,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setAddError("");
      setAdding(false);
      setAddArrayError([]);
      setAddcoursetitle("");
      setAddcourseprice("");
      Getcourses(limit, page);
    } catch (err) {
      if (
        err.response.status === 400 ||
        err.response.status === 401 ||
        err.response.status === 403 ||
        err.response.status === 500
      ) {
        const errors = err.response.data.error;
        if (Array.isArray(errors)) {
          setAddArrayError(errors);
          setAddError("");
        } else {
          setAddArrayError([]);
          setAddError(errors);
        }
      } else {
        setAddError(err.message || "something wrong");
        setAddArrayError([]);
      }
    }
  }

  useEffect(() => {
    Getcourses(limit, page);
  }, [page]);

  return (
    <main className="flex flex-col items-center justify-start min-h-screen text-gray-300 mt-10 mx-5">
      <h2 className="text-3xl text-cyan-500 font-bold mt-5">Courses List</h2>
      <div className="flex items-center justify-center gap-4 mt-5">
        <button
          onClick={() => {
            setAdding(true);
            setDeleting(false);
          }}
          className="bg-cyan-300 text-black hover:bg-white hover:text-cyan-500 shadow-md rounded-md p-1.5 cursor-pointer 
          transition duration-300 shadow-cyan-500 hover:scale-110 active:scale-95"
        >
          Add +
        </button>
        <button
          onClick={() => {
            setDeleting(true);
            setAdding(false);
          }}
          className={`bg-red-300 text-black hover:bg-white hover:text-red-500 rounded-md shadow-md p-1.5 cursor-pointer 
            transition duration-300 shadow-red-500 hover:scale-110  active:scale-95 ${
              courses.length === 0 ? "hidden" : ""
            }`}
        >
          Del -
        </button>
      </div>
      {deleting && (
        <div className="flex flex-col items-center justify-center gap-5 mt-8 opacity-0 animate-[goDown_.4s_ease_forwards]">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-3">
            <h3 className="font-bold text-xl">Choose a course to delete</h3>
            <input
              onChange={(e) => {
                const Title = e.target.value.toLowerCase();
                const selectedCourse = courses.find(
                  (course) => course.title.toLowerCase() === Title
                );

                if (selectedCourse) {
                  setDeletetitle(selectedCourse.title);
                  setDeleteId(selectedCourse._id);
                } else {
                  setDeleteId("");
                }
              }}
              placeholder="🔎 course"
              type="text"
              list="courses"
              className="bg-red-300 py-2 px-4 rounded-xl shadow-md shadow-red-500 text-black 
              border border-red-300 focus:border-black focus:outline-none appearance-none"
            ></input>
            <datalist id="courses">
              {courses.map((course) => (
                <option key={course._id} value={course.title}></option>
              ))}
            </datalist>
            <button
              onClick={() => {
                if (deleteId) {
                  setConfirmDelete(true);
                } else {
                  setConfirmDelete(false);
                  alert("this course is not defined");
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
                setDeletetitle("");
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
                Are you sure you want to delete{""}
                <span className="font-black mx-3 pb-1 border-b-[1px] text-red-500">
                  {Deletetitle} ?
                </span>
              </p>
              <button
                onClick={() => DeleteCourse(deleteId)}
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
      {Adding && (
        <div className="flex flex-col justify-center items-center mt-8 gap-5 opacity-0 animate-[goDown_.4s_ease_forwards]">
          <h2 className="font-bold text-xl mt-3">Add Your Course</h2>
          <div className="flex flex-col md:flex-row justify-center items-start gap-4">
            <div className="flex flex-col items-center gap-3">
              <label className="font-medium text-gray-200" htmlFor="newcourse">
                New Course :
              </label>
              <input
                className="bg-cyan-300 p-1.5 rounded-sm shadow-md shadow-cyan-500 text-black
                border border-cyan-300 focus:border-black focus:outline-none appearance-none"
                onChange={(e) => setAddcoursetitle(e.target.value)}
                value={Addcoursetitle}
                id="newcourse"
                type="text"
                name="newcourse"
                placeholder="title"
              ></input>
              {AddArrayError.filter((err) => err.path === "title").map(
                (err, index) => (
                  <p
                    key={index}
                    className="text-red-500 font-bold rounded w-fit mt-1"
                  >
                    {err.msg}
                  </p>
                )
              )}
            </div>
            <div className="flex flex-col items-center gap-3">
              <label className="font-medium text-gray-200" htmlFor="newprice">
                New Price :
              </label>
              <input
                className="bg-cyan-300 p-1.5 rounded-sm shadow-md shadow-cyan-500 text-black
                border border-cyan-300 focus:border-black focus:outline-none appearance-none"
                onChange={(e) => setAddcourseprice(e.target.value)}
                value={Addcourseprice}
                id="newprice"
                type="text"
                name="newprice"
                placeholder="price"
              ></input>
              {AddArrayError.filter((err) => err.path === "price").map(
                (err, index) => (
                  <p
                    key={index}
                    className="text-red-500 font-bold rounded w-fit mt-1"
                  >
                    {err.msg}
                  </p>
                )
              )}
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <button
              onClick={() => {
                Add(Addcoursetitle, Addcourseprice);
              }}
              className="text-black bg-cyan-300 active:scale-95 hover:bg-white hover:text-cyan-500 
              rounded-md p-1.5 cursor-pointer transition duration-300 shadow-md shadow-cyan-500 hover:scale-110 w-fit"
              type="submit"
            >
              Done
            </button>
            <button
              onClick={() => {
                setAddError("");
                setAdding(false);
                setAddArrayError([]);
                setAddcoursetitle("");
                setAddcourseprice("");
              }}
              className="text-black bg-red-300 active:scale-95 hover:bg-white hover:text-red-500 
              rounded-md p-1.5 cursor-pointer transition duration-300 shadow-md shadow-red-500 hover:scale-110 w-fit"
            >
              Cancel
            </button>
          </div>
          {AddError && (
            <p className="text-red-500 font-bold rounded w-fit mt-1 text-center">
              {AddError}
            </p>
          )}
        </div>
      )}
      <main className="mt-14">
        {Loading ? (
          <Loader />
        ) : error ? (
          <p className="text-red-500 text-center mt-32 text-2xl">{error}</p>
        ) : courses.length > 0 ? (
          <div
            className="flex flex-row flex-wrap items-start justify-center text-center gap-10 min-h-screen mx-32
            opacity-0 animate-[goUp_1s_ease_forwards_.5s]"
          >
            {courses.map((course) =>
              updatecourseId === course._id ? (
                <div
                  key={course._id}
                  className="flex flex-col items-center justify-around w-72 min-h-80 gap-5 px-2 py-4 rounded-2xl text-center
                  bg-gradient-to-bl from-[#1c1c1f]/70 via-[#35353a]/70 to-[#1c1c1f]/70 border border-white/10 
                  shadow-[0_10px_25px_-5px_rgba(0,0,0,0.8)] shadow-cyan-300 transition duration-300 backdrop-blur-md"
                >
                  <div>
                    <label htmlFor={`course-${course._id}`}>
                      Edit Course : {""}
                    </label>
                    <input
                      id={`course-${course._id}`}
                      type="text"
                      value={updatecoursetitle}
                      onChange={(e) => setupdatecoursetitle(e.target.value)}
                      placeholder={course.title}
                      className="bg-cyan-300 text-black rounded-md p-2 shadow-md shadow-cyan-500 mt-1
                      border border-cyan-300 focus:border-black focus:outline-none appearance-none"
                    />
                    {arrayerrors
                      .filter((err) => err.path === "title")
                      .map((err, i) => (
                        <p key={i} className="text-red-500 font-bold pt-2">
                          {err.msg}
                        </p>
                      ))}
                  </div>
                  <div>
                    <label htmlFor={`price-${course._id}`}>
                      Edit Price : {""}
                    </label>
                    <input
                      id={`price-${course._id}`}
                      type="text"
                      value={updatecourseprice}
                      onChange={(e) => setupdatecourseprice(e.target.value)}
                      placeholder={course.price}
                      className="bg-cyan-300 text-black rounded-md p-2 shadow-md shadow-cyan-500 mt-1
                      border border-cyan-300 focus:border-black focus:outline-none appearance-none"
                    />
                    {arrayerrors
                      .filter((err) => err.path === "price")
                      .map((err, i) => (
                        <p key={i} className="text-red-500 font-bold pt-2">
                          {err.msg}
                        </p>
                      ))}
                  </div>
                  <div className="flex flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setupdatecourseId(null);
                        setarrayerrors([]);
                        setupdateerror("");
                      }}
                      className="bg-red-300 text-black hover:bg-white hover:text-red-500 rounded-md w-8 h-8 cursor-pointer
                        shadow-md shadow-red-500 transition duration-300 hover:scale-110 active:scale-95"
                    >
                      ⨉
                    </button>
                    <button
                      onClick={() =>
                        Updatecourse(
                          course._id,
                          updatecoursetitle,
                          updatecourseprice
                        )
                      }
                      className="bg-cyan-300 text-black hover:bg-white hover:text-cyan-500 
                        shadow-md rounded-md px-3 py-1.5 transition duration-300 cursor-pointer
                        shadow-cyan-500 hover:scale-110 active:scale-95"
                    >
                      Done
                    </button>
                  </div>
                  {updateerror && (
                    <p className="text-red-500 font-bold mt-2">{updateerror}</p>
                  )}
                </div>
              ) : (
                <div
                  key={course._id}
                  className="group flex flex-col items-center justify-around w-72 h-80 px-2 py-4 rounded-2xl text-center
                  bg-gradient-to-br from-[#1c1c1f]/70 via-[#35353a]/70 to-[#1c1c1f]/70 border border-white/10
                  hover:bg-gradient-to-bl hover:shadow-cyan-300 hover:-translate-y-2 transition duration-300
                  backdrop-blur-md shadow-[0_10px_25px_-5px_rgba(0,0,0,0.8)]"
                >
                  <p className="text-[20px] md:text-[24px] flex items-center gap-3">
                    <span className="text-cyan-500">Title :</span>
                    <Link
                      className="hover:text-cyan-700"
                      href={`/courses/${course._id}`}
                    >
                      {course.title}
                    </Link>
                    <span className="text-[30px] group-hover:translate-x-3 transition-all duration-300 inline-block">
                      ›
                    </span>
                  </p>
                  <p className="text-[16px] md:text-[20px]">
                    <span className="text-cyan-500">Price :</span>{" "}
                    {course.price} $
                  </p>
                  <button
                    onClick={() => {
                      setupdatecourseId(course._id);
                      setupdatecourseprice(course.price);
                      setupdatecoursetitle(course.title);
                      setarrayerrors([]);
                      setupdateerror("");
                    }}
                    className=" bg-cyan-300 text-black hover:bg-white hover:text-cyan-500 shadow-md rounded-md py-1.5 px-10 
                    transition duration-300 shadow-cyan-500 hover:scale-110 active:scale-95 cursor-pointer"
                  >
                    Edit
                  </button>
                </div>
              )
            )}
          </div>
        ) : (
          <p className="text-red-500 text-center mt-32 text-2xl">
            No Courses Available
          </p>
        )}
        <div
          className={`flex flex-row justify-center items-center gap-4 mt-14 ${
            courses.length == 0 ? "hidden" : ""
          }`}
        >
          <button
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }}
            disabled={page <= 1}
            className={`px-2 py-1 rounded-md transition duration-300 ${
              page <= 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-cyan-300 hover:bg-white text-black hover:text-cyan-500 shadow-md shadow-cyan-500 cursor-pointer hover:scale-110 active:scale-95"
            }`}
          >
            Prev
          </button>
          <span className="text-lg font-semibold text-gray-200">
            Page {page} of {totalPages || 1}
          </span>
          <button
            onClick={() => {
              console.log(totalPages);
              if (page < totalPages) {
                setPage(page + 1);
              }
            }}
            disabled={page >= totalPages}
            className={`px-2 py-1 rounded-md transition duration-300 ${
              page >= totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-cyan-300 hover:bg-white text-black hover:text-cyan-500 shadow-md shadow-cyan-500 cursor-pointer hover:scale-110 active:scale-95"
            }`}
          >
            Next
          </button>
        </div>
      </main>
    </main>
  );
}
export default Courses;
