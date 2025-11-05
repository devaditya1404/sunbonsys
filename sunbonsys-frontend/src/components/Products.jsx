import { Boxes, GraduationCap, PackageSearch, Sparkles } from "lucide-react";

export default function Products() {
  const products = [
    {
      title: "ERP System",
      description: "A complete enterprise-level management solution to streamline business operations.",
      icon: Boxes,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Student Management System",
      description: "Manage admissions, attendance, fees, timetables and reports effortlessly.",
      icon: GraduationCap,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Inventory Management System",
      description: "Monitor stock levels, automate restocking, and gain live inventory insights.",
      icon: PackageSearch,
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Custom Made Solutions",
      description: "We build custom-made software tailored precisely to your business needs.",
      icon: Sparkles,
      color: "from-pink-500 to-red-600",
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-gray-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We provide powerful, scalable, and user-focused software built for real business challenges.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <div
                key={i}
                className="group p-8 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {product.title}
                </h3>

                <p className="text-gray-600 text-center leading-relaxed">{product.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
