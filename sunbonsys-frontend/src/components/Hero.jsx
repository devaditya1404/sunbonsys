import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [visits, setVisits] = useState(0);
  const hasVisited = useRef(false); // ✅ Prevents double increment in React dev mode

  useEffect(() => {
    if (hasVisited.current) return;
    hasVisited.current = true;

    // ✅ Increment visit count only once
    fetch("http://localhost:5050/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page: "home" }),
    });

    // ✅ Fetch total visit count
    fetch("http://localhost:5050/visits")
      .then((res) => res.json())
      .then((data) => {
        const homePage = data.find((v) => v.page === "home");
        if (homePage) setVisits(homePage.count);
      })
      .catch((err) => console.error("Error fetching visits:", err));
  }, []);

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 lg:py-32 overflow-hidden"
    >
      {/* 🟣 Animated gradient blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 mb-12 lg:mb-0">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-6">
              <i className="h-4 w-4 mr-2">✨</i>
              Leading IT Innovation
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Innovative IT Solutions for{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Modern Business
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Transform your operations with our cutting-edge software solutions.
              From ERP systems to management tools, we deliver technology that
              drives growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Products
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <img
                src="images/office_img.png"
                alt="Modern office with technology and teamwork"
                className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 👁️ Visit counter (moved to top-right corner) */}
<div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg rounded-full px-5 py-2 flex items-center gap-2 text-gray-700 text-sm z-20">
  <span>👁️</span>
  <span className="font-medium">Website Visits:</span>
  <span className="font-bold text-blue-600">{visits}</span>
</div>


      {/* 🔵 Blob animation styles */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}