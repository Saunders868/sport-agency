"use client";

import { useToast } from "@/hooks/use-toast";
import Button from "./button";
import { useState } from "react";
import cx from "clsx";

interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Form: React.FC<FormData> = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us! We will get back to you soon.",
      duration: 6000,
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <form
      className="grid grid-cols-2 gap-3 w-full sm:w-full "
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="firstName"
        className="text-black col-span-2 flex flex-col"
      >
        First Name
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="rounded-full px-4 py-4 mt-2 mb-3 border"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="lastName" className="text-black col-span-2 flex flex-col">
        Last Name
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="rounded-full px-4 py-4 mt-2 mb-3 border"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="email" className="text-black col-span-2 flex flex-col">
        Email
        <input
          type="email"
          name="email"
          id="email"
          className="rounded-full px-4 py-4 mt-2 mb-3 border"
          placeholder="email@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="phone" className="text-black col-span-2 flex flex-col">
        Phone Number
        <input
          type="tel"
          name="phone"
          id="phone"
          className="rounded-full px-4 py-4 mt-2 mb-3 border"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="message" className="text-black col-span-2 flex flex-col">
        Message
        <textarea
          name="message"
          id="message"
          className="rounded-full px-4 py-4 mt-2 mb-3 border"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>
      <Button
        onClick={() => handleSubmit}
        className={cx("uppercase font-light col-span-2 py-4 mt-5")}
      >
        Send Message
      </Button>
      {/* <Button onClick={() => handleSubmit} className={cx("uppercase font-light col-span-2 py-4 mt-5", isLoading === true && "cursor-not-allowed")}>
            {isLoading ? "Sending" : "Send Message"}
        </Button> */}
    </form>
  );
};

export default Form;
