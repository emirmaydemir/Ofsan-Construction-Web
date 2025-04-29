import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import React from "react";

export const ContactForm = () => {
  return (
    <form className="space-y-6 bg-white text-black p-8 rounded-lg">
      <div className="space-y-2">
        <p className="text-base font-extrabold">Name</p>
        <Input name="name" type="text" required />
      </div>

      <div className="space-y-2">
        <p className="text-base font-extrabold">Email</p>
        <Input name="email" type="email" required />
      </div>

      <div className="space-y-2">
        <p className="text-base font-extrabold">Phone</p>
        <Input name="phone" type="text" required />
      </div>

      <div className="space-y-2">
        <p className="text-base font-extrabold">Message</p>
        <textarea name="message" className="w-full bg-neutral-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" required />
      </div>

      <div className="flex justify-center">
        <Button>Send</Button>
      </div>
    </form>
  );
};
