import "./globals.css";

export const metadata = {
  title: "YAKAZI | Data Science Services",
  description:
    "Wir machen Künstliche Intelligenz anwendbar – für Unternehmen, Teams und Prozesse. YAKAZI Data Science Services hilft Unternehmen, KI-Potenziale in Produktivität zu verwandeln.",
  openGraph: {
    title: "YAKAZI | Data Science Services",
    description:
      "KI-Schulungen, Prompt Engineering und Beratung für Unternehmen – praxisnah, verständlich und messbar.",
    url: "https://www.data-science-services.de",
    siteName: "YAKAZI Data Science Services",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "YAKAZI Data Science Services",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
