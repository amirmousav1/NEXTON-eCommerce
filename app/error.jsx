"use client";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <a className="bg-primary text-white py-2 px-6 rounded-lg shadow-md hover:bg-primary-dark transition-all">
            Back to Homepage
          </a>
        </Link>
      </div>
      <div className="mt-10">
        <img
          src="/error-illustration.svg"
          alt="Error Illustration"
          className="w-72 md:w-96"
        />
      </div>
    </div>
  );
}
