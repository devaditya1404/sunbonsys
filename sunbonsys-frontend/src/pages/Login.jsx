import { useState } from "react";

export default function Login() {
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Change this password to your admin password
    const ADMIN_PASSWORD = "sunil12";

    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("admin_auth", "true");
      window.location.href = "/admin";
    } else {
      alert("Incorrect Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg border space-y-4 w-80"
      >
        <h2 className="text-xl font-bold text-center text-gray-900">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter Admin Password"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
