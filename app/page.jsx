"use client";

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
      <header className="w-full flex justify-between items-center px-6 py-4 bg-yakaziBlueDark fixed top-0 left-0 z-50">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="YAKAZI Logo"
            width={160}
            height={60}
            priority
          />
        </div>

        <nav className="hidden md:flex space-x-6 text-sm uppercase tracking-wide">
          <a
            href="#leistungen"
            className="hover:text-yakaziTurquoise transition-colors"
          >
            Leistungen
          </a>
          <a
            href="#ueberuns"
            className="hover:text-yakaziTurquoise transition-colors"
          >
            Über uns
          </a>
          <a
            href="#kontakt"
            className="hover:text-yakaziTurquoise transition-colors"
          >
            Kontakt
          </a>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <motion.main
        className="bg-yakaziBlueDark text-yakaziWhite pt-24"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {/* HERO SECTION */}
        <motion.section
          id="hero"
          className="min-h-screen flex flex-col justify-center items-center text-center px-4"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-bold mb-6">
            Willkommen bei{" "}
            <span className="text-yakaziTurquoise">YAKAZI</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Data Science Services für Unternehmen. Wir helfen Ihnen, KI- und
            Datenprozesse effizient einzusetzen – von der Schulung bis zur
            Implementierung.
          </p>
        </motion.section>

        {/* LEISTUNGEN */}
        <motion.section
          id="leistungen"
          className="py-24 text-center"
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-semibold text-yakaziTurquoise mb-8">
            Leistungen
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Wir bieten maßgeschneiderte Schulungen und Lösungen im Bereich
            Künstliche Intelligenz, Data Science und Prozessautomatisierung.
            Unsere Trainings richten sich an Führungskräfte, Analysten und
            Entwickler gleichermaßen.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-8 w-11/12 mx-auto">
            <div className="bg-[#0f1e2e] p-6 rounded-xl shadow-md border border-gray-700 hover:border-yakaziTurquoise transition">
              <h3 className="text-xl font-semibold mb-3 text-yakaziTurquoise">
                KI-Schulungen
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Von Grundlagen bis Deep Learning: praxisnahe Trainings zur
                Einführung in moderne KI-Modelle.
              </p>
            </div>

            <div className="bg-[#0f1e2e] p-6 rounded-xl shadow-md border border-gray-700 hover:border-yakaziTurquoise transition">
              <h3 className="text-xl font-semibold mb-3 text-yakaziTurquoise">
                Prozessautomatisierung
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Automatisieren Sie Ihre Unternehmensprozesse mit intelligenten
                Workflows und Datenintegration.
              </p>
            </div>

            <div className="bg-[#0f1e2e] p-6 rounded-xl shadow-md border border-gray-700 hover:border-yakaziTurquoise transition">
              <h3 className="text-xl font-semibold mb-3 text-yakaziTurquoise">
                Datenanalyse & Dashboards
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Von der Datenerfassung bis zur Visualisierung: wir machen Ihre
                Daten strategisch nutzbar.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ÜBER UNS */}
<motion.section
  id="ueberuns"
  className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24"
  initial="hidden"
  animate="visible"
  variants={sectionVariants}
>
  {/* Überschrift */}
  <h2 className="text-3xl md:text-4xl font-bold text-yakaziTurquoise mb-6">
    Über uns
  </h2>

  {/* Beschreibung */}
  <p className="text-gray-200 max-w-3xl mb-10 leading-relaxed">
    YAKAZI | Data Science Services ist ein Geschäftsbereich der YAKAZI Group Holding. 
    Unser Fokus liegt auf praxisnahen KI-Schulungen und datengesteuerter
    Prozessoptimierung für kleine, mittlere und große Unternehmen.
  </p>

  {/* Bild + Name + LinkedIn */}
  <div className="flex flex-col items-center space-y-4">
    {/* Geschäftsführer-Bild */}
    <Image
      src="/Yakazi_GF_Bild_Serhat_Siktas.png"
      alt="Serhat Siktas – Geschäftsführer"
      width={200}
      height={200}
      className="rounded-full border-4 border-yakaziTurquoise shadow-lg"
    />

    {/* Name & Position */}
    <div className="text-center mt-3">
      <p className="text-lg font-semibold text-yakaziWhite">
        Serhat Siktas
      </p>
      <p className="text-sm text-gray-400">
        Geschäftsführer
      </p>
    </div>

    {/* LinkedIn-Button */}
    <a
      href="https://www.linkedin.com/in/serhat-siktas-3356871a3"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-flex items-center px-5 py-2.5 bg-yakaziTurquoise text-yakaziBlue font-medium rounded-md 
                 hover:bg-[#3fe0cc] hover:shadow-lg hover:shadow-yakaziTurquoise/40 transition-all duration-300"
    >
      {/* LinkedIn Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.761 0 5-2.238 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.795-1.75-1.768s.784-1.764 1.75-1.764 1.75.791 1.75 1.764-.784 1.768-1.75 1.768zm13.5 11.268h-3v-5.604c0-1.338-.025-3.063-1.866-3.063-1.868 0-2.154 1.46-2.154 2.97v5.697h-3v-10h2.881v1.367h.041c.402-.763 1.385-1.566 2.852-1.566 3.049 0 3.615 2.008 3.615 4.621v5.578z" />
      </svg>
      LinkedIn
    </a>
  </div>
</motion.section>


        {/* KONTAKT */}
        <motion.section
          id="kontakt"
          className="py-24 text-center mx-auto w-11/12 md:w-3/4"
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-semibold text-yakaziTurquoise mb-8">
            Kontakt
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Sie möchten Ihr Team schulen oder ein KI-Projekt starten?
            Nutzen Sie unser Kontaktformular – wir melden uns persönlich.
          </p>

          <ContactForm />
        </motion.section>
      </motion.main>

{/* FOOTER */}
<footer className="text-center text-gray-400 py-8 border-t border-gray-700 bg-yakaziBlueDark">
  <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm">
    {/* © Angabe */}
    <span>© 2025 YAKAZI Group Holding</span>

    {/* Impressum */}
    <a
      href="/impressum"
      className="hover:text-yakaziTurquoise transition-colors"
    >
      Impressum
    </a>

    {/* Datenschutz */}
    <a
      href="/datenschutz"
      className="hover:text-yakaziTurquoise transition-colors"
    >
      Datenschutz
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/serhat-siktas-3356871a3"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center hover:text-yakaziTurquoise transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mr-1"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.761 0 5-2.238 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.795-1.75-1.768s.784-1.764 1.75-1.764 1.75.791 1.75 1.764-.784 1.768-1.75 1.768zm13.5 11.268h-3v-5.604c0-1.338-.025-3.063-1.866-3.063-1.868 0-2.154 1.46-2.154 2.97v5.697h-3v-10h2.881v1.367h.041c.402-.763 1.385-1.566 2.852-1.566 3.049 0 3.615 2.008 3.615 4.621v5.578z" />
      </svg>
      LinkedIn
    </a>
  </div>
</footer>

    </>
  );
}
