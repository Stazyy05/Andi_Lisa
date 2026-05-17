import gambarC1 from '../img/C1.png';
import gambarC2 from '../img/C2.png';
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle } from "lucide-react";
import { toast } from "sonner";

/**
 * Design Philosophy: Modern Romantic Minimalism
 * - Dark background (#0a0a0a) with pink accents (#ff6b9d)
 * - Cute animated character that reacts to user interactions
 * - Interactive Yes/No buttons with playful dynamics
 * - Smooth animations and transitions throughout
 */

export default function Home() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [noButtonTransform, setNoButtonTransform] = useState("translate(0, 0)");
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [characterState, setCharacterState] = useState<"shy" | "excited" | "thinking">("shy");

  // Handle No button escape logic
  const handleMouseMove = (e: MouseEvent) => {
    if (!noButtonRef.current || showSuccess) return;

    const rect = noButtonRef.current.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;

    const distance = Math.sqrt(
      Math.pow(e.clientX - buttonCenterX, 2) + Math.pow(e.clientY - buttonCenterY, 2)
    );

    // If cursor is within 80px of button, move it away
    if (distance < 80) {
      const angle = Math.atan2(buttonCenterY - e.clientY, buttonCenterX - e.clientX);
      const randomOffset = (Math.random() - 0.5) * 40;
      const distance_move = 120 + randomOffset;
      const newX = Math.cos(angle) * distance_move;
      const newY = Math.sin(angle) * distance_move;

      setNoButtonTransform(`translate(${newX}px, ${newY}px)`);
      setCharacterState("thinking");
    } else {
      // Return to original position when cursor is far
      setNoButtonTransform("translate(0, 0)");
      if (characterState === "thinking") {
        setCharacterState("shy");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [showSuccess, characterState]);

  const handleYesClick = () => {
    setShowSuccess(true);
    setCharacterState("excited");
    toast.success("Yeah, akhirnya princess ini ingin menjadi pacarku! 💕", {
      duration: 5000,
      style: {
        background: "#ff6b9d",
        color: "#ffffff",
        border: "none",
        borderRadius: "8px",
      },
    });

    // Trigger confetti effect
    triggerConfetti();
  };

  const handleWhatsAppClick = () => {
    // Replace with actual phone number - format: 62XXXXXXXXXX (without +)
    const phoneNumber = "62"; // User should replace this with actual number
    const message = "Iya, aku ingin menjadi pacarmu dan selalu bersamamu 💕";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const triggerConfetti = () => {
    // Create confetti particles
    const confettiCount = 40;
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti-particle";
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.top = "-10px";
      confetti.style.backgroundColor = Math.random() > 0.5 ? "#ff6b9d" : "#ffffff";
      confetti.style.width = Math.random() * 8 + 4 + "px";
      confetti.style.height = Math.random() * 8 + 4 + "px";
      confetti.style.borderRadius = "50%";
      confetti.style.position = "fixed";
      confetti.style.pointerEvents = "none";
      confetti.style.zIndex = "9999";
      confetti.style.animation = `confetti-fall ${2 + Math.random() * 1}s linear forwards`;

      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 3000);
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663668340031/58ta7xaueb3vUstYnLea8L/romantic-background-FmVWCinP6cmp8DLx6V2CL2.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl w-full">
        {!showSuccess ? (
          <div className="space-y-8 text-center">
            {/* Character Animation */}
<div className="flex justify-center mb-6 h-56">
  <img
    src={
      characterState === "shy"
        ? gambarC1 // <-- Menggunakan file lokal C1 hasil import
        : characterState === "excited"
          ? gambarC2
          : "https://d2xsxph8kpxj0f.cloudfront.net/310519663668340031/58ta7xaueb3vUstYnLea8L/cute-character-3-fcL8y2hGLGeyCv8EAn4aE3.webp"
    }
    alt="Andi Lisa"
    className="h-full object-contain drop-shadow-2xl"
    style={{
      animation: characterState === "excited" ? "character-bounce 0.6s infinite" : "character-bounce 2s infinite",
      filter: "drop-shadow(0 0 20px rgba(255, 107, 157, 0.3))",
    }}
  />
</div>

            {/* Main Question */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Will You Be My
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
                  Girlfriend?
                </span>
              </h1>
              <p className="text-base md:text-lg text-gray-300 font-light">
                Andi Lisa, I want to ask you something special...
              </p>
            </div>

            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 relative h-24 sm:h-auto">
              {/* Yes Button */}
              <Button
                onClick={handleYesClick}
                className="px-10 md:px-12 py-5 md:py-6 text-base md:text-lg font-semibold bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-full shadow-lg hover:shadow-pink-500/50 transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                <Heart className="w-5 h-5 mr-2" />
                Yes
              </Button>

              {/* No Button - Escaping */}
              <Button
                ref={noButtonRef}
                className="px-10 md:px-12 py-5 md:py-6 text-base md:text-lg font-semibold bg-gray-700 hover:bg-gray-600 text-white rounded-full shadow-lg transition-all duration-150"
                style={{
                  transform: noButtonTransform,
                  cursor: "not-allowed",
                  opacity: 0.8,
                }}
                disabled
              >
                No
              </Button>
            </div>

            {/* Hint Text */}
            <p className="text-sm text-gray-400 mt-8 animate-pulse">
              Try to click the "No" button... 😉
            </p>
          </div>
        ) : (
          /* Success State */
          <div className="space-y-8 text-center animate-in fade-in duration-500">
            {/* Success Character */}
            <div className="flex justify-center mb-6 h-56">
  <img
    src={gambarC2} // <-- Menggunakan variabel hasil import gambar lokal
    alt="Happy Andi Lisa"
    className="h-full object-contain drop-shadow-2xl"
    style={{
      animation: "character-bounce 0.6s infinite",
      filter: "drop-shadow(0 0 30px rgba(255, 107, 157, 0.5))",
    }}
  />
</div>

            {/* Success Message */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                Yeah! 💕
              </h2>
              <p className="text-xl md:text-2xl text-pink-400 font-semibold">
                Akhirnya princess ini ingin menjadi pacarku!
              </p>
              <p className="text-base md:text-lg text-gray-300">
                Terima kasih telah membuat hari ini menjadi hari yang paling bahagia.
              </p>
            </div>

            {/* WhatsApp Button */}
            <div className="mt-12">
              <Button
                onClick={handleWhatsAppClick}
                className="px-10 md:px-12 py-5 md:py-6 text-base md:text-lg font-semibold bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-green-500/50 transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Send Message on WhatsApp
              </Button>
            </div>

            {/* Note */}
            <p className="text-sm text-gray-400 mt-8">
              ✨ Saatnya kita mulai petualangan baru bersama ✨
            </p>
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes confetti-fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes character-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .confetti-particle {
          animation: confetti-fall 2.5s linear forwards;
        }
      `}</style>
    </div>
  );
}
