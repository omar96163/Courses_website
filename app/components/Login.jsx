"use client";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const [error, seterror] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const Login = async (email, password) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://express-courses-app-production.up.railway.app/api/theusers/login",
        {
          email: email,
          password: password,
        }
      );
      const token = res.data.user.token;
      localStorage.setItem("token", token);
      const avatar = res.data.user.avatar;
      localStorage.setItem("avatar", avatar);
      const name = res.data.user.firstname;
      localStorage.setItem("name", name);
      setemail("");
      seterror("");
      setpassword("");
      router.push("/courses");
    } catch (err) {
      if (
        err.response.status === 400 ||
        err.response.status === 404 ||
        err.response.status === 401 ||
        err.response.status === 500
      ) {
        seterror(err.response.data.error);
      } else {
        seterror(err.message || "something wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    Login(user.email, user.password);
  };

  return (
    <main className="flex flex-col-reverse lg:flex-row items-center justify-around gap-16 lg:gap-0 p-10 min-h-screen text-gray-300">
      <p className="flex flex-col items-center text-center gap-5 p-5 text-lg lg:text-xl rounded-md bg-gradient-to-b from-[#1c1c1f] to-[#2a2a2e] animate-[shadow_3s_ease-in-out_infinite_alternate]">
        Believe in yourself and keep moving forward <br></br>
        <span className="text-sm lg:text-lg">
          Keep believing in your abilities stay positive and <br></br>
          always move forward toward your goals
        </span>
      </p>
      <form
        className="md:w-[350px] flex flex-col gap-8 items-center justify-center bg-gradient-to-t from-[#1c1c1f] to-[#2a2a2e] rounded-[30px] p-[25px_35px] shadow-md shadow-cyan-200 opacity-0 animate-[goLeft_1s_ease_forwards_.5s]"
        onSubmit={handleSubmit}
      >
        <h2 className="font-black text-[30px] text-[#7dd3fc] animate-[color_2s_ease_infinite_alternate_1s]">
          Sign In
        </h2>
        <input
          className="bg-[#1e1e22] p-[10px_15px] rounded-[12px] w-full shadow-[0_10px_15px_-8px_rgba(0,0,0,0.7)] placeholder:text-gray-500 border border-[#1e1e22] focus:border-cyan-200 focus:outline-none"
          onChange={(e) => {
            setemail(e.target.value);
          }}
          value={email}
          type="email"
          id="email"
          name="email"
          placeholder="E-mail"
        />
        <input
          className="bg-[#1e1e22] p-[10px_15px] rounded-[12px] w-full shadow-[0_10px_15px_-8px_rgba(0,0,0,0.7)] placeholder:text-gray-500 border border-[#1e1e22] focus:border-cyan-200 focus:outline-none"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          value={password}
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <p className="text-gray-400 text-sm md:text[18px]">
          create an account
          <Link href={"/register_form"}>
            <span className="text-cyan-300 hover:underline"> Sign up</span>
          </Link>
        </p>
        <button
          type="submit"
          disabled={loading}
          className={`cursor-pointer w-full font-bold py-3 rounded-[12px] shadow-[0_20px_20px_-15px_rgba(0,0,0,0.7)] border-none transition-all duration-300
            bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] hover:scale-[1.06] hover:shadow-[0_25px_20px_-20px_rgba(0,0,0,0.9)] active:scale-95
            ${loading ? "cursor-not-allowed" : ""}
          `}
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
        {error && <p className="text-red-500 font-bold p-2">{error}</p>}
        <p className="text-[13px] text-gray-400 w-full text-center pt-3 border-t border-t-gray-500">
          Or Sign in with
        </p>
        <div className="flex justify-center items-center gap-[25px]">
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
    </main>
  );
};

export default Login;
