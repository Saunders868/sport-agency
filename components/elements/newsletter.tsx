"use client";

import { useState } from "react";
import Button from "./button";
import { useToast } from "@/hooks/use-toast";

interface RegisterNewsLetter {
  email?: string;
}

const NewsLetter = () => {
  const { toast } = useToast();

  const [registerNewsLetter, setRegisterNewsLetter] =
    useState<RegisterNewsLetter>({
      email: "",
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setRegisterNewsLetter((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "You have successfully subscribed to our newsletter.",
      duration: 3000,
    });
    setRegisterNewsLetter({
      email: "",
    });
  };
  return (
    <form onSubmit={handleSubmit} className="flex h-fit pt-6">
      <input
        type="email"
        id="email"
        name="email"
        placeholder="example@email.com"
        className="rounded-full px-4 py-4 mr-3 w-full border"
        value={registerNewsLetter.email}
        onChange={(e) => handleChange(e)}
        required
      />
      <Button onClick={() => handleSubmit}>Subscribe</Button>
    </form>
  );
};

export default NewsLetter;
