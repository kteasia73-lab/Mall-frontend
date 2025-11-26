import React, { useState } from "react";

const API_BASE = "https://mall-backend-18.onrender.com";

export default function AdminLogin() {
  const [email, setEmail] = useState("admin@ktkshop.com");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(`${API_BASE}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus(data.message || "Login failed. Please check credentials.");
      } else {
        setStatus("✅ Login successful!");
      }
    } catch (err) {
      setStatus("Network error. Check backend URL.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white border rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-semibold mb-2 text-center">
          Maison Mall Admin
        </h1>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Sign in to manage your online shopping mall.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full border rounded-lg px-3 py-2 text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-lg text-sm font-medium disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {status && (
          <div className="mt-4 text-sm text-center text-gray-700">{status}</div>
        )}
      </div>
    </div>
  );
}
