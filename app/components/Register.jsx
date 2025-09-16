"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [error, seterror] = useState("");
  const [email, setemail] = useState("");
  const [role, setrole] = useState("USER");
  const [avatar, setAvatar] = useState("");
  const [preview, setPreview] = useState(null);
  const [lastname, setlastname] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [firstname, setfirstname] = useState("");
  const [arrayerrors, setarrayerrors] = useState([]);

  const Register = async (
    firstname,
    lastname,
    role,
    email,
    password,
    avatar
  ) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("avatar", avatar);

    try {
      const res = await axios.post(
        "https://express-courses-app-production.up.railway.app/api/theusers/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const token = res.data.data.user.token;
      localStorage.setItem("token", token);
      const avatar = res.data.data.user.avatar;
      localStorage.setItem("avatar", avatar);
      const name = res.data.data.user.firstname;
      localStorage.setItem("name", name);
      seterror("");
      setemail("");
      setrole("USER");
      setpassword("");
      setlastname("");
      setAvatar(null);
      setfirstname("");
      setarrayerrors([]);
      router.push("/courses");
    } catch (err) {
      if (err.response.status === 400 || err.response.status === 500) {
        const errors = err.response.data.error;
        if (Array.isArray(errors)) {
          setarrayerrors(errors);
          seterror("");
        } else {
          seterror(err.response.data.error);
          setarrayerrors([]);
        }
      } else {
        seterror(err.message || "something wrong");
        setarrayerrors([]);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Register(firstname, lastname, role, email, password, avatar);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <main className="flex flex-col lg:flex-row items-center justify-around gap-16 lg:gap-0 p-5 lg:p-10 text-gray-300">
      <form
        className="md:w-[450px] bg-gradient-to-t from-[#1c1c1f] to-[#2a2a2e] rounded-[30px] p-[25px_35px] shadow-md 
        opacity-0 shadow-cyan-200 animate-[goRight_1s_ease_forwards_.5s]"
        onSubmit={handleSubmit}
      >
        <h2 className="font-black text-[30px] text-[#7dd3fc] animate-[color_2s_ease_infinite_alternate_1s] text-center">
          Register
        </h2>
        <div className="w-full flex items-center justify-center">
          <label
            className="w-40 h-40 mt-10 flex items-center justify-center rounded-full bg-[#1e1e22] border-2 shadow-[0_10px_15px_-8px_rgba(0,0,0,0.7)]
            border-dashed border-gray-400 cursor-pointer hover:border-cyan-300 transition overflow-hidden"
          >
            {preview ? (
              <img
                src={preview}
                alt="avatar preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-400 text-sm">
                +<span> Add Photo</span>
              </span>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-[45%]">
            <input
              className="bg-[#1e1e22] text-gray-300 p-[10px_15px] mt-10 w-full rounded-[12px] shadow-[0_10px_15px_-8px_rgba(0,0,0,0.7)] placeholder:text-gray-500 border border-[#1e1e22] focus:border-cyan-200 focus:outline-none"
              onChange={(e) => setfirstname(e.target.value)}
              value={firstname}
              type="text"
              placeholder="First Name"
            />
            {arrayerrors
              .filter((err) => err.path === "firstname")
              .map((err, index) => (
                <p
                  key={index}
                  className="text-red-500 font-bold mt-3 text-center"
                >
                  {err.msg}
                </p>
              ))}
          </div>
          <div className="w-full md:w-[45%]">
            <input
              className="bg-[#1e1e22] text-gray-200 p-[10px_15px] mt-10 w-full rounded-[12px] shadow-[0_10px_15px_-8px_rgba(0,0,0,0.7)] placeholder:text-gray-500 border border-[#1e1e22] focus:border-cyan-200 focus:outline-none"
              onChange={(e) => setlastname(e.target.value)}
              value={lastname}
              type="text"
              placeholder="Last Name"
            />
            {arrayerrors
              .filter((err) => err.path === "lastname")
              .map((err, index) => (
                <p
                  key={index}
                  className="text-red-500 font-bold mt-3 text-center"
                >
                  {err.msg}
                </p>
              ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-[45%]">
            <input
              className="bg-[#1e1e22] text-gray-200 p-[10px_15px] mt-10 rounded-[12px] w-full shadow-[0_10px_15px_-8px_rgba(0,0,0,0.7)] placeholder:text-gray-500 border border-[#1e1e22] focus:border-cyan-200 focus:outline-none"
              onChange={(e) => setemail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
            />
            {arrayerrors
              .filter((err) => err.path === "email")
              .map((err, index) => (
                <p
                  key={index}
                  className="text-red-500 font-bold mt-3 text-center"
                >
                  {err.msg}
                </p>
              ))}
          </div>
          <div className="w-full md:w-[45%]">
            <input
              className="bg-[#1e1e22] text-gray-200 p-[10px_15px] mt-10 rounded-[12px] w-full shadow-[0_10px_15px_-8px_rgba(0,0,0,0.7)] placeholder:text-gray-500 border border-[#1e1e22] focus:border-cyan-200 focus:outline-none"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
            />
            {arrayerrors
              .filter((err) => err.path === "password")
              .map((err, index) => (
                <p
                  key={index}
                  className="text-red-500 font-bold mt-3 text-center"
                >
                  {err.msg}
                </p>
              ))}
          </div>
        </div>
        <select
          className="bg-[#1e1e22] text-gray-200 p-[10px_15px] mt-10 rounded-[12px] w-full shadow-[0_10px_15px_-8px_rgba(0,0,0,0.7)] placeholder:text-gray-500 border border-[#1e1e22] focus:border-cyan-200 focus:outline-none cursor-pointer appearance-none"
          onChange={(e) => setrole(e.target.value)}
          value={role}
        >
          <option value="USER">USER</option>
          <option value="MANAGER">MANAGER</option>
          <option value="ADMIN">ADMIN</option>
        </select>
        <p className="text-gray-400 mt-10 w-full text-sm md:text[18px] text-center">
          have an account ?
          <Link href={"/login_form"}>
            <span className="text-cyan-300 hover:underline"> Sign in</span>
          </Link>
        </p>
        <button
          type="submit"
          disabled={loading}
          className={`cursor-pointer font-bold py-3 w-full mt-10 rounded-[12px] shadow-[0_20px_20px_-15px_rgba(0,0,0,0.7)] border-none transition-all duration-200
            bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] hover:scale-[1.06] hover:shadow-[0_25px_20px_-20px_rgba(0,0,0,0.9)] active:scale-95
            ${loading ? "cursor-not-allowed" : ""}
          `}
        >
          {loading ? "Loading..." : "Sign up"}
        </button>
        {error && (
          <p className="text-red-500 font-bold p-2 text-center w-full mt-10">
            {error}
          </p>
        )}
        <p className="text-[13px] text-gray-400 text-center w-full mt-10 pt-3 border-t border-t-gray-500 ">
          Or Sign UP with
        </p>
        <div className="flex justify-center items-center gap-[25px] mt-3">
          <button className="w-10 h-10 font-bold cursor-pointer hover:bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] hover:text-black bg-[#1e1e22] border border-gray-700 rounded-full shadow-md transition duration-300 hover:scale-125 active:scale-90">
            F
          </button>
          <button className="w-10 h-10 font-bold cursor-pointer hover:bg-gradient-to-r from-[#ff7b00] to-[#fdb242] hover:text-black bg-[#1e1e22] border border-gray-700 rounded-full shadow-md transition duration-300 hover:scale-125 active:scale-90">
            G
          </button>
          <button className="w-10 h-10 font-bold cursor-pointer hover:bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] hover:text-black bg-[#1e1e22] border border-gray-700 rounded-full shadow-md transition duration-300 hover:scale-125 active:scale-90">
            X
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-5 p-5 rounded-md bg-gradient-to-b from-[#1c1c1f] to-[#2a2a2e] animate-[shadow_3s_ease-in-out_infinite_alternate]">
        <div className="p-5">
          <p>"Talk is cheap. Show me the code."</p>
          <p className="font-bold text-[#7dd3fc]">— Linus Torvalds</p>
        </div>
        <div className="p-5 border-t border-gray-700">
          <p>"First, solve the problem. Then, write the code."</p>
          <p className="font-bold text-[#7dd3fc]">— John Johnson</p>
        </div>
        <div className="p-5 border-t border-gray-700">
          <p>"Simplicity is the soul of efficiency."</p>
          <p className="font-bold text-[#7dd3fc]">— Austin Freeman</p>
        </div>
      </div>
    </main>
  );
};

export default Register;
