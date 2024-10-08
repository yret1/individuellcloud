"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardTag from "../assets/cardTag.svg";
import "../index.css";

const AddPost = () => {
  const router = useNavigate();

  const [message, setMessage] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [sending, setSending] = useState<boolean>(false);

  const addNewMessage = async () => {
    if (!message || !user) {
      alert("Du måste fylla i både användarnamn och meddelande");
      return;
    }
    setSending(true);
    const response = await fetch(
      "https://ov973gwig9.execute-api.eu-north-1.amazonaws.com/addMessage",
      {
        method: "POST",
        body: JSON.stringify({
          user: user,
          message: message,
        }),
      }
    );
    if (response.ok) {
      alert("Ditt meddelande har publicerats!");
      setMessage("");
      setUser("");
      setSending(false);

      router("/");
    }
  };

  return (
    <section className="w-screen h-dvh pt-20 px-4 pb-10 flex flex-col bg-mainbg justify-between items-center">
      <section className="w-full min-h-96 relative">
        <textarea
          name="postmessage"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Skriv ditt inlägg här..."
          className=" w-full h-full bg-white p-4 text-slate-950 font-pt text-2xl"
        ></textarea>
        <div className="w-8 h-8 absolute top-full right-0 flex justify-center items-center">
          <img src={CardTag} width={32} height={32} alt="cardtag" />
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center gap-2">
        <input
          type="text"
          placeholder="Användarnamn"
          required
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="bg-transparent border-2 rounded-md p-4 text-white font-bold font-pt w-full text-2xl"
        />
        {sending ? (
          <button className="font-bold font-pt text-2xl rounded-md text-slate-950 bg-cta w-full py-4">
            Skickar...
          </button>
        ) : (
          <button
            onClick={addNewMessage}
            className="font-bold font-pt text-2xl rounded-md text-slate-950 bg-cta w-full py-4"
          >
            Publicera
          </button>
        )}
      </section>
    </section>
  );
};

export default AddPost;
