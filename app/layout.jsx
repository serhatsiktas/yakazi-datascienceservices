import "./globals.css";

export const metadata = {
  title: "YAKAZI | Data Science Services",
  description:
    "Wir machen Künstliche Intelligenz anwendbar – für Unternehmen, Teams und Prozesse. YAKAZI Data Science Services hilft Unternehmen, KI-Potenziale in Produktivität zu verwandeln.",
  keywords: [
    "YAKAZI",
    "Data Science Services",
    "Künstliche Intelligenz",
    "KI Beratung",
    "Prozessoptimierung",
    "Digitalisierung",
    "Serhat Siktas",
    "KI Schulung",
    "Unternehmensberatung KI",
  ],
  authors: [{ name: "Serhat Siktas" }],
  creator: "YAKAZI | Data Science Services",
  publisher: "YAKAZI | Data Science Services",
  metadataBase: new URL("https://www.data-science-services.de"),
  openGraph: {
    title: "YAKAZI | Data Science Services",
    description:
      "KI-Schulungen, Prompt Engineering und Beratung für Unternehmen – praxisnah, verständlich und messbar.",
    url: "https://www.data-science-services.de",
    siteName: "YAKAZI Data Science Services",
    images: [
      {
        url: "/yakazi-hero.png",
        width: 1200,
        height: 630,
        alt: "YAKAZI | Data Science Services – KI für Unternehmen",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YAKAZI | Data Science Services",
    description:
      "Wir machen Künstliche Intelligenz anwendbar – für Unternehmen, Teams und Prozesse.",
    images: ["/yakazi-hero.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3E4C61" />
      </head>
      <body>{children}</body>
    </html>
  );
}
