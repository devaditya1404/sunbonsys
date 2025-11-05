export default function Hero() {
    return (
      <section id="home" className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 lg:py-32 overflow-hidden">
        {/* Animated Blobs */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-200"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-400"></div>
  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
  
            {/* Text Content */}
            <div className="lg:col-span-7 mb-12 lg:mb-0">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-6">
                🚀 Leading IT Innovation
              </div>
  
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Innovative IT Solutions for{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Modern Business
                </span>
              </h1>
  
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Transform your operations with our cutting-edge software solutions. 
                From ERP systems to specialized management tools, we deliver technology 
                that drives growth and innovation.
              </p>
  
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#products" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition">
                  Explore Products →
                </a>
  
                <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition">
                  Get Started →
                </a>
              </div>
            </div>
  
            {/* Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://cdn.ailandingpage.ai/landingpage_io/7360dcfb-cd09-4147-a5e1-645a5f5ba5fe/7360dcfb-cd09-4147-a5e1-645a5f5ba5fe/auto-img-1/b4df50f3b0_0.png"
                  alt="Modern office teamwork"
                  className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition duration-500"
                />
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  