export default function YakaziFooter() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#CBD3E1] to-[#3E4C61] text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Kontaktblock */}
        <div>
          <h3 className="text-2xl font-bold tracking-wide mb-4">Kontakt</h3>
          <p className="text-white/80 leading-relaxed">
            YAKAZI | Data Science Services<br />
            Serhat Siktas<br />
            info@data-science-services.de
            </p>

          <div className="mt-4 space-y-3">

            {/* Mail */}
            <a
              href="mailto:info@data-science-services.de"
              className="flex items-center gap-3 hover:text-[#A7C8E7] transition-colors"
            >
              <div className="w-8 h-8 bg-[#A7C8E7] text-[#3E4C61] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 
                          2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
                          4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              info@data-science-services.de
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/serhat-siktas-3356871a3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#A7C8E7] transition-colors"
            >
              <div className="w-8 h-8 bg-[#A7C8E7] text-[#3E4C61] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
                    2.761 2.239 5 5 5h14c2.762 0 5-2.239 
                    5-5v-14c0-2.761-2.238-5-5-5zm-11 
                    19h-3v-10h3v10zm-1.5-11.268c-.966 
                    0-1.75-.79-1.75-1.764s.784-1.764 
                    1.75-1.764 1.75.79 1.75 1.764-.783 
                    1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337
                    -.027-3.061-1.865-3.061-1.865 
                    0-2.151 1.455-2.151 2.959v5.706h-3v-10h2.881v1.367h.041c.401
                    -.761 1.379-1.562 2.836-1.562 3.033 0 3.593 2.003 
                    3.593 4.609v5.586z"/>
                </svg>
              </div>
              Follow me on LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#A7C8E7] transition-colors"
            >
              <div className="w-8 h-8 bg-[#A7C8E7] text-[#3E4C61] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 
                    9.42 7.86 10.96.58.11.79-.25.79-.56 
                    0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54
                    -.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.7.08-.7 
                    1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 
                    2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29
                    -5.26-1.28-5.26-5.71 0-1.26.45-2.3 
                    1.19-3.11-.12-.29-.52-1.46.11-3.05 
                    0 0 .97-.31 3.18 1.19A11.1 11.1 0 0 1 
                    12 6.8c.98.01 1.97.13 2.89.38 2.2-1.5 
                    3.17-1.19 3.17-1.19.63 1.59.23 2.76.11 
                    3.05.74.81 1.18 1.85 1.18 3.11 
                    0 4.44-2.71 5.42-5.29 5.7.42.36.8 
                    1.08.8 2.18 0 1.57-.01 2.84-.01 
                    3.23 0 .31.21.69.8.57A10.52 10.52 
                    0 0 0 23.5 12C23.5 5.65 18.35.5 
                    12 .5z"/>
                </svg>
              </div>
              GitHub
            </a>

          </div>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/vcard.png"
            alt="V-Card QR Code"
            className="w-40 h-40 rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
          <p className="mt-3 text-sm text-white/80">V-Card für <Handy></Handy></p>
        </div>

        {/* Rechtliches */}
        <div className="flex flex-col md:items-end">
          <h3 className="text-2xl font-bold tracking-wide mb-4">Rechtliches</h3>
          <div className="flex flex-col gap-2 text-white/80">
            <a href="/impressum" className="hover:text-[#A7C8E7] transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-[#A7C8E7] transition-colors">Datenschutz</a>
            <a href="/agb" className="hover:text-[#A7C8E7] transition-colors">AGB</a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} YAKAZI Group Holding – Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
