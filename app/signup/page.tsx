"use client";
import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setMessage(data.success ? "Signup successful!" : data.error);
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow w-80">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <input className="w-full p-2 mb-3 border rounded" placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="w-full p-2 mb-3 border rounded" placeholder="Email" type="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className="w-full p-2 mb-3 border rounded" placeholder="Password" type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-xl">Signup</button>
        {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
      </form>
    </main>
  );
}
