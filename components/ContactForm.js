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
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target;
    setFormState({
      name: data.name,
      email: data.email,
      message: data.message,
    });

    // TODO: Send data to server

    // fetch("/api/contact", {
    //   method: "POST",
    //   body: JSON.stringify(formState),
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    // });

    data.reset();
  };

  useEffect(() => {
    if (formState.name && formState.email && formState.message) {
      console.log("Form State: ", formState);
      router.push("/contact/success");
    }
  }, [formState, router]);

  return (
    <div className="flex flex-col gap-4 p-4 max-w-[700px] mx-auto">
      <Card className="flex flex-col gap-4 p-4">
        <h1 className="flex justify-center text-2xl font-semibold text-black">
          Contact Me
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col gap-4">
              <Label htmlFor="name">What is your name?</Label>
              <Input
                label="Name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="email">What is your email?</Label>
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="john_doe@gmail.com"
                required
              />
            </div>
            <Label htmlFor="message">What is your message?</Label>
            <div className="flex flex-col">
              <Textarea
                label="Message"
                placeholder="Your message here..."
                required
              />
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                className="w-36 rounded-lg bg-indigo-500 text-gray-200 text-lg hover:bg-indigo-400"
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
