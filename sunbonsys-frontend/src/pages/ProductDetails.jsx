import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { products } from "../data/products";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const intervalRef = useRef(null);
  const imgRef = useRef(null);
  const zoomRef = useRef(null);

  // ✅ Find product
  let product = products.find((p) => p.id === id);
  if (!product) {
    const numeric = Number(id);
    if (!Number.isNaN(numeric) && products[numeric]) {
      product = products[numeric];
    }
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Product not found</h2>
          <p className="text-gray-600">
            The product you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            Back Home
          </Link>
        </div>
      </div>
    );
  }

  const images = product.images || [product.image];

  // ✅ Auto-slide
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [images.length, isPaused]);

  // ✅ Mouse Move for Magnifier
  const handleMouseMove = (e) => {
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setZoomPos({ x, y });

    // Update background position for zoom window
    if (zoomRef.current) {
      zoomRef.current.style.backgroundPosition = `${x}% ${y}%`;
    }
  };

  // ✅ Show / Hide zoom
  const handleMouseEnter = () => {
    setIsZooming(true);
    if (zoomRef.current) {
      zoomRef.current.style.backgroundImage = `url(${images[currentImage]})`;
    }
  };

  const handleMouseLeave = () => {
    setIsZooming(false);
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* 🔙 Back Button */}
        <button
          onClick={() => navigate("/#products")}
          className="mb-8 flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-purple-600 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Products
        </button>

        {/* 🖼️ Top Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* ✅ Main Image with Magnifier */}
          <div className="relative flex flex-col items-center">
            <div
              className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white p-4 max-w-3xl w-full"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <img
                ref={imgRef}
                src={images[currentImage]}
                alt={`${product.title} - ${currentImage + 1}`}
                className="w-full h-[550px] object-contain select-none sm:h-[600px] md:h-[650px]"
              />

              {/* ✅ Magnifier Lens */}
              {isZooming && (
                <div
                  className="absolute border-2 border-blue-400 rounded-md opacity-50 pointer-events-none"
                  style={{
                    width: "120px",
                    height: "120px",
                    left: `${zoomPos.x}%`,
                    top: `${zoomPos.y}%`,
                    transform: "translate(-60px, -60px)",
                    backgroundColor: "rgba(180, 200, 255, 0.2)",
                  }}
                ></div>
              )}
            </div>

            {/* ✅ Zoomed View (Updated & Bigger) */}
            {isZooming && (
              <div
                ref={zoomRef}
                className="hidden lg:block absolute -right-[125%] top-0 w-[600px] h-[500px] border border-gray-300 rounded-2xl shadow-2xl bg-no-repeat bg-white overflow-hidden"
                style={{
                  backgroundImage: `url(${images[currentImage]})`,
                  backgroundSize: "250%", // increase zoom strength
                  backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                  transition: "background-position 0.1s ease-out",
                }}
              ></div>
            )}

            {/* 🔽 Thumbnails */}
            <div className="flex justify-center gap-3 mt-4">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setCurrentImage(i)}
                  className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 transition-all duration-300 ${
                    currentImage === i
                      ? "border-blue-500 scale-105"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                  alt={`Thumbnail ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* 📘 Product Details */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>
            <p className="text-lg text-gray-700 mb-6">{product.description}</p>

            {/* Features */}
            {product.features && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Key Features
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {product.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            {product.benefits && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Benefits
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {product.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.techStackNote && (
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Technology
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.techStackNote}
                </p>
              </div>
            )}

            <Link
              to="/#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow hover:scale-105 transition-transform"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Products
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((r) => {
                const Icon = r.icon;
                return (
                  <Link
                    key={r.id}
                    to={`/product/${r.id}`}
                    className="group bg-white p-6 rounded-2xl shadow border border-gray-200 hover:shadow-xl transition-all"
                  >
                    <div
                      className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br ${r.color} flex items-center justify-center text-white`}
                    >
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 text-center mb-1">
                      {r.title}
                    </h3>
                    <p className="text-gray-500 text-sm text-center">
                      {r.short.slice(0, 60)}...
                    </p>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
