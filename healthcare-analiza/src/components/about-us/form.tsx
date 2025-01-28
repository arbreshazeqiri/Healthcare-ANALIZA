"use client";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        location: "",
        phone: "",
        email: "",
        message: "",
      });
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 border rounded-lg shadow-md mb-10"
    >
      <input
        type="text"
        name="name"
        placeholder="Emri dhe mbiemri*"
        required
        onChange={handleChange}
        value={formData.name}
        className="w-full p-2 border mb-2"
      />
      <input
        type="text"
        name="location"
        placeholder="Vendbanimi"
        onChange={handleChange}
        value={formData.location}
        className="w-full p-2 border mb-2"
      />
      <input
        type="text"
        name="phone"
        placeholder="Numri i telefonit"
        onChange={handleChange}
        value={formData.phone}
        className="w-full p-2 border mb-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Email*"
        required
        onChange={handleChange}
        value={formData.email}
        className="w-full p-2 border mb-2"
      />
      <textarea
        name="message"
        placeholder="Mesazhi juaj*"
        required
        onChange={handleChange}
        value={formData.message}
        className="w-full p-2 border mb-2"
      />
      <button
        type="submit"
        className="w-full bg-primary text-white p-2 rounded-lg"
      >
        DËRGO
      </button>
      {status && <p className="mt-2 text-center">{status}</p>}
    </form>
  );
}
