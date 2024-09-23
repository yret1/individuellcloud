"use client";
import Postcard from "@/components/Postcard";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export type Message = {
  id: string;
  user: string;
  message: string;
  createdAt: string;
};

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch("/api/getMessages")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessages(data);
      });
  }, []);
  return (
    <>
      {messages.length > 0 ? (
        <section className="w-screen min-h-dvh bg-mainbg p-4 flex flex-col justify-start pt-20 items-start gap-4">
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
      ) : (
        <section className="w-screen min-h-dvh bg-mainbg p-4 flex flex-col justify-start pt-20 items-start gap-4"></section>
      )}
    </>
  );
}
