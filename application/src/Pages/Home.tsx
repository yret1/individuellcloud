import Postcard from "../components/Postcard";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export type Message = {
  id: string;
  user: string;
  message: string;
  createdAt: string;
};

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);

  const [sortIndex, setSortIndex] = useState<number>(0);

  const sortByDate = () => {
    const sortedMessages = [...messages].sort((a, b) => {
      if (sortIndex === 0) {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      } else {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
    });

    setMessages(sortedMessages);
    setSortIndex(sortIndex === 0 ? 1 : 0);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://ov973gwig9.execute-api.eu-north-1.amazonaws.com/messages"
      );

      const data = await response.json();

      console.log(data);

      const sortedData = [...data].sort((a, b) => {
        return Date.parse(b.createdAt) - Date.parse(a.createdAt);
      });

      setMessages(sortedData);
    };

    fetchData();
  }, []);
  return (
    <>
      {messages.length > 0 ? (
        <section className="w-screen min-h-dvh bg-mainbg p-4 flex flex-col justify-start pt-20 items-start gap-4">
          <section className="w-full flex justify-between items-center">
            <p className="font-pt font-bold text-white text-2xl">
              {sortIndex == 0
                ? "Nyaste Posts"
                : sortIndex === 1
                ? "Äldsta Posts"
                : ""}
            </p>
            <button onClick={sortByDate}>Ändra filter</button>
          </section>
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
        <section className="w-screen min-h-dvh bg-mainbg p-4 flex flex-col justify-center pt-20 items-center gap-4">
          <DotLottieReact
            loop
            autoplay
            src="https://lottie.host/2b1d1c40-e52e-4015-a80f-c40c1bb06a40/jsMd7wxzV0.json"
          />
        </section>
      )}
    </>
  );
}
