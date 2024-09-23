"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

const Searchbutton = () => {
  const path = usePathname();

  if (path === "/newPost") {
    return null;
  } else {
    return (
      <Link
        href={"/searchUserPosts"}
        className="fixed top-0 right-10 shadow-md bg-cta flex justify-center p-2 rounded-b w-12 z-50 items-center"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              stroke="#19274A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </Link>
    );
  }
};

export default Searchbutton;
