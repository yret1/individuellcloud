"use client";
import Image from "next/image";
import { useState } from "react";
import EditPost from "./EditPost";

interface PostcardProps {
  createdAt: string;
  user: string;
  message: string;
  id: string;
}

const Postcard: React.FC<PostcardProps> = ({
  id,
  user,
  createdAt,
  message,
}) => {
  const dateToLocale = new Date(createdAt).toLocaleDateString();
  const timeToLocale = new Date(createdAt).toLocaleTimeString();

  const [editing, setEditing] = useState<boolean>(false);

  const cancelEdit = () => {
    setEditing(false);
  };

  return (
    <>
      <section
        id={id}
        className="w-full bg-cardbg p-4 flex flex-col justify-between gap-4 items-start mb-8 relative"
      >
        <button
          onClick={() => setEditing(true)}
          className="w-6 h-6 absolute top-4 right-4"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                stroke="#19274A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                stroke="#19274A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>

        <p className="text-slate-900 text-opacity-60 text-sm font-pt">
          {dateToLocale + ", " + timeToLocale}
        </p>
        <p className="text-slate-950 font-medium text-lg font-pt">{message}</p>
        <p className="text-slate-950 font-bold font-pt text-xl">-{user}</p>

        <div className="w-8 h-8 absolute top-full right-0 flex justify-center items-center">
          <Image src={"/cardTag.svg"} width={32} height={32} alt="cardtag" />
        </div>
      </section>

      {editing && (
        <EditPost
          id={id}
          message={message}
          user={user}
          confirmEdit={setEditing}
          cancelEdit={cancelEdit}
        />
      )}
    </>
  );
};

export default Postcard;
