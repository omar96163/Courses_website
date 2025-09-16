"use client";

import React from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const HomeContent = () => {
  const { ref: section1Ref, inView: section1InView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });
  const { ref: section2Ref, inView: section2InView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });
  const { ref: section3Ref, inView: section3InView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });
  const { ref: section4Ref, inView: section4InView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });

  const quotes = [
    "“ This platform helped me land my first web developer job! ” – Ahmed",
    "“ The courses are clear, practical, and beginner-friendly ” – Mona",
    "“ Best coding experience ever. Highly recommend! ” – Omar",
    "“ I improved my coding skills in just 3 months! ” – Sara",
    "“ Great support from mentors and a friendly community ” – Ali",
    "“ Finally understood JavaScript thanks to these lessons ” – Youssef",
    "“ The projects gave me real-world experience ” – Layla",
    "“ I built my first portfolio site with their guidance ” – Kareem",
    "“ Best decision I made for my career switch ” – Nour",
  ];

  return (
    <main className="text-gray-300">
      <section
        className="flex flex-col items-center justify-center text-center h-screen
        scale-0 animate-[scale_1.5s_ease_forwards_1.5s] px-4 gap-3"
      >
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
          Learn Programming Build Your Future 🚀
        </h1>
        <p className="text-[14px] md:text-[18px] lg:text-2xl max-w-[300px] md:max-w-[400px] lg:max-w-2xl">
          Join thousands of learners mastering coding skills with real-world
          projects and expert instructors.
        </p>
        <div className="flex gap-5 items-center text-[14px] md:text-[18px] mt-5">
          <Link
            href={"/courses"}
            className="bg-cyan-300 text-black hover:text-white shadow-md px-3 md:px-6 py-2 md:py-3 rounded-2xl cursor-pointer 
              transition duration-300 shadow-white hover:scale-110 active:scale-95"
          >
            Explore Courses
          </Link>
          <Link
            href={"/login_form"}
            className="text-black bg-white hover:text-cyan-500 shadow-md px-3 md:px-6 py-2 md:py-3 rounded-2xl cursor-pointer 
              transition duration-300 shadow-cyan-500 hover:scale-110 active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </section>
      <section
        ref={section1Ref}
        className={`text-center px-4 scale-0 ${
          section1InView ? "animate-[scale_1s_ease_forwards]" : ""
        }`}
      >
        <h2
          className={`text-2xl md:text-5xl font-extrabold mb-6 ${
            section1InView ? "animate-[jello-vertical_1s_ease_forwards_2]" : ""
          }`}
        >
          Why Choose Us ?
        </h2>
        <p className="mb-14 text-sm md:text-lg leading-relaxed">
          We provide high-quality programming courses designed for both
          beginners and professionals.<br></br>
          Learn at your own pace with interactive lessons , guided projects ,
          and expert support.
        </p>
        <div className="flex flex-col justify-center items-center relative text-center gap-5">
          <div className="absolute h-full w-2 rounded-full bg-gray-300 flex flex-col justify-around">
            <div className="w-2 h-4 bg-cyan-300 animate-ping rounded-full"></div>
            <div className="w-2 h-4 bg-cyan-300 animate-ping rounded-full"></div>
            <div className="w-2 h-4 bg-cyan-300 animate-ping rounded-full"></div>
            <div className="w-2 h-4 bg-cyan-300 animate-ping rounded-full"></div>
            <div className="w-2 h-4 bg-cyan-300 animate-ping rounded-full"></div>
            <div className="w-2 h-4 bg-cyan-300 animate-ping rounded-full"></div>
          </div>
          {[
            { icon: "📚", title: "Structured Learning Paths" },
            { icon: "👨‍🏫", title: "Expert Instructors" },
            { icon: "🌍", title: "Learn Anytime, Anywhere" },
            { icon: "💼", title: "Job-Ready Skills" },
            { icon: "⚡", title: "Hands-on Projects" },
            { icon: "🤝", title: "Community Support" },
          ].map((item, i) => (
            <div
              key={i}
              className={`hover:-translate-y-2 group transition duration-300 w-36 md:w-60 p-5 rounded-lg 
                hover:shadow-cyan-300 opacity-0 shadow-[0_10px_25px_-5px] shadow-gray-300 hover:text-cyan-300
                bg-gradient-to-br from-[#1c1c1f] via-[#35353a] to-[#1c1c1f] ${
                  section1InView && i === 0
                    ? "animate-[goRight_1s_ease_forwards_.5s] mr-44 md:mr-96"
                    : ""
                } ${
                section1InView && i === 1
                  ? "animate-[goLeft_1s_ease_forwards_.7s] ml-44 md:ml-96"
                  : ""
              } ${
                section1InView && i === 2
                  ? "animate-[goRight_1s_ease_forwards_.9s] mr-44 md:mr-96"
                  : ""
              } ${
                section1InView && i === 3
                  ? "animate-[goLeft_1s_ease_forwards_1.1s] ml-44 md:ml-96"
                  : ""
              } ${
                section1InView && i === 4
                  ? "animate-[goRight_1s_ease_forwards_1.3s] mr-44 md:mr-96"
                  : ""
              } ${
                section1InView && i === 5
                  ? "animate-[goLeft_1s_ease_forwards_1.5s] ml-44 md:ml-96"
                  : ""
              }`}
            >
              <div className="md:text-2xl group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>
              <h3 className="font-semibold mt-2 md:mt-4 text-sm md:text-lg">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
      <section
        ref={section2Ref}
        className={`text-center mt-40 px-4 scale-0 ${
          section2InView ? "animate-[scale_1s_ease_forwards]" : ""
        }`}
      >
        <h2
          className={`text-2xl md:text-5xl font-bold mb-20 ${
            section2InView ? "animate-[jello-vertical_1s_ease_forwards_2]" : ""
          }`}
        >
          Our Popular{" "}
          <span className="text-[#7dd3fc] animate-[color_2s_ease_infinite_alternate_1s]">
            Courses
          </span>
        </h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-20 mb-20">
          {[
            {
              title: "Full-Stack Web Development",
              desc: "Learn HTML , CSS , JavaScript , React , Node.js & Databases",
              image: "Full_Stack_Development.jpg",
              image2: "Full_Stack_Development2.png",
            },
            {
              title: "Python for Beginners",
              desc: "Start coding with Python, the most beginner-friendly language",
              image: "python.png",
              image2: "python2.png",
            },
            {
              title: "React Mastery",
              desc: "Build dynamic web apps with React & modern tools",
              image: "react.png",
              image2: "react2.png",
            },
            {
              title: "Data Structures & Algorithms",
              desc: "Crack coding interviews with confidence",
              image: "Data_Structures_Algorithms.jpg",
              image2: "Data_Structures_Algorithms_2.png",
            },
            {
              title: "Java Programming",
              desc: "Master Java to build robust desktop, web & mobile applications",
              image: "java.jpg",
              image2: "java2.png",
            },
          ].map((course, i) => (
            <div
              key={i}
              className={`relative rounded-2xl h-[150px] md:h-[200px] w-[300px] md:w-[400px] group [perspective:2500px] opacity-0 ${
                section2InView && i === 0
                  ? "animate-[goRight_1s_ease_forwards_.5s]"
                  : ""
              } ${
                section2InView && i === 1
                  ? "animate-[goDown_1s_ease_forwards_.7s]"
                  : ""
              } ${
                section2InView && i === 2
                  ? "animate-[goLeft_1s_ease_forwards_.9s]"
                  : ""
              } ${
                section2InView && i === 3
                  ? "animate-[goUp_1s_ease_forwards_1.1s]"
                  : ""
              } ${
                section2InView && i === 4
                  ? "animate-[goUp_1s_ease_forwards_1.3s]"
                  : ""
              }`}
            >
              <div
                className="absolute inset-0 transition-all duration-500 
                group-hover:[transform:perspective(900px)_translateY(-5%)_rotateX(25deg)]
                shadow-[0_10px_25px_-5px_rgba(0,0,0,0.8)] group-hover:shadow-cyan-300 rounded-2xl"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
                  bg-gradient-to-b from-transparent via-black/60 to-black rounded-2xl"
                ></div>
              </div>
              <div
                className="absolute inset-0 flex flex-col justify-end items-center z-10 transition-all duration-500 scale-0
                group-hover:[transform:translate3d(0,-40px,100px)] group-hover:scale-125 rounded-2xl"
              >
                <img
                  src={course.image2}
                  alt={course.title}
                  className="md:w-32 md:h-32 w-16 h-16 object-cover rounded-2xl"
                />
                <h3 className="font-semibold text-sm md:text-lg">
                  {course.title}
                </h3>
                <p className="text-sm">{course.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Link
          href={"/courses"}
          className="inline-block text-black bg-white hover:text-cyan-500 shadow-md px-6 py-3 rounded-2xl cursor-pointer transition duration-300 shadow-cyan-500 hover:scale-110 active:scale-95"
        >
          Explore Courses
        </Link>
      </section>
      <section
        ref={section3Ref}
        className={`text-center mt-40 px-4 opacity-0 ${
          section3InView ? "animate-[goUp_1s_ease_forwards]" : ""
        }`}
      >
        <h2 className="text-2xl md:text-5xl font-bold mb-10">
          What Makes Us Different ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className={`opacity-0 ${
              section3InView ? "animate-[goUp_1s_ease_forwards_.2s]" : ""
            }`}
          >
            🎯 Hands-on Projects
          </div>
          <div
            className={`opacity-0 ${
              section3InView ? "animate-[goUp_1s_ease_forwards_.4s]" : ""
            }`}
          >
            🕒 Lifetime Access
          </div>
          <div
            className={`opacity-0 ${
              section3InView ? "animate-[goUp_1s_ease_forwards_.6s]" : ""
            }`}
          >
            📱 Mobile Friendly
          </div>
          <div
            className={`opacity-0 ${
              section3InView ? "animate-[goUp_1s_ease_forwards_.8s]" : ""
            }`}
          >
            🧑‍💻 Personalized Dashboard
          </div>
          <div
            className={`opacity-0 ${
              section3InView ? "animate-[goUp_1s_ease_forwards_1s]" : ""
            }`}
          >
            🏆 Certificates of Completion
          </div>
          <div
            className={`opacity-0 ${
              section3InView ? "animate-[goUp_1s_ease_forwards_1.2s]" : ""
            }`}
          >
            🔒 Secure Learning Platform
          </div>
          <div
            className={`opacity-0 ${
              section3InView ? "animate-[goUp_1s_ease_forwards_1.4s]" : ""
            }`}
          >
            🌍 Global Community
          </div>
          <div
            className={`opacity-0 ${
              section3InView ? "animate-[goUp_1s_ease_forwards_1.6s]" : ""
            }`}
          >
            💡 Practical Knowledge
          </div>
          <div
            className={`opacity-0 ${
              section3InView ? "animate-[goUp_1s_ease_forwards_1.8s]" : ""
            }`}
          >
            🚀 Career Growth
          </div>
        </div>
      </section>
      <section
        ref={section4Ref}
        className={`text-center mt-40 px-4 scale-0 ${
          section4InView ? "animate-[scale_1s_ease_forwards]" : ""
        }`}
      >
        <h2 className="text-2xl md:text-5xl font-bold mb-10">
          What Our Students Say
        </h2>
        <div className="overflow-hidden">
          <div className="flex animate-[scroll_70s_linear_infinite] hover:[animation-play-state:paused] gap-5 w-max p-5">
            {[...quotes, ...quotes].map((quote, i) => (
              <div
                key={i}
                className="rounded-md bg-gray-300 p-4 shadow-md shadow-cyan-300 hover:bg-cyan-300 hover:shadow-gray-300 
                text-black hover:translate-y-1 transition duration-300"
              >
                {quote}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeContent;
