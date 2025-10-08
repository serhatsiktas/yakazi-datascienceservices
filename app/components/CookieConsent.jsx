"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("yakazi_cookie_consent");
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000); // Zeigt Banner nach 1 Sekunde
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("yakazi_cookie_consent", "accepted");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          className="fixed bottom-6 right-6 left-6 md:left-auto md:w-[380px] bg-yakaziBlueDark text-yakaziWhite border border-gray-700 shadow-lg rounded-xl p-5 z-50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm text-gray-300 mb-4 leading-relaxed">
            Wir verwenden Cookies, um unsere Website und unseren Service zu
            optimieren. Mit Ihrer Zustimmung helfen Sie uns, Ihr Erlebnis zu
            verbessern. Weitere Informationen finden Sie in unserer{" "}
            <a
              href="/datenschutz"
              className="text-yakaziTurquoise underline hover:text-[#36e2cc]"
            >
              Datenschutzerklärung
            </a>
            .
          </p>

          <div className="flex justify-end">
            <button
              onClick={handleAccept}
              className="bg-yakaziTurquoise text-yakaziBlue font-medium px-4 py-2 rounded-md hover:shadow-yakaziGlow transition"
            >
              OK
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
