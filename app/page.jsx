"use client";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "./components/ContactForm";

// Animation-Settings
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <>
      {/* HEADER */}
<header className="w-full flex justify-between items-center px-8 py-4 bg-[#0F172A]/95 backdrop-blur-sm fixed top-0 left-0 z-50 shadow-md">
  <div className="flex items-center space-x-3">
    <Image src="/logo.png" alt="YAKAZI Logo" width={160} height={60} priority />
  </div>

  <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wide">
    <a href="#leistungen" className="text-gray-200 hover:text-[#14B8A6] transition-colors">Leistungen</a>
    <a href="#ueberuns" className="text-gray-200 hover:text-[#14B8A6] transition-colors">Über uns</a>
    <a href="#kontakt" className="text-gray-200 hover:text-[#14B8A6] transition-colors">Kontakt</a>
  </nav>
</header>

{/* HERO-BEREICH */}
<main className="flex flex-col items-center justify-center min-h-[85vh] bg-gradient-to-b from-[#162032] via-[#1E293B] to-[#0F172A] text-center px-6 pt-32 pb-20">
  <div className="max-w-3xl">
    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
      YAKAZI | Data Science Services
    </h1>
    <p className="text-xl md:text-2xl text-[#A7C8E7] mb-3">
      Wir machen Künstliche Intelligenz anwendbar.
    </p>
    <p className="text-lg text-gray-300 mb-10">
      Für Unternehmen, Teams und Prozesse.
    </p>

    <a
      href="#kontakt"
      className="inline-block bg-[#14B8A6] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-[#A7C8E7]/60 hover:scale-105 transition-transform duration-300"
    >
      Kontakt aufnehmen
    </a>
  </div>
</main>

{/* INHALT MIT WEICHEN ÜBERGÄNGEN */}
<motion.main
  className="bg-[#0F172A] text-yakaziWhite pt-24"
  initial="hidden"
  animate="visible"
  variants={sectionVariants}
