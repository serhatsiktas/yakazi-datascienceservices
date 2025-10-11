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
    console.log("🧠 YAKAZI-KI Skript initialisiert");

    const input = document.getElementById("yakazi-input");
    const sendBtn = document.getElementById("yakazi-send");
    const messagesDiv = document.getElementById("yakazi-messages");

    if (!input || !sendBtn || !messagesDiv) {
      console.warn("⚠️ KI-Elemente wurden nicht gefunden.");
      return;
    }

    // ✨ Markdown Renderer
    const renderMarkdown = (text) =>
      text
        .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
        .replace(/\*(.*?)\*/g, "<i>$1</i>")
        .replace(/\n\n/g, "<br><br>");

    // 💾 Verlauf laden
    const loadMessages = () => {
      const saved = JSON.parse(localStorage.getItem("yakaziChat") || "[]");
      const lastSaved = localStorage.getItem("yakaziChatTimestamp");
      if (lastSaved && Date.now() - Number(lastSaved) > 86400000) {
        localStorage.removeItem("yakaziChat");
        localStorage.removeItem("yakaziChatTimestamp");
        return [];
      }
      messagesDiv.innerHTML = saved
        .map(
          (msg) =>
            `<div class="${
              msg.role === "YAKAZI-KI" ? "yakazi-reply" : "yakazi-user"
            }"><b>${msg.role}:</b> ${renderMarkdown(msg.text)}</div>`
        )
        .join("");
      messagesDiv.scrollTo({ top: messagesDiv.scrollHeight, behavior: "smooth" });
      return saved;
    };

    // 💾 Verlauf speichern
    const saveMessages = (history) => {
      localStorage.setItem("yakaziChat", JSON.stringify(history));
      localStorage.setItem("yakaziChatTimestamp", Date.now());
    };

    let history = loadMessages();

    // 👋 Begrüßung beim ersten Besuch
    if (history.length === 0) {
      const welcome =
        "Willkommen beim **YAKAZI KI-Assistenten**!<br>Ich unterstütze Sie gerne bei Aufgaben rund um *KI, Daten & Prozesse.*";
      messagesDiv.innerHTML += `<div class="yakazi-reply"><b>YAKAZI-KI:</b> ${renderMarkdown(
        welcome
      )}</div>`;
      history.push({ role: "YAKAZI-KI", text: welcome });
      saveMessages(history);
    }

    // 📨 Nachricht senden
    const sendMessage = async () => {
      const userMsg = input.value.trim();
      if (!userMsg) return;

      // Nutzer-Nachricht anzeigen
      messagesDiv.innerHTML += `<div class="yakazi-user"><b>Sie:</b> ${userMsg}</div>`;
      messagesDiv.scrollTo({ top: messagesDiv.scrollHeight, behavior: "smooth" });
      history.push({ role: "Sie", text: userMsg });
      input.value = "";
      saveMessages(history);

      // Ladeanzeige
      const loader = document.createElement("div");
      loader.className = "yakazi-reply";
      loader.innerHTML = "<b>YAKAZI-KI:</b> <i>denkt...</i>";
      messagesDiv.appendChild(loader);
      messagesDiv.scrollTo({ top: messagesDiv.scrollHeight, behavior: "smooth" });

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMsg }),
        });

        const data = await response.json();
        loader.remove();

        messagesDiv.innerHTML += `<div class="yakazi-reply"><b>YAKAZI-KI:</b> ${renderMarkdown(
          data.reply
        )}</div>`;
        messagesDiv.scrollTo({ top: messagesDiv.scrollHeight, behavior: "smooth" });
        history.push({ role: "YAKAZI-KI", text: data.reply });
        saveMessages(history);
        console.log("✅ Antwort erhalten:", data.reply);
      } catch (err) {
        loader.remove();
        messagesDiv.innerHTML +=
          '<div class="yakazi-reply"><b>System:</b> Verbindungsfehler. Bitte später erneut versuchen.</div>';
        messagesDiv.scrollTo({ top: messagesDiv.scrollHeight, behavior: "smooth" });
        console.error("❌ Fehler beim Senden:", err);
      }
    };

    // ⌨️ Enter-Taste = Senden, Shift+Enter = Zeilenumbruch
    const handleKeyPress = (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    };

    // Event-Listener aktivieren
    sendBtn.addEventListener("click", sendMessage);
    input.addEventListener("keydown", handleKeyPress);

    // 🧹 Cleanup bei Unmount
    return () => {
      sendBtn.removeEventListener("click", sendMessage);
      input.removeEventListener("keydown", handleKeyPress);
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
          <p className="text-lg text-gray-300 max-w-2xl">
            Data Science Services für Unternehmen. Wir helfen Ihnen, KI- und Datenprozesse effizient einzusetzen – von der Schulung bis zur Implementierung.
          </p>
        </motion.section>

        {/* LEISTUNGEN */}
        <motion.section id="leistungen" className="py-24 text-center mx-auto w-11/12 md:w-3/4" variants={sectionVariants}>
          <h2 className="text-3xl font-semibold text-yakaziTurquoise mb-8">Leistungen</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Wir bieten maßgeschneiderte Schulungen und Lösungen im Bereich Künstliche Intelligenz, Data Science und Prozessautomatisierung – praxisnah, verständlich und messbar.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-8 w-11/12 mx-auto">
            <div className="bg-[#0f1e2e] p-6 rounded-xl shadow-md border border-gray-700 hover:border-yakaziTurquoise transition">
              <h3 className="text-xl font-semibold mb-3 text-yakaziTurquoise">
                KI-Schulungen
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                 - Prompt Engineering für ChatGPT & Co.<br /> 
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                 - Automatisierte Bots für Routineaufgaben
              </p>
            </div>

            <div className="bg-[#0f1e2e] p-6 rounded-xl shadow-md border border-gray-700 hover:border-yakaziTurquoise transition">
              <h3 className="text-xl font-semibold mb-3 text-yakaziTurquoise">
                Prozessautomatisierung
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Automatisieren Sie Ihre Unternehmensprozesse mit intelligenten Workflows und Datenintegration.
              </p>
            </div>

            <div className="bg-[#0f1e2e] p-6 rounded-xl shadow-md border border-gray-700 hover:border-yakaziTurquoise transition">
              <h3 className="text-xl font-semibold mb-3 text-yakaziTurquoise">
                Datenanalyse & Dashboards
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Von der Datenerfassung bis zur Visualisierung: wir machen Ihre Daten strategisch nutzbar.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ÜBER UNS */}
        <motion.section id="ueberuns" className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24" variants={sectionVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-yakaziTurquoise mb-6">Über uns</h2>
          <p className="text-gray-200 max-w-3xl mb-10 leading-relaxed">
            YAKAZI | Data Science Services ist ein Geschäftsbereich der YAKAZI Group Holding. Unser Fokus liegt auf praxisnahen KI-Schulungen und datengesteuerter Prozessoptimierung.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <Image src="/Yakazi_GF_Bild_Serhat_Siktas.png" alt="Serhat Siktas – Geschäftsführer" width={200} height={200} className="rounded-full border-4 border-yakaziTurquoise shadow-lg" />
            <div className="text-center mt-3">
              <p className="text-lg font-semibold text-yakaziWhite">Serhat Siktas</p>
              <p className="text-sm text-gray-400">Geschäftsführer I Lead Data Science Consultant</p>
            </div>
          </div>
        </motion.section>

        {/* KONTAKT */}
        <motion.section id="kontakt" className="py-24 text-center mx-auto w-11/12 md:w-3/4" variants={sectionVariants}>
          <h2 className="text-3xl font-semibold text-yakaziTurquoise mb-8">Kontakt</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Sie möchten Ihr Team schulen oder ein KI-Projekt starten?
          </p>
          <ContactForm />
        </motion.section>

        {/* YAKAZI KI-ASSISTENT */}
        <motion.section
          id="yakazi-assistent"
          className="relative flex flex-col items-center justify-between py-10 text-center bg-[#0f1e2e] border-t border-gray-700 min-h-[80vh]"
          variants={sectionVariants}
        >
          {/* Nachrichtenbereich */}
          <div
            id="yakazi-messages"
            className="flex-1 overflow-y-auto w-11/12 md:w-1/2 mx-auto text-left text-sm text-gray-200 space-y-3 p-4 bg-[#1A2230] rounded-lg border border-[#A7C8E7]/30 shadow-inner"
            style={{ maxHeight: "65vh" }}
          ></div>

          {/* Eingabebereich (fix unten) */}
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

          {/* Hinweis */}
          <p className="text-xs text-gray-400 mt-4 max-w-lg mx-auto leading-relaxed">
            Hinweis: Ihre Unterhaltung wird lokal auf Ihrem PC gespeichert und nach 24 Stunden automatisch gelöscht,
            wenn Sie den Verlauf nicht selbst löschen.
          </p>

          {/* Powered by */}
          <p className="mt-4 text-[13px] text-[#A7C8E7] font-semibold yakazi-glow">
            powered by YAKAZI-KI
          </p>

          {/* Zurück nach oben */}
          <div className="mt-6">
            <a
              href="#hero"
              className="text-yakaziTurquoise text-sm hover:text-[#3FE0CC] transition-colors underline"
            >
              ↑ Zurück nach oben
            </a>
          </div>
        </motion.section>

      </motion.main>

      {/* FOOTER */}
      <footer className="text-center text-gray-400 py-8 border-t border-gray-700 bg-yakaziBlueDark">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm">
          <span>© 2025 YAKAZI Group Holding</span>
          <a href="/impressum" className="hover:text-yakaziTurquoise transition-colors">Impressum</a>
          <a href="/datenschutz" className="hover:text-yakaziTurquoise transition-colors">Datenschutz</a>
        </div>
      </footer>

