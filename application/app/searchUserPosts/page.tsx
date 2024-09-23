"use client";

import { useState } from "react";
import { Message } from "../page";

const Page = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loadning, setLoading] = useState<boolean>(true);
  const [searchUser, setSearchUser] = useState<string>("");

  const searchUserPosts = async () => {};
  return <section className="w-screen pt-20 bg-mainbg min-h-dvh"></section>;
};

export default Page;
