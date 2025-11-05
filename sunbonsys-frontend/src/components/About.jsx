import { Code, ShieldCheck, Headphones } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-6">
            <i className="mr-2">🏆</i> Excellence in Technology
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Leading IT Innovation Since Day One
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            At <span className="font-semibold text-blue-600">Sunbonsys</span>, we specialize in developing robust software solutions that streamline operations and drive digital transformation across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">

          {/* Card 1 */}
          <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 
          hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 transform hover:scale-105 border border-blue-100">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 
            group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Code className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Development</h3>
            <p className="text-gray-700 leading-relaxed">
              Our skilled team creates scalable, secure & user-friendly software designed specifically for your business needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 
          hover:from-green-100 hover:to-emerald-100 transition-all duration-300 transform hover:scale-105 border border-green-100">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 
            group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <ShieldCheck className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliable & Secure</h3>
            <p className="text-gray-700 leading-relaxed">
              Built with industry best practices — ensuring full data security and system reliability.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 
          hover:from-purple-100 hover:to-pink-100 transition-all duration-300 transform hover:scale-105 border border-purple-100">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 
            group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Headphones className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
            <p className="text-gray-700 leading-relaxed">
              Round-the-clock expert support to keep your operations smooth & uninterrupted.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
