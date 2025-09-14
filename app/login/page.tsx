"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.success) {
      router.push("/dashboard");
    } else {
      setMessage(data.error);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow w-80">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input className="w-full p-2 mb-3 border rounded" placeholder="Email" type="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className="w-full p-2 mb-3 border rounded" placeholder="Password" type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-xl">Login</button>
        {message && <p className="mt-3 text-sm text-red-600">{message}</p>}
      </form>
    </main>
  );
}
