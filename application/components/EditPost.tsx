"use client";
import { useState } from "react";

interface EditPostProps {
  user: string;
  message: string;
  id: string;
  confirmEdit: (type: boolean) => void;
  cancelEdit: () => void;
}

const EditPost: React.FC<EditPostProps> = ({
  id,
  confirmEdit,

  cancelEdit,
  message,
  user,
}) => {
  const [newMessage, setNewMessage] = useState<string>(message);

  const tryUpdateMessage = async () => {
    if (!newMessage) {
      alert("Du måste fylla i ett meddelande");
      return;
    }
    const response = await fetch("/api/updatePost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        message: newMessage,
        user: user,
      }),
    });
    if (response.ok) {
      alert("Meddelandet har uppdaterats!");
      setNewMessage("");
      confirmEdit(false);
    }
  };

  return (
    <section
      id={id}
      className="w-screen h-screen bg-slate-950 absolute top-0 left-0 z-50 bg-opacity-35 flex justify-center items-center p-6"
    >
      <section className="w-full bg-white flex flex-col gap-2 justify-start items-start p-4">
        <p className="font-pt text-slate-950 font-bold">
          Redigera {user}&apos; post.
        </p>
        <textarea
          name="postmessage"
          id="message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Vad vill du att det nya meddelandet ska vara?"
          className="w-full h-96 bg-white p-4 text-slate-950 border-2 rounded border-slate-950 font-pt text-2xl"
        />

        <section className="w-full flex justify-center items-center gap-4">
          <button
            onClick={tryUpdateMessage}
            className="bg-cta text-slate-950 font-pt font-bold text-2xl p-4 rounded-md"
          >
            Uppdatera
          </button>
          <button
            onClick={cancelEdit}
            className="bg-slate-950 text-white font-pt font-bold text-2xl p-4 rounded-md"
          >
            Avbryt
          </button>
        </section>
      </section>
    </section>
  );
};

export default EditPost;
