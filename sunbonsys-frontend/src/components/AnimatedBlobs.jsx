// src/components/AnimatedBlobs.jsx (VISIBLE, copy/paste)
export default function AnimatedBlobs() {
    return (
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Blob 1 */}
        <div className="absolute -left-20 -top-16 w-[520px] h-[520px] rounded-full blur-[100px] opacity-40" style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)" }} />
        {/* Blob 2 */}
        <div className="absolute -right-20 top-[18%] w-[520px] h-[520px] rounded-full blur-[100px] opacity-40 animation-delay-2000" style={{ background: "linear-gradient(135deg,#0ea5e9,#a78bfa)" }} />
        {/* Blob 3 */}
        <div className="absolute left-[20%] -bottom-16 w-[520px] h-[520px] rounded-full blur-[100px] opacity-36 animation-delay-4000" style={{ background: "linear-gradient(135deg,#fb7185,#f472b6)" }} />
  
        <style>{`
          @keyframes blob {
            0% { transform: translate(0,0) scale(1); }
            33% { transform: translate(40px,-60px) scale(1.06); }
            66% { transform: translate(-30px,30px) scale(0.98); }
            100% { transform: translate(0,0) scale(1); }
          }
          .animate-blob {
            animation: blob 14s infinite linear;
          }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
          /* ensure our divs animate */
          .opacity-40 { opacity: 0.40; }
          .opacity-36 { opacity: 0.36; }
          .blur-[100px] { filter: blur(100px); }
          .w-[520px] { width: 520px; }
          .h-[520px] { height: 520px; }
          /* apply animation class */
          .absolute > div, .absolute { /* no-op to keep classes recognized */ }
        `}</style>
      </div>
    );
  }
  