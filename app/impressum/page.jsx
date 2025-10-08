"use client";

import Link from "next/link";

export default function Impressum() {
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
          Impressum
        </h1>

        <div className="text-gray-300 leading-relaxed space-y-6">
          <section>
            <h2 className="font-semibold text-yakaziWhite mb-1">
              Angaben gemäß § 5 TMG:
            </h2>
            <p>
              <strong>YAKAZI Group Holding</strong>
              <br />
              Stationsweg 13<br />
              97753 Karlstadt<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-yakaziWhite mb-1">
              Vertreten durch:
            </h2>
            <p>Serhat Siktas</p>
          </section>

          <section>
            <h2 className="font-semibold text-yakaziWhite mb-1">Kontakt:</h2>
            <p>
              Telefon:{" "}
              <a
                href="tel:+4917681129036"
                className="text-yakaziTurquoise hover:underline"
              >
                +49 176 81129036
              </a>
              <br />
              E-Mail:{" "}
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
              Umsatzsteuer-ID:
            </h2>
            <p>wird nachgereicht</p>
          </section>

          <section>
            <h2 className="font-semibold text-yakaziWhite mb-1">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
            </h2>
            <p>
              Serhat Siktas
              <br />
              (Adresse wie oben)
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
