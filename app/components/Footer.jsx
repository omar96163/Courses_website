import React from "react";

export const Footer = () => {
  return (
    <footer className="mt-40 lg:mx-10 mx-5 text-gray-300">
      <svg
        className="w-full h-6"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          className="stroke-gray-300"
          strokeWidth="3"
          fill="none"
          d="M0 22L120 16.7C240 11 480 1 720 0.7C960 1 1200 11 1320 16.7L1440 22"
        />
      </svg>
      <div className="py-10 lg:mx-6 mx-3 flex flex-col">
        <div
          className="flex flex-col lg:flex-row justify-center lg:justify-around 
          items-center lg:items-start gap-10 lg:gap-0"
        >
          <div className="flex flex-col gap-5">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="text-[#7dd3fc] animate-[color_2s_ease_infinite_alternate_1s] inline-flex"
            >
              <svg
                className="w-8"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-xl font-bold uppercase">Company</span>
            </a>
            <div className="max-w-[350px]">
              <p className="text-sm">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p className="mt-2 text-sm">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-center text-center gap-5 lg:gap-0">
            <div className="lg:mr-10">
              <p className="font-semibold text-cyan-700 text-xl">Category</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition duration-300 hover:underline"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition duration-300 hover:underline"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition duration-300 hover:underline"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition duration-300 hover:underline"
                  >
                    References
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:mr-10">
              <p className="font-semibold text-cyan-700 text-xl">Cherry</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition duration-300 hover:underline"
                  >
                    Web
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition duration-300 hover:underline"
                  >
                    eCommerce
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition duration-300 hover:underline"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition duration-300 hover:underline"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition duration-300 hover:underline"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:mr-10">
              <p className="font-semibold text-cyan-700 text-xl">Apples</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition duration-300 hover:underline"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition duration-300 hover:underline"
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition duration-300 hover:underline"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition duration-300 hover:underline"
                  >
                    Educational
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition duration-300 hover:underline"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-cyan-700 text-xl">Business</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition duration-300 hover:underline"
                  >
                    Infopreneur
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition duration-300 hover:underline"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition duration-300 hover:underline"
                  >
                    Wiki
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition duration-300 hover:underline"
                  >
                    Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-around text-center
          pt-10 mt-10 lg:mx-10 border-t-[1px] border-gray-300"
        >
          <p className="text-sm">
            © Copyright 2020 Lorem Inc. All rights reserved
          </p>
          <div className="flex items-center space-x-4 text-black">
            <a
              href="/"
              className="transition duration-300 hover:text-cyan-500 animate-[heartbeat_1.5s_ease-in-out_infinite_both]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-7">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className="transition duration-300 hover:text-orange-500 animate-[heartbeat_1.5s_ease-in-out_infinite_both]"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-8">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="transition-colors duration-300 hover:text-cyan-700 animate-[heartbeat_1.5s_ease-in-out_infinite_both]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-7">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
