"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

function ContactForm() {
  const router = useRouter();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    async function sendEmail() {
      const res = await fetch("/api/sendgrid", {
        method: "POST",
        body: JSON.stringify(formState),
        headers: {
          "Content-Type": "application/json",
          "Origin": "*",
          mode: "cors",
          referrerPolicy: "strict-origin-when-cross-origin",
        },
      });

      const { status, message } = await res.json();
      if (status === "OK") {
        alert(message);
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        router.push("/");
      } else {
        alert(message);
      }
    }

    sendEmail();
  };

  return (
    <div className="flex flex-col gap-4 p-4 max-w-[700px] mx-auto">
      <Card className="flex flex-col gap-4 p-4">
        <h1 className="flex justify-center text-2xl font-semibold text-black">
          Contact Me
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col gap-4">
              <Label htmlFor="name">Name</Label>
              <Input
                label="Name"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleFormChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="email">Email</Label>
              <Input
                label="Email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleFormChange}
                placeholder="john_doe@gmail.com"
                required
              />
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="phone">Subject</Label>
              <Input
                label="Subject"
                name="subject"
                type="text"
                value={formState.subject}
                onChange={handleFormChange}
                placeholder="Subject"
                required
              />
            </div>
            <Label htmlFor="message">Message</Label>
            <div className="flex flex-col">
              <Textarea
                label="Message"
                name="message"
                value={formState.message}
                onChange={handleFormChange}
                placeholder="Your message here..."
                required
              />
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                className="w-36 rounded-lg bg-indigo-500 text-white text-lg hover:bg-indigo-400"
              >
                Send
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default ContactForm;
