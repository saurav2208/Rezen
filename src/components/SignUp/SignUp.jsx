import React from "react";

const Signup = () => {
  return (
    <div className="bg-custom-white min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-custom-blue-dark mb-6 text-center">
          Sign Up
        </h1>
        <form className="space-y-6">
          <div>
            <label
              className="block text-gray-700 text-lg font-semibold mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-lg font-semibold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-lg font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-lg font-semibold mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-custom-blue text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-custom-blue-dark transition duration-300"
            >
              Sign Up
            </button>
          </div>
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-custom-blue font-semibold">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
