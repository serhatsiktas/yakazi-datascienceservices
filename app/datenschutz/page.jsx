"use client";

import Link from "next/link";

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-yakaziBlueDark text-yakaziWhite px-8 py-16 relative">

      {/* Fixierter Zurück-Button */}
      <div className="absolute top-6 right-6">
        <Link
          href="/"
          className="text-yakaziTurquoise hover:text-yakaziWhite font-medium transition"
        >
          ← Zurück zur Startseite
        </Link>
      </div>

      <div className="max-w-3xl mx-auto text-left">
        <h1 className="text-3xl font-bold text-yakaziTurquoise mb-10">
          Datenschutzerklärung
        </h1>

        <div className="text-gray-300 leading-relaxed space-y-6">
          <section>
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. 
              Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen 
              Bestimmungen (DSGVO, TMG).
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-yakaziWhite mb-1">Verantwortlicher:</h2>
            <p>
              YAKAZI Group Holding<br />
              Stationsweg 13<br />
              97753 Karlstadt<br />
              <a
                href="mailto:info@data-science-services.de"
                className="text-yakaziTurquoise hover:underline"
              >
                info@data-science-services.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-yakaziWhite mb-1">
              Datenerfassung auf dieser Website:
            </h2>
            <p>
              Personenbezogene Daten werden nur erhoben, wenn Sie uns diese freiwillig mitteilen, 
              z. B. über das Kontaktformular. Die Daten werden ausschließlich zur Bearbeitung 
              Ihrer Anfrage genutzt.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-yakaziWhite mb-1">
              Cookies & Analysetools:
            </h2>
            <p>
              Diese Website verwendet keine Cookies und keine Tracking-Dienste.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-yakaziWhite mb-1">Ihre Rechte:</h2>
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung 
              der Verarbeitung Ihrer personenbezogenen Daten.
            </p>
          </section>

          <p className="text-sm text-gray-500 pt-8">
            © 2025 YAKAZI Group Holding – Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </main>
  );
}
