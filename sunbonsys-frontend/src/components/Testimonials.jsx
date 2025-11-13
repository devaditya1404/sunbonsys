export default function Testimonials() {
    const testimonials = [
      {
        name: "Prof. Mehta",
        role: "Principal, Sunrise College of Engineering",
        feedback:
          "SunbonSys’s ERP and student management system completely streamlined our academic and administrative work. The automation saved us hours every week.",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        name: "Dr. Sneha Patil",
        role: "Director, Bright Future Institute",
        feedback:
          "Our staff and students love how simple and efficient the software is. Reports, attendance, and performance tracking are now effortless.",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      {
        name: "Mr. Rahul Joshi",
        role: "Administrator, Modern Tech College",
        feedback:
          "The team at SunbonSys provided excellent support during integration. Their system is powerful yet easy to use — a game changer for institutions.",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
      },
    ];
  
    return (
      <section id="testimonials" className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Hear from colleges and institutions who trusted SunbonSys to simplify their management.
          </p>
  
          <div className="grid gap-10 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full border-4 border-blue-500 object-cover"
                  />
                </div>
                <p className="text-gray-700 italic mb-6">“{t.feedback}”</p>
                <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
                <p className="text-sm text-blue-600">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Optional floating soft blobs for consistency */}
        <div className="absolute -top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
  
        <style>{`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob { animation: blob 7s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
        `}</style>
      </section>
    );
  }
  