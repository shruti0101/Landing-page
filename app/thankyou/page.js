"use client";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-green-600 mb-4">
          🎉 Thank You!
        </h1>
        <p className="text-gray-700 mb-6">
          Your request has been submitted successfully.  
          Our team will contact you shortly.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
