import { useEffect, useState } from "react";

export default function Admin() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [filterProduct, setFilterProduct] = useState("");

  useEffect(() => {
    fetch("http://localhost:5050/Contacts")
      .then((res) => res.json())
      .then((data) => setLeads(data))
      .catch((err) => console.error("Error fetching leads:", err));
  }, []);

  const filteredLeads = leads.filter((lead) => {
    return (
      (lead.firstName + " " + lead.lastName)
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (filterProduct ? lead.product === filterProduct : true)
    );
  });

  return (
    
    <div className="min-h-screen bg-gray-50 p-8">

      {/* ✅ Logout Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => {
            localStorage.removeItem("admin_auth");
            window.location.href = "/login";
          }}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
        >
          Logout
        </button>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

      <div className="flex justify-end mb-6">
  <a
    href="http://localhost:5050/export"
    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow"
  >
    📥 Download Excel
  </a>
</div>


      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by name..."
          className="px-4 py-3 w-full md:w-1/3 border border-gray-300 rounded-lg focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-4 py-3 w-full md:w-1/3 border border-gray-300 rounded-lg focus:ring-blue-500"
          value={filterProduct}
          onChange={(e) => setFilterProduct(e.target.value)}
        >
          <option value="">All Products</option>
          <option value="erp">ERP System</option>
          <option value="student">Student Management System</option>
          <option value="inventory">Inventory Management System</option>
          <option value="custom">Custom Made Solution</option>
        </select>
      </div>

      {/* Leads Table */}
      <div className="overflow-auto rounded-xl shadow-lg border border-gray-200">
        <table className="w-full divide-y divide-gray-200 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Message</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {filteredLeads.map((lead) => (
              <tr key={lead.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  {lead.firstName} {lead.lastName}
                </td>
                <td className="px-4 py-3 text-blue-700">{lead.email}</td>
                <td className="px-4 py-3">{lead.company || "-"}</td>
                <td className="px-4 py-3 capitalize">{lead.product || "-"}</td>
                <td className="px-4 py-3 text-gray-600 max-w-xs truncate">{lead.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
