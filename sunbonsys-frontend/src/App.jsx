import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Hero />
            <About />
            <Products />
            <Contact />
          </>
        }
      />

      <Route path="/login" element={<Login />} />

      {/* ✅ Protect Admin Page */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
