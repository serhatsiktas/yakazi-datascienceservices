"use client";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "./components/ContactForm";

// Animation
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  useEffect(() => {
    const input = document.getElementById("yakazi-input");
    const sendBtn = document.getElementById("yakazi-send");
    const messagesDiv = document.getElementById("yakazi-messages");

    if (!input || !sendBtn || !messagesDiv) return;

    // ENTER = senden, SHIFT+ENTER = Zeilenumbruch
    const onKey = (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendBtn.click();
      }
    };
    input.addEventListener("keydown", onKey);

    // Markdown (leicht)
    const md = (t) =>
      t.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
       .replace(/\*(.*?)\*/g, "<i>$1</i>")
       .replace(/\n\n/g, "<br><br>");

    // Verlauf laden
    const load = () => {
      const saved = JSON.parse(localStorage.getItem("yakaziChat") || "[]");
      const ts = localStorage.getItem("yakaziChatTimestamp");
      if (ts && Date.now() - Number(ts) > 86400000) {
        localStorage.removeItem("yakaziChat");
        localStorage.removeItem("yakaziChatTimestamp");
        return [];
      }
      messagesDiv.innerHTML = saved.map(m =>
        `<div class="${m.role === "YAKAZI-KI" ? "yakazi-reply" : "yakazi-user"}"><b>${m.role}:</b> ${md(m.text)}</div>`
      ).join("");
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
      return saved;
    };
    const save = (h) => {
      localStorage.setItem("yakaziChat", JSON.stringify(h));
      localStorage.setItem("yakaziChatTimestamp", Date.now());
    };

    let history = load();

    // Begrüßung
    if (history.length === 0) {
      const welcome = "Willkommen beim **YAKAZI KI-Assistenten**!<br>Unsere KI-Tools unterstützen Sie gerne bei Aufgaben und Fragen rund um *KI, Daten & Prozesse.*";
      messagesDiv.innerHTML += `<div class="yakazi-reply"><b>YAKAZI-KI:</b> ${md(welcome)}</div>`;
      history.push({ role: "YAKAZI-KI", text: welcome });
      save(history);
    }

    // Senden
    const send = async () => {
      const text = input.value.trim();
      if (!text) return;

      messagesDiv.innerHTML += `<div class="yakazi-user"><b>Sie:</b> ${text}</div>`;
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
      history.push({ role: "Sie", text });
      input.value = "";
      save(history);

      // Loader + Glow
      const loader = document.createElement("div");
      loader.className = "yakazi-reply";
      loader.innerHTML = "<b>YAKAZI-KI:</b> <i>denkt...</i>";
      messagesDiv.appendChild(loader);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
      input.classList.add("thinking");

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text }),
        });
        const data = await res.json();
        loader.remove();

        messagesDiv.innerHTML += `<div class="yakazi-reply"><b>YAKAZI-KI:</b> ${md(data.reply || "…")}</div>`;
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
        history.push({ role: "YAKAZI-KI", text: data.reply || "" });
        save(history);
      } catch {
        loader.remove();
        messagesDiv.innerHTML += `<div class="yakazi-reply"><b>System:</b> Verbindungsfehler. Bitte später erneut versuchen.</div>`;
      } finally {
        setTimeout(() => input.classList.remove("thinking"), 400);
      }
    };

    sendBtn.addEventListener("click", send);

    // Verlauf löschen
    const clearBtn = document.getElementById("yakazi-clear");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        localStorage.removeItem("yakaziChat");
        localStorage.removeItem("yakaziChatTimestamp");
        messagesDiv.innerHTML = "";
        const welcome = "Willkommen beim **YAKAZI KI-Assistenten**!<br>Ich unterstütze Sie gerne bei Aufgaben rund um *KI, Daten & Prozesse.*";
        messagesDiv.innerHTML += `<div class="yakazi-reply"><b>YAKAZI-KI:</b> ${md(welcome)}</div>`;
      });
    }

    // Cleanup
    return () => {
      input.removeEventListener("keydown", onKey);
      sendBtn.removeEventListener("click", send);
      clearBtn?.replaceWith(clearBtn.cloneNode(true)); // Eventhandler sicher entfernen
    };
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="w-full flex justify-between items-center px-6 py-4 bg-yakaziBlueDark fixed top-0 left-0 z-50">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="YAKAZI Logo" width={160} height={60} priority />
        </div>
        <nav className="hidden md:flex space-x-6 text-sm uppercase tracking-wide">
          <a href="#leistungen" className="hover:text-yakaziTurquoise transition-colors">Leistungen</a>
          <a href="#ueberuns" className="hover:text-yakaziTurquoise transition-colors">Über uns</a>
          <a href="#kontakt" className="hover:text-yakaziTurquoise transition-colors">Kontakt</a>
          <a href="#yakazi-assistent" className="hover:text-yakaziTurquoise transition-colors">YAKAZI KI-Assistent</a>
        </nav>
      </header>

      {/* MAIN */}
      <motion.main className="bg-yakaziBlueDark text-yakaziWhite pt-24" initial="hidden" animate="visible" variants={sectionVariants}>

        {/* HERO */}
        <motion.section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4" variants={sectionVariants}>
          <h1 className="text-5xl font-bold mb-6">
            Willkommen bei <span className="text-yakaziTurquoise">YAKAZI</span>            
          </h1>
          <h2 className="text-3xl font-semibold mb-8">| Ihr Erfolg ist unsere Mission |</h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            Data Science Services für Handwerk, Industrie und Kommunen. Unsere Mission ist Ihren Wettbewerbsvorteil mit künstlicher Intelligenz auszubauen – von der Beratung, Analyse und Implementierung bis zur Schulung ihrer Teams.
          </p>
        </motion.section>

        {/* LEISTUNGEN */}
        <motion.section id="leistungen" className="min-h-screen flex flex-col justify-center text-center mx-auto w-11/12 md:w-3/4" variants={sectionVariants}>
          <h2 className="text-3xl font-semibold text-yakaziTurquoise mb-8">Leistungen</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Maßgeschneiderte Beratung & Case-Study, strukturierte Analyse & Forecast zum Projekt, Service bei Förderanträgen, Begleitung der Umsetzung im Unternehmensprozess, nachhaltige KI-Schulung Ihrer Teams – praxisnah, verständlich, messbar.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-8 w-11/12 mx-auto">
            <div className="bg-[#0f1e2e] p-6 rounded-xl shadow-md border border-gray-700 hover:border-yakaziTurquoise transition">
              <h3 className="text-xl font-semibold mb-3 text-yakaziTurquoise">KI-Schulungen</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                YAKAZI | KI-Akademie - Vorort & Online Schulung Ihrer Teams und KI-Officers.
              </p>
            </div>
            <div className="bg-[#0f1e2e] p-6 rounded-xl shadow-md border border-gray-700 hover:border-yakaziTurquoise transition">
              <h3 className="text-xl font-semibold mb-3 text-yakaziTurquoise">Automatisierung & Digitalisierung</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Produktentwicklung, Einkauf & Vertrieb durch datengesteuerte Workflows für Routineaufgaben mit KI-Bots.
              </p>
            </div>
            <div className="bg-[#0f1e2e] p-6 rounded-xl shadow-md border border-gray-700 hover:border-yakaziTurquoise transition">
              <h3 className="text-xl font-semibold mb-3 text-yakaziTurquoise">Controlling mit KI-Dashboards</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Datenerfassung & Visualisierung,  OnePager für Management,  Entscheidungsgrundlage in Echtzeit.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ÜBER UNS */}
        <motion.section id="ueberuns" className="min-h-screen flex flex-col justify-center items-center text-center px-6" variants={sectionVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-yakaziTurquoise mb-6">Über uns</h2>
          <p className="text-gray-200 max-w-3xl mb-10 leading-relaxed">
            KNOW-HOW: Über 20 Jahre Industrieerfahrung im internationalen Projekt- und Seriengeschäft.
            <br />
            FOKUS: Digitale Transformation durch datengesteuerte Prozessoptimierung mit KI im Einkauf & Vertrieb sowie nachhaltige KI-Schulung.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <Image src="/Yakazi_GF_Bild_Serhat_Siktas.png" alt="Serhat Siktas – Geschäftsführer" width={200} height={200} className="rounded-full border-4 border-yakaziTurquoise shadow-lg" />
            <div className="text-center mt-3">
              <p className="text-lg font-semibold text-yakaziWhite">Serhat Siktas</p>
              <p className="text-sm text-gray-400">Geschäftsführer | Lead Data Science Consultant | KI-Officer</p>
            </div>
          </div>
          {/* Follow me on LinkedIn Section */}
          <div className="mt-8 flex items-center justify-center gap-3">
            
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/serhat-siktas-3356871a3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profil von Serhat Siktas"
              className="w-8 h-8 flex items-center justify-center bg-yakaziTurquoise text-yakaziBlueDark rounded-full hover:scale-110 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 
                        2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 
                        19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 
                        1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 
                        1.764zm13.5 11.268h-3v-5.604c0-1.337-.027-3.061-1.865-3.061-1.865 
                        0-2.151 1.455-2.151 2.959v5.706h-3v-10h2.881v1.367h.041c.401-.761 
                        1.379-1.562 2.836-1.562 3.033 0 3.593 2.003 3.593 4.609v5.586z"/>
              </svg>
            </a>

            {/* Text */}
            <span className="text-yakaziWhite text-lg tracking-wide">
              Follow me on <span className="text-yakaziTurquoise font-semibold">LinkedIn</span>
            </span>

          </div>
        </motion.section>

        {/* KONTAKT */}
        <motion.section id="kontakt" className="py-20 text-center mx-auto w-11/12 md:w-3/4" variants={sectionVariants}>
          <h2 className="text-3xl font-semibold text-yakaziTurquoise mb-2">Kontakt</h2>
          <p className="text-gray-300 mb-0 max-w-2xl mx-auto">
            Sie möchten Ihren Wettbewerbsvorteil ausbauen und ein KI-Projekt starten?
          </p>
          <ContactForm />
        </motion.section>

        {/* YAKAZI KI-ASSISTENT */}
        <motion.section
          id="yakazi-assistent"
          className="relative flex flex-col items-center justify-between py-10 text-center bg-[#0f1e2e] border-t border-gray-700 min-h-[80vh]"
          variants={sectionVariants}
        >
          {/* Nachrichten */}
          <div
            id="yakazi-messages"
            className="flex-1 overflow-y-auto w-11/12 md:w-1/2 mx-auto text-left text-sm text-gray-200 space-y-3 p-4 bg-[#1A2230] rounded-lg border border-[#A7C8E7]/30 shadow-inner"
            style={{ maxHeight: "65vh" }}
          ></div>

          {/* Eingabe fix unten */}
          <div className="sticky bottom-0 bg-[#0f1e2e] w-full py-4 border-t border-[#A7C8E7]/20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-11/12 md:w-1/2 mx-auto">
              <textarea
                id="yakazi-input"
                placeholder="Ihre Frage..."
                className="flex-1 p-3 rounded-md bg-[#2C3442] text-gray-100 border border-[#A7C8E7]/40 focus:ring-1 focus:ring-[#A7C8E7] resize-none"
              ></textarea>
              <button
                id="yakazi-send"
                className="bg-yakaziTurquoise text-yakaziBlue font-semibold px-6 py-2 rounded-md hover:bg-[#3FE0CC] transition-all duration-300"
              >
                Senden
              </button>
            </div>
          </div>

          {/* Hinweis + Löschen */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 mt-4 text-xs text-gray-400">
            <p className="max-w-md text-center md:text-left leading-relaxed">
              Hinweis: Ihre Unterhaltung wird lokal auf Ihrem PC gespeichert und nach 24 Stunden automatisch gelöscht. Sie können den Verlauf hier auch manuell löschen.
            </p>
            <button id="yakazi-clear" className="text-gray-400 hover:text-yakaziTurquoise transition-all underline text-xs">
              🔄 Verlauf löschen
            </button>
          </div>

          {/* Powered by */}
          <p className="mt-4 text-[13px] text-[#A7C8E7] font-semibold yakazi-glow">powered by YAKAZI-KI</p>

          {/* Zurück nach oben */}
          <div className="mt-6">
            <a href="#hero" className="text-yakaziTurquoise text-sm hover:text-[#3FE0CC] transition-colors underline">
              ↑ Zurück nach oben
            </a>
          </div>
        </motion.section>
      </motion.main>

      {/* FOOTER */}
      <footer className="text-center text-gray-400 py-6 border-t border-gray-700 bg-yakaziBlueDark">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm">
          <span>© 2025 YAKAZI Group Holding</span>
          <a href="/impressum" className="hover:text-yakaziTurquoise transition-colors">Impressum</a>
          <a href="/datenschutz" className="hover:text-yakaziTurquoise transition-colors">Datenschutz</a>
        </div>
      </footer>

      {/* Inline Styles */}
      <style jsx global>{`
        #yakazi-messages { scroll-behavior: smooth !important; }

        #yakazi-input.thinking {
          border-color: #3FE0CC !important;
          box-shadow: inset 0 0 8px rgba(63, 224, 204, 0.45) !important;
          transition: box-shadow 0.3s, border-color 0.3s;
        }

        #yakazi-messages div {
          animation: fadeInUp 0.4s ease-out;
          padding: 8px 12px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(167, 200, 231, 0.05);
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .yakazi-reply {
          border-left: 3px solid #A7C8E7;
          background: rgba(167, 200, 231, 0.07);
          color: #E6EDF5;
          box-shadow: inset 0 0 4px rgba(167, 200, 231, 0.15);
        }
        .yakazi-reply b { color: #A7C8E7; font-weight: 600; }

        .yakazi-user {
          border-left: 3px solid #3E4C61;
          background: rgba(255, 255, 255, 0.02);
          color: #C9D2DE;
        }
        .yakazi-user b { color: #E0E0E0; font-weight: 600; }

        #yakazi-messages::-webkit-scrollbar { width: 6px; }
        #yakazi-messages::-webkit-scrollbar-thumb {
          background: rgba(167, 200, 231, 0.3); border-radius: 10px;
        }
        #yakazi-messages::-webkit-scrollbar-thumb:hover {
          background: rgba(167, 200, 231, 0.5);
        }

        .yakazi-glow { animation: yakaziPulse 3s ease-in-out infinite; }
        @keyframes yakaziPulse {
          0%, 100% { text-shadow: 0 0 4px #A7C8E7; opacity: 0.9; }
          50% { text-shadow: 0 0 8px #CFE6F9; opacity: 1; }
        }
      `}</style>
    </>
  );
}
