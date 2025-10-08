"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xpwyjzdw", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        e.target.reset();
        setIsSent(true);
      } else {
        throw new Error("Fehler beim Senden");
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setIsSent(false);
        setError(false);
      }, 4000);
    }
  };

  return (
    <>
      <motion.div
        className="max-w-xl mx-auto bg-[#0f1e2e] p-8 rounded-2xl shadow-lg border border-gray-700 text-left space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Ihr Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Max Mustermann"
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:border-yakaziTurquoise"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Ihre E-Mail-Adresse
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="beispiel@firma.de"
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:border-yakaziTurquoise"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Ihre Nachricht
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows="5"
              placeholder="Ihre Anfrage ..."
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:border-yakaziTurquoise"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-yakaziTurquoise text-yakaziWhite font-semibold py-3 rounded-md hover:bg-yakaziWhite hover:text-yakaziBlue transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
          </motion.button>
        </form>

        {/* Erfolg oder Fehler */}
        <AnimatePresence>
          {isSent && (
            <motion.div
              className="mt-6 text-center text-green-400 font-medium bg-green-900/20 border border-green-500/40 p-3 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              ✅ Danke! Ihre Nachricht wurde erfolgreich gesendet.
            </motion.div>
          )}
          {error && (
            <motion.div
              className="mt-6 text-center text-red-400 font-medium bg-red-900/20 border border-red-500/40 p-3 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              ❌ Fehler beim Senden. Bitte versuchen Sie es später erneut.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Toast unten rechts */}
      <AnimatePresence>
        {isSent && (
          <motion.div
            className="fixed bottom-6 right-6 bg-green-700 text-white px-5 py-3 rounded-lg shadow-lg border border-green-500/60 text-sm"
            initial={{ opacity: 0, y: 50, boxShadow: "0 0 0px #1cb5b2" }}
            animate={{
              opacity: 1,
              y: 0,
              boxShadow: [
                "0 0 0px #1cb5b2",
                "0 0 15px #1cb5b2",
                "0 0 25px #1cb5b2",
                "0 0 0px #1cb5b2",
              ],
            }}
            exit={{ opacity: 0, y: 50 }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
              repeat: 1,
            }}
          >
            ✅ Nachricht erfolgreich gesendet
          </motion.div>
        )}

        {error && (
          <motion.div
            className="fixed bottom-6 right-6 bg-red-700 text-white px-5 py-3 rounded-lg shadow-lg border border-red-500/60 text-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
          >
            ❌ Fehler beim Senden
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
