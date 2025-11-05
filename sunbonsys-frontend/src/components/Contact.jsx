import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    product: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      alert("Please fill in First name, Last name, Email and Message.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5050/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || "Server error");
      }

      // Success
      alert("Thank you for your message! We will get back to you soon.");
      // Clear form
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        product: "",
        message: "",
      });
    } catch (err) {
      console.error("Submit error:", err);
      alert("Failed to send message. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get in touch with our experts to discuss how our software solutions can streamline your operations and drive growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-800 mb-2">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-800 mb-2">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-800 mb-2">Company</label>
                <input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-medium text-gray-800 mb-2">Product Interest</label>
                <select
                  id="product"
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition-all"
                >
                  <option value="">Select a product</option>
                  <option value="erp">ERP System</option>
                  <option value="student">Student Management System</option>
                  <option value="inventory">Inventory Management System</option>
                  <option value="custom">Custom Made Solution</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2M7 8H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2m10-13V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-700">Jalgaon<br/>Maharashtra,India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m-6 4h.01M9 7v10m6-10v10M3 15h.01M3 19h.01M21 7v.01M21 11v.01M21 15v.01" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-700">+91 9325150002</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V8" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-700">info@sunbonsys.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
