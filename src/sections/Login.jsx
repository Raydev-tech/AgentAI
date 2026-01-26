import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // later → call your auth API here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-slate-950 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900/60 backdrop-blur p-8"
      >
        <h1 className="text-2xl font-semibold text-center text-white">
          Welcome back
        </h1>
        <p className="text-center text-slate-400 mt-1">
          Log in to continue building AI agents
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full h-11 rounded-lg bg-slate-800 border border-slate-700 px-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full h-11 rounded-lg bg-slate-800 border border-slate-700 px-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />

          <button
            type="submit"
            className="w-full h-11 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg text-white font-medium active:scale-95"
          >
            Login
          </button>
        </form>

        <div className="flex justify-between items-center mt-4 text-sm text-slate-400">
          <span>New here?</span>
          <Link to="/register" className="text-indigo-400 hover:underline">
            Create an account
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
