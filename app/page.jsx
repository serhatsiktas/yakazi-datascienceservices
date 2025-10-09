"use client";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "./components/ContactForm";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
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
          <a href="#yakazi-chatbox" className="hover:text-yakaziTurquoise transition-colors">YAKAZI KI-Assistent</a>
        </nav>
      </header>

      {/* HERO-BEREICH */}
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#E6ECF4] via-[#CBD3E1] to-white text-center px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2C3442] mb-6 leading-tight">
            YAKAZI | Data Science Services
          </h1>
          <p className="text-xl md:text-2xl text-[#3E4C61] mb-4">
            Wir machen Künstliche Intelligenz anwendbar.
          </p>
          <p className="text-lg text-[#4A5568]">Für Unternehmen, Teams und Prozesse.</p>
          <div className="mt-10">
            <a
              href="#kontakt"
              className="bg-gradient-to-r from-[#3E4C61] to-[#1E2530] text-white px-8 py-3 rounded-full shadow-md hover:shadow-[#A7C8E7]/60 hover:scale-105 transition-all duration-300"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </main>

      {/* INHALT */}
      <motion.main className="bg-yakaziBlueDark text-yakaziWhite pt-24" initial="hidden" animate="visible" variants={sectionVariants}>
        <motion.section id="leistungen" className="py-24 text-center" variants={sectionVariants}>
          <h2 className="text-3xl font-semibold text-yakaziTurquoise mb-8">Leistungen</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Wir bieten maßgeschneiderte Schulungen und Lösungen im Bereich
            Künstliche Intelligenz, Data Science und Prozessautomatisierung.
          </p>
        </motion.section>

        <motion.section
          id="ueberuns"
          className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24"
          variants={sectionVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-yakaziTurquoise mb-6">Über uns</h2>
          <p className="text-gray-200 max-w-3xl mb-10 leading-relaxed">
            YAKAZI | Data Science Services ist ein Geschäftsbereich der YAKAZI Group Holding.
            Unser Fokus liegt auf praxisnahen KI-Schulungen und datengesteuerter Prozessoptimierung.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/Yakazi_GF_Bild_Serhat_Siktas.png"
              alt="Serhat Siktas – Geschäftsführer"
              width={200}
              height={200}
              className="rounded-full border-4 border-yakaziTurquoise shadow-lg"
            />
            <div className="text-center mt-3">
              <p className="text-lg font-semibold text-yakaziWhite">Serhat Siktas</p>
              <p className="text-sm text-gray-400">Geschäftsführer</p>
            </div>
          </div>
        </motion.section>

        <motion.section id="kontakt" className="py-24 text-center mx-auto w-11/12 md:w-3/4" variants={sectionVariants}>
          <h2 className="text-3xl font-semibold text-yakaziTurquoise mb-8">Kontakt</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Sie möchten Ihr Team schulen oder ein KI-Projekt starten?
          </p>
          <ContactForm />
        </motion.section>

        {/* KI-ASSISTENT UNTER KONTAKT */}
        <motion.section id="yakazi-chatbox" className="py-24 text-center mx-auto w-11/12 md:w-2/3" variants={sectionVariants}>
          <h2 className="text-3xl font-semibold text-yakaziTurquoise mb-6">YAKAZI KI-Assistent</h2>
          <p className="text-gray-300 mb-8">
            Gerne unterstützen wir Sie jetzt schon bei Ihren Aufgaben am Arbeitsplatz.<br />
            Fragen Sie unseren YAKAZI KI-Assistenten:
          </p>

          {/* Chatfenster */}
          <div
            id="yakazi-chatbox"
            className="bg-gradient-to-b from-[#3E4C61] to-[#1E2530] text-white rounded-2xl shadow-[0_0_25px_#A7C8E7] border border-[#A7C8E7]/60 p-4 w-full max-w-lg mx-auto"
          >
            <div id="yakazi-messages" className="flex flex-col overflow-y-auto text-sm text-gray-100 h-72 mb-3 leading-relaxed p-2 rounded-md bg-[#2C3442]/50"></div>
            <div className="flex gap-2">
              <textarea
                id="yakazi-input"
                placeholder="Ihre Frage..."
                className="flex-1 border border-[#A7C8E7]/60 bg-[#2C3442] text-gray-100 rounded-md p-2 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-[#A7C8E7]"
              ></textarea>
              <button
                id="yakazi-send"
                className="bg-gradient-to-b from-[#5A6A84] to-[#2C3442] px-4 py-2 rounded-md hover:scale-105 transition"
              >
                ➤
              </button>
            </div>
            <p className="text-[11px] text-[#A7C8E7] text-center mt-3 tracking-wide select-none">
              ⚡ powered by <span className="font-semibold text-[#CFE6F9] yakazi-glow">YAKAZI KI</span>
            </p>
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

      {/* --- KI-SCRIPT MIT UX-UPGRADE --- */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const input = document.getElementById('yakazi-input');
            const sendBtn = document.getElementById('yakazi-send');
            const messagesDiv = document.getElementById('yakazi-messages');
            const chatBox = document.getElementById('yakazi-chatbox');
            const EXPIRY_HOURS = 24;

            function saveChat() {
              const data = { html: messagesDiv.innerHTML, timestamp: Date.now() };
              localStorage.setItem('yakaziChatHistory', JSON.stringify(data));
            }
            function loadChat() {
              const saved = localStorage.getItem('yakaziChatHistory');
              if (!saved) return;
              try {
                const data = JSON.parse(saved);
                const hoursOld = (Date.now() - data.timestamp) / (1000 * 60 * 60);
                if (hoursOld > EXPIRY_HOURS) {
                  localStorage.removeItem('yakaziChatHistory');
                  return;
                }
                messagesDiv.innerHTML = data.html;
              } catch { localStorage.removeItem('yakaziChatHistory'); }
            }

            function clearChat() {
              localStorage.removeItem('yakaziChatHistory');
              messagesDiv.innerHTML = '';
              addWelcomeMessage();
            }

            function renderMarkdown(text) {
              return text
                .replace(/\\*\\*(.*?)\\*\\*/g, '<b>$1</b>')
                .replace(/\\*(.*?)\\*/g, '<i>$1</i>')
                .replace(/\\n/g, '<br>');
            }

            function addMessage(content, sender='ai') {
              const msg = document.createElement('div');
              msg.className = sender === 'ai'
                ? 'bg-[#27303d] text-gray-100 p-2 rounded-lg fade-in'
                : 'bg-[#14B8A6]/20 border border-[#14B8A6]/40 text-gray-200 p-2 rounded-lg text-right fade-in';
              msg.innerHTML = renderMarkdown(content);
              messagesDiv.appendChild(msg);
              messagesDiv.scrollTo({ top: messagesDiv.scrollHeight, behavior: 'smooth' });
              saveChat();
            }

            function addWelcomeMessage() {
              if (!messagesDiv.innerHTML.trim()) {
                const welcome = '<div class="bg-[#2C3442] border border-[#14B8A6]/30 text-gray-100 p-3 rounded-lg mb-2">' +
                  '<b>👋 Willkommen beim YAKAZI KI-Assistenten</b><br>' +
                  'Ich unterstütze Sie gerne bei Aufgaben rund um <b>KI, Daten & Prozesse.</b>' +
                  '</div>';
                messagesDiv.innerHTML = welcome;
                saveChat();
              }
            }

            async function sendMessage() {
              const userMsg = input.value.trim();
              if (!userMsg) return;
              addMessage(userMsg, 'user');
              input.value = '';

              const loader = document.createElement('div');
              loader.className = 'text-gray-400 italic';
              loader.textContent = 'YAKAZI KI denkt...';
              messagesDiv.appendChild(loader);
              messagesDiv.scrollTo({ top: messagesDiv.scrollHeight, behavior: 'smooth' });

              try {
                const response = await fetch('/api/chat', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ message: userMsg }),
                });
                const data = await response.json();
                loader.remove();
                addMessage(data.reply, 'ai');
              } catch {
                loader.remove();
                addMessage('⚠️ Verbindung fehlgeschlagen. Bitte später erneut versuchen.', 'ai');
              }
            }

            if (sendBtn) sendBtn.addEventListener('click', sendMessage);
            if (input) input.addEventListener('keydown', (e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            });

            const clearBtn = document.createElement('button');
            clearBtn.textContent = '🗑️ Verlauf löschen';
            clearBtn.className = 'mt-3 text-xs text-gray-400 hover:text-[#A7C8E7] underline transition';
            clearBtn.onclick = () => {
              if (confirm('Möchten Sie den Chat-Verlauf wirklich löschen?')) clearChat();
            };

            const infoText = document.createElement('p');
            infoText.innerHTML = 'Hinweis: Ihre Unterhaltung wird lokal auf Ihrem PC gespeichert und nach 24&nbsp;Stunden automatisch gelöscht, wenn Sie den Verlauf nicht selbst löschen.';
            infoText.className = 'yakazi-hinweis';

            if (chatBox) {
              chatBox.appendChild(clearBtn);
              chatBox.appendChild(infoText);
            }

            loadChat();
            addWelcomeMessage();
          `,
        }}
      />

      <style jsx global>{`
        .fade-in { animation: fadeIn 0.4s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
        .yakazi-glow { animation: yakaziPulse 3s ease-in-out infinite; }
        @keyframes yakaziPulse { 0%,100%{text-shadow:0 0 4px #A7C8E7;opacity:.9;} 50%{text-shadow:0 0 8px #CFE6F9;opacity:1;} }
        .yakazi-hinweis {
          margin-top: 0.75rem;
          padding-top: 0.5rem;
          border-top: 1px solid rgba(167,200,231,0.25);
          font-size: 0.7rem;
          line-height: 1.2;
          color: #a7b3c5;
          font-style: italic;
          text-align: center;
          max-width: 260px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0.9;
          transition: opacity 0.3s ease-in-out;
        }
        .yakazi-hinweis:hover { opacity: 1; color: #CFE6F9; text-shadow: 0 0 4px rgba(167,200,231,0.4); }
      `}</style>
    </>
  );
}
