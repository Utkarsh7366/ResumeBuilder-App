import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl px-10 py-12 w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-2">Join Us</h1>
        <p className="text-center text-gray-500 mb-8">Create your free account</p>
        <form className="space-y-5">
          <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"/>
          <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"/>
          <input type="password" placeholder="Password" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"/>
          <Link to="/create-resume">
            <button type="button" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition transform">
              Sign Up
            </button>
          </Link>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account? <a href="#" className="text-indigo-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}