{/* Inline Styles für YAKAZI KI-Chat */}
<style jsx global>{`
  /* 💫 Glüheffekt für "powered by YAKAZI-KI" */
  .yakazi-glow {
    animation: yakaziPulse 3s ease-in-out infinite;
  }
  @keyframes yakaziPulse {
    0%, 100% { text-shadow: 0 0 4px #A7C8E7; opacity: 0.9; }
    50% { text-shadow: 0 0 8px #CFE6F9; opacity: 1; }
  }

  /* 🟢 Weiches Einblenden der Nachrichten */
  #yakazi-messages div {
    animation: fadeInUp 0.4s ease-out;
    padding: 8px 12px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(2px);
    border: 1px solid rgba(167, 200, 231, 0.05);
  }

  #yakazi-messages div:not(:last-child) {
    margin-bottom: 8px;
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ✨ KI-Antwort visuell betonen */
  .yakazi-reply {
    border-left: 3px solid #A7C8E7;
    background: rgba(167, 200, 231, 0.07);
    color: #E6EDF5;
  }
  .yakazi-reply b {
    color: #A7C8E7;
    font-weight: 600;
  }

  /* 👤 Nutzer-Nachricht neutral und leicht abgesetzt */
  .yakazi-user {
    border-left: 3px solid #3E4C61;
    background: rgba(255, 255, 255, 0.02);
    color: #C9D2DE;
  }
  .yakazi-user b {
    color: #E0E0E0;
    font-weight: 600;
  }

  /* Scrollbar minimalistisch gestalten */
  #yakazi-messages::-webkit-scrollbar {
    width: 6px;
  }
  #yakazi-messages::-webkit-scrollbar-thumb {
    background: rgba(167, 200, 231, 0.3);
    border-radius: 10px;
  }
  #yakazi-messages::-webkit-scrollbar-thumb:hover {
    background: rgba(167, 200, 231, 0.5);
  }
`}</style>


    </>
  );
}
