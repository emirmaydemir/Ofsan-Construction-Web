"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    return Object.values(formData).every((val) => val.trim() !== "");
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Lütfen tüm alanları doldurun.");
      return;
    }

    setLoading(true);
    emailjs
      .send(
        "service_cv8kylu", // EmailJS Service ID
        "template_hirof3h", // EmailJS Template ID
        formData,
        "R55RIeNCigh4plEM7" // EmailJS Public Key
      )
      .then(() => {
        toast.success("Mesajınız başarıyla gönderildi.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch(() => {
        toast.error("Mesaj gönderilirken bir hata oluştu.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form className="space-y-6 bg-white text-black p-8 rounded-lg" onSubmit={sendEmail}>
      <div className="space-y-2">
        <p className="text-base font-extrabold">Name</p>
        <Input name="name" type="text" required value={formData.name} onChange={handleChange} />
      </div>

      <div className="space-y-2">
        <p className="text-base font-extrabold">Email</p>
        <Input name="email" type="email" required value={formData.email} onChange={handleChange} />
      </div>

      <div className="space-y-2">
        <p className="text-base font-extrabold">Phone</p>
        <Input name="phone" type="text" required value={formData.phone} onChange={handleChange} />
      </div>

      <div className="space-y-2">
        <p className="text-base font-extrabold">Message</p>
        <textarea name="message" required value={formData.message} onChange={handleChange} className="w-full bg-neutral-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" />
      </div>

      <div className="flex justify-center">
        <button className="px-16 py-4 bg-primary text-white text-xl w-full" type="submit">
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
};
