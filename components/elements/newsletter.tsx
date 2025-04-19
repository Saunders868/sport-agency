"use client";

import { useState } from "react";
import Button from "./button";
import { useToast } from "@/hooks/use-toast";
import { cx } from "class-variance-authority";

interface RegisterNewsLetter {
  email?: string;
}

const NewsLetter = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: registerNewsLetter.email,
      }),
    });
    setIsLoading(false);

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
      <Button
        onClick={() => handleSubmit}
        className={cx("text-sm", isLoading === true && "cursor-not-allowed")}
      >
        {isLoading ? "Subcribing" : "Subcribe"}
      </Button>
    </form>
  );
};

export default NewsLetter;