>

  {/* Willkommen */}
  <motion.section
    id="hero"
    className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-[#0F172A] via-[#152235] to-[#0E1525] py-16"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#CFE6F9]">
      Willkommen bei <span className="text-[#14B8A6]">YAKAZI</span>
    </h1>
    <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
      Data Science Services für Unternehmen. Wir helfen Ihnen, KI- und Datenprozesse effizient einzusetzen –
      von der Schulung bis zur Implementierung.
    </p>
  </motion.section>

  {/* Leistungen */}
  <motion.section id="leistungen" className="py-24 text-center bg-[#162032]" variants={sectionVariants}>
    <h2 className="text-3xl font-semibold text-[#14B8A6] mb-8">Leistungen</h2>
    <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
      Wir bieten maßgeschneiderte Schulungen und Lösungen im Bereich Künstliche Intelligenz,
      Data Science und Prozessautomatisierung.
    </p>
  </motion.section>

  {/* Über uns */}
  <motion.section
    id="ueberuns"
    className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 py-24 bg-gradient-to-b from-[#0E1525] to-[#162032]"
    initial="hidden"
    animate="visible"
    variants={sectionVariants}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-[#14B8A6] mb-6">Über uns</h2>
    <p className="text-gray-200 max-w-3xl mb-10 leading-relaxed">
      YAKAZI | Data Science Services ist ein Geschäftsbereich der YAKAZI Group Holding. Unser Fokus liegt auf
      praxisnahen KI-Schulungen und datengesteuerter Prozessoptimierung.
    </p>

    <div className="flex flex-col items-center space-y-4">
      <Image
        src="/Yakazi_GF_Bild_Serhat_Siktas.png"
        alt="Serhat Siktas – Geschäftsführer"
        width={200}
        height={200}
        className="rounded-full border-4 border-[#14B8A6] shadow-lg"
      />
      <div className="text-center mt-3">
        <p className="text-lg font-semibold text-white">Serhat Siktas</p>
        <p className="text-sm text-gray-400">Geschäftsführer</p>
      </div>
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

      {/* YAKAZI KI-CHAT */}
      <div id="yakazi-chat" className="fixed bottom-6 right-6 z-[9999] font-sans">
        <button
          id="yakazi-open"
          className="bg-gradient-to-b from-[#5A6A84] to-[#2C3442] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-[#A7C8E7]/60 hover:scale-105 transition transform duration-300 ease-in-out focus:outline-none"
        >
          💬 Fragen Sie unsere KI
        </button>

        <div
          id="yakazi-window"
          className="hidden flex-col w-80 h-96 bg-gradient-to-b from-[#3E4C61] to-[#1E2530] rounded-xl shadow-[0_0_25px_#A7C8E7] border border-[#A7C8E7]/60 p-3 text-white animate-fade-in"
        >
          <div id="yakazi-messages" className="flex-1 overflow-y-auto text-sm text-gray-100 mb-2 leading-relaxed"></div>
          <textarea
            id="yakazi-input"
            placeholder="Ihre Frage..."
            className="border border-[#A7C8E7]/60 bg-[#2C3442] text-gray-100 rounded-md p-2 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-[#A7C8E7]"
          ></textarea>
          <div className="text-[11px] text-[#A7C8E7] text-center mt-2 tracking-wide select-none">
            ⚡ powered by <span className="font-semibold text-[#CFE6F9] yakazi-glow">YAKAZI KI</span>
          </div>
        </div>
      </div>

      {/* Inline-Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const openBtn = document.getElementById('yakazi-open');
            const chatWindow = document.getElementById('yakazi-window');
            const messagesDiv = document.getElementById('yakazi-messages');
            const input = document.getElementById('yakazi-input');
            let greeted = false;

            function renderMarkdown(text) {
              return text
                .replace(/\\*\\*(.*?)\\*\\*/g, '<b>$1</b>')
                .replace(/\\*(.*?)\\*/g, '<i>$1</i>')
                .replace(/^### (.*$)/gim, '<h3>$1</h3>')
                .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                .replace(/^# (.*$)/gim, '<h1>$1</h1>')
                .replace(/^- (.*$)/gim, '<ul><li>$1</li></ul>')
                .replace(/\\n\\n/g, '<br><br>');
            }

            function saveMessages() {
              localStorage.setItem('yakaziChatHistory', messagesDiv.innerHTML);
            }
            function loadMessages() {
              const saved = localStorage.getItem('yakaziChatHistory');
              if (saved) messagesDiv.innerHTML = saved;
            }

            openBtn.onclick = () => {
              const isOpen = chatWindow.style.display === 'flex';
              chatWindow.style.display = isOpen ? 'none' : 'flex';
              if (!isOpen) {
                chatWindow.classList.add('shadow-[0_0_35px_#A7C8E7]');
                setTimeout(() => chatWindow.classList.remove('shadow-[0_0_35px_#A7C8E7]'), 800);
                loadMessages();
                if (!greeted && !localStorage.getItem('yakaziChatHistory')) {
                  messagesDiv.innerHTML += createAIMessage("Hallo, ich bin der <b>YAKAZI KI-Assistent</b> 🤖.<br>Ich helfe Ihnen, Künstliche Intelligenz und Data Science in Ihre Prozesse zu bringen – verständlich, praxisnah und effizient.<br><br>Wie kann ich Sie heute unterstützen?");
                  greeted = true;
                  saveMessages();
                }
              }
            };

            function createAIMessage(content) {
              return '<div class="yakazi-message ai"><img src="/yakazi-icon.png" class="yakazi-avatar" alt="KI"/><div class="yakazi-bubble">'+content+'</div></div>';
            }
            function createUserMessage(content) {
              return '<div class="yakazi-message user"><div class="yakazi-bubble">'+content+'</div><img src="/user-icon.png" class="yakazi-avatar" alt="User"/></div>';
            }

            input.addEventListener('keydown', async (e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                const userMessage = input.value.trim();
                if (!userMessage) return;

                messagesDiv.innerHTML += createUserMessage(userMessage);
                input.value = '';
                saveMessages();

                const loader = document.createElement('div');
                loader.className = 'yakazi-message ai';
                loader.innerHTML = '<img src="/yakazi-icon.png" class="yakazi-avatar" alt="KI"/><div class="yakazi-bubble"><span class="loading-dots">Denkt</span></div>';
                messagesDiv.appendChild(loader);
                messagesDiv.scrollTop = messagesDiv.scrollHeight;
                saveMessages();

                const dots = loader.querySelector('.loading-dots');
                let dotCount = 0;
                const interval = setInterval(() => {
                  dotCount = (dotCount + 1) % 4;
                  dots.textContent = 'Denkt' + '.'.repeat(dotCount);
                }, 400);

                try {
                  const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: userMessage })
                  });
                  const data = await response.json();

                  clearInterval(interval);
                  loader.remove();

                  const formatted = renderMarkdown(data.reply);
                  messagesDiv.innerHTML += createAIMessage(formatted);
                  messagesDiv.scrollTop = messagesDiv.scrollHeight;
                  saveMessages();
                } catch (err) {
                  clearInterval(interval);
                  loader.remove();
                  messagesDiv.innerHTML += createAIMessage("⚠️ Verbindungsproblem. Bitte später erneut versuchen.");
                  saveMessages();
                }
              }
            });

            loadMessages();
          `,
        }}
      />

      {/* Mini-CSS für Glow & Fade */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.4s ease-in-out; }

        .yakazi-glow {
          animation: yakaziPulse 3s ease-in-out infinite;
        }
        @keyframes yakaziPulse {
          0%, 100% { text-shadow: 0 0 4px #A7C8E7; opacity: 0.9; }
          50% { text-shadow: 0 0 8px #CFE6F9; opacity: 1; }
        }

        .yakazi-message { display: flex; align-items: flex-end; gap: 8px; margin: 8px 0; }
        .yakazi-message.ai { justify-content: flex-start; }
        .yakazi-message.user { justify-content: flex-end; }
        .yakazi-avatar { width: 24px; height: 24px; border-radius: 9999px; }
        .yakazi-bubble { max-width: 85%; padding: 8px 12px; border-radius: 10px; background: #2C3442; }
        .yakazi-message.ai .yakazi-bubble { background: #27303d; }
      `}</style>
    </>
  );
}
