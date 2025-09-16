import React from "react";
import Link from "next/link";

const Notfound = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold text-gray-300">404</h1>
      <div className="bg-cyan-300 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <Link href={"/"}>
        <button
          type="button"
          className="mt-5 bg-cyan-300 text-black hover:bg-white hover:text-cyan-500 shadow-md rounded-md p-1.5 
          cursor-pointer transition duration-300 shadow-cyan-500 hover:scale-110 active:scale-95"
        >
          Go Home
        </button>
      </Link>
    </main>
  );
};

export default Notfound;
