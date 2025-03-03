"use client";

import { useState } from "react";
import Button from "./button";

// interface RegisterNewsLetter {
//   email?: string;
// }

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex h-fit pt-6">
      <input
        type="email"
        id="email"
        name="email"
        placeholder="example@email.com"
        className="rounded-full px-4 py-4 mr-3 w-full border"
        value={email}
        onChange={(e) => handleChange(e)}
        required
      />
      <Button onClick={() => handleSubmit}>Subscribe</Button>
    </form>
  );
};

export default NewsLetter;
