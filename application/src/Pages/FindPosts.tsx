"use client";

import { useState } from "react";
import { Message } from "./Home";
import { AnimatePresence, motion } from "framer-motion";
import Postcard from "../components/Postcard";

const FindPosts = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loadning, setLoading] = useState<boolean>(false);
  const [searchUser, setSearchUser] = useState<string>("");

  const searchUserPosts = async () => {
    setLoading(true);

    const url = `https://ov973gwig9.execute-api.eu-north-1.amazonaws.com/messages/${searchUser}`;
    const response = await fetch(url, {
      method: "GET",
    });
    if (response.ok) {
      const data = await response.json();
      setMessages(data);
      setLoading(false);
    }
  };

  return (
    <>
      {messages && messages.length === 0 && (
        <section className="w-screen pt-20 bg-mainbg min-h-dvh flex justify-center px-6 items-center">
          <section className="w-full flex flex-col justify-center items-center gap-2">
            <input
              type="text"
              placeholder="Användarnamn"
              required
              value={searchUser}
              onChange={(e) => setSearchUser(e.target.value)}
              className="bg-transparent border-2 rounded-md p-4 text-white font-bold font-pt w-full text-2xl"
            />
            {loadning ? (
              <button className="font-bold font-pt text-2xl rounded-md text-slate-950 bg-cta w-full py-4">
                Söker...
              </button>
            ) : (
              <button
                onClick={searchUserPosts}
                className="font-bold font-pt text-2xl rounded-md text-slate-950 bg-cta w-full py-4"
              >
                Sök
              </button>
            )}
          </section>
        </section>
      )}
      {messages && messages.length > 0 && (
        <section className="w-screen min-h-dvh bg-mainbg p-4 flex flex-col justify-start pt-20 items-start gap-4">
          <p className="font-pt font-bold text-white text-2xl">
            {searchUser}&apos;s posts
          </p>
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                className="w-full"
                key={message.id}
              >
                <Postcard {...message} />
              </motion.div>
            ))}
          </AnimatePresence>
        </section>
      )}
    </>
  );
};

export default FindPosts;
