import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Testimonials from "./components/Testimonials";
import AnimatedBlobs from "./components/AnimatedBlobs";
import ScrollHandler from "./components/ScrollHandler"; // ✅ add this import
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <AnimatedBlobs />
            <ScrollHandler /> {/* ✅ Step 3: add this line here */}
            <Header />
            <Hero />
            <About />
            <Products />
            <Testimonials />
            <Contact />
          </>
        }
      />
       {/* ✅ Product Details Dynamic Route */}
      <Route path="/product/:id" element={<ProductDetails />} />

      <Route path="/login" element={<Login />} />

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
