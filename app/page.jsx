"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "./components/ContactForm";

// Animation
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
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
        <motion.section id="leistungen" className="py-24 text-center" variants={sectionVariants}>
          <h2 className="text-3xl font-semibold text-yakaziTurquoise mb-8">Leistungen</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Wir bieten maßgeschneiderte Schulungen und Lösungen im Bereich Künstliche Intelligenz, Data Science und Prozessautomatisierung.
          </p>
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
              <p className="text-sm text-gray-400">Geschäftsführer</p>
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
        <motion.section id="yakazi-assistent" className="py-20 text-center bg-[#0f1e2e] border-t border-gray-700" variants={sectionVariants}>
          <h2 className="text-2xl md:text-3xl font-semibold text-yakaziTurquoise mb-4">
            Gerne unterstützen wir Sie jetzt schon bei Ihren Aufgaben am Arbeitsplatz.
          </h2>
          <p className="text-gray-300 mb-8">
            Fragen Sie unseren <span className="text-yakaziTurquoise font-semibold">YAKAZI KI-Assistenten</span>.
          </p>

          {/* Eingabefeld */}
          <div className="flex flex-col items-center gap-4 w-11/12 md:w-1/2 mx-auto">
            <textarea id="yakazi-input" placeholder="Ihre Frage..." className="w-full p-3 rounded-md bg-[#2C3442] text-gray-100 border border-[#A7C8E7]/40 focus:ring-1 focus:ring-[#A7C8E7] resize-none"></textarea>
            <button id="yakazi-send" className="bg-yakaziTurquoise text-yakaziBlue font-semibold px-6 py-2 rounded-md hover:bg-[#3FE0CC] transition-all duration-300">
              Senden
            </button>
          </div>

          {/* Antwortbereich */}
          <div id="yakazi-messages" className="mt-6 text-sm text-gray-200 w-11/12 md:w-1/2 mx-auto text-left space-y-3"></div>

          {/* Hinweis */}
          <p className="text-xs text-gray-400 mt-8 max-w-lg mx-auto leading-relaxed">
            Hinweis: Ihre Unterhaltung wird lokal auf Ihrem PC gespeichert und nach 24 Stunden automatisch gelöscht, wenn Sie den Verlauf nicht selbst löschen.
          </p>

          {/* Powered by */}
          <p className="mt-6 text-[13px] text-[#A7C8E7] font-semibold yakazi-glow">powered by YAKAZI-KI</p>

          {/* Zurück nach oben */}
          <div className="mt-10">
            <a href="#hero" className="text-yakaziTurquoise text-sm hover:text-[#3FE0CC] transition-colors underline">↑ Zurück nach oben</a>
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

      {/* Inline Script mit Markdown + Begrüßung */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const input = document.getElementById('yakazi-input');
            const sendBtn = document.getElementById('yakazi-send');
            const messagesDiv = document.getElementById('yakazi-messages');

            // Markdown Renderer (Basis)
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

            function loadMessages() {
              const saved = JSON.parse(localStorage.getItem('yakaziChat') || '[]');
              const lastSaved = localStorage.getItem('yakaziChatTimestamp');
              if (lastSaved && Date.now() - Number(lastSaved) > 86400000) {
                localStorage.removeItem('yakaziChat');
                localStorage.removeItem('yakaziChatTimestamp');
                return [];
              }
              messagesDiv.innerHTML = saved.map(msg => '<div><b>' + msg.role + ':</b> ' + renderMarkdown(msg.text) + '</div>').join('');
              return saved;
            }

            function saveMessages(history) {
              localStorage.setItem('yakaziChat', JSON.stringify(history));
              localStorage.setItem('yakaziChatTimestamp', Date.now());
            }

            let history = loadMessages();

            // Begrüßung einmalig beim ersten Aufruf
            if (history.length === 0) {
              const welcome = "Willkommen beim **YAKAZI KI-Assistenten**!<br>Ich unterstütze Sie gerne bei Aufgaben rund um *KI, Daten & Prozesse.*";
              messagesDiv.innerHTML += '<div><b>YAKAZI-KI:</b> ' + renderMarkdown(welcome) + '</div>';
              history.push({ role: 'YAKAZI-KI', text: welcome });
              saveMessages(history);
            }

            sendBtn.addEventListener('click', async () => {
              const userMsg = input.value.trim();
              if (!userMsg) return;

              history.push({ role: 'Sie', text: userMsg });
              messagesDiv.innerHTML += '<div><b>Sie:</b> ' + userMsg + '</div>';
              input.value = '';
              saveMessages(history);

              try {
                const response = await fetch('/api/chat', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ message: userMsg })
                });
                const data = await response.json();
                const formatted = renderMarkdown(data.reply);
                history.push({ role: 'YAKAZI-KI', text: data.reply });
                messagesDiv.innerHTML += '<div><b>YAKAZI-KI:</b> ' + formatted + '</div>';
                saveMessages(history);
              } catch (err) {
                messagesDiv.innerHTML += '<div><b>System:</b> Verbindungsfehler. Bitte später erneut versuchen.</div>';
              }
            });
          `,
        }}
      />

      <style jsx global>{`
        .yakazi-glow {
          animation: yakaziPulse 3s ease-in-out infinite;
        }
        @keyframes yakaziPulse {
          0%, 100% { text-shadow: 0 0 4px #A7C8E7; opacity: 0.9; }
          50% { text-shadow: 0 0 8px #CFE6F9; opacity: 1; }
        }
      `}</style>
    </>
  );
}
