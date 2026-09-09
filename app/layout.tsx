import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import ThemeToggle from "@/components/ThemeToggle";

const LOGO_URL =
  "https://res.cloudinary.com/dxiefklmt/image/upload/v1774102552/Dominion_Outreach_ft0cc0.png";

export const metadata: Metadata = {
  title: "Dominion Outreach",
  description: "Who will have all men to be saved and to come to the knowledge of the truth.",
  icons: {
    icon: [{
      url: "https://res.cloudinary.com/dxiefklmt/image/upload/w_192,h_192,c_fill,f_png/v1774102552/Dominion_Outreach_ft0cc0.png",
      type: "image/png",
      sizes: "192x192",
    }],
  },
  verification: {
    google: "5AHVH-sW_1U9wu-Gs2cGxutI3fgXHlT2AYR8FmdsZvM",
  },
};

export const viewport: Viewport = { themeColor: "#0a1928" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>

        <footer className="do-footer">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-14 mb-8">
            <div className="text-center sm:text-left">
              <img src={LOGO_URL} alt="Dominion Outreach Logo" className="do-footer-logo mb-5 mx-auto sm:mx-0" />
              <h2 className="font-bold text-2xl mb-2">Dominion Outreach</h2>
              <p className="max-w-xs opacity-90">
                Who will have all men to be Saved and to come to the knowledge of the Truth.
              </p>
            </div>

            <div className="flex gap-7">
              <a
                href="mailto:dominionoutreachofficial@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" stroke="#EA4335" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/dominion_outreach/?hl=en" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="30%" stopColor="#e6683c" />
                      <stop offset="60%" stopColor="#dc2743" />
                      <stop offset="80%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="url(#ig-grad)"
                    d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 011.77 1.15 4.9 4.9 0 011.15 1.77c.16.46.35 1.26.4 2.43.06 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.46.16-1.26.35-2.43.4-1.25.06-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 011.15-1.77A4.9 4.9 0 015.6 1.8c.46-.16 1.26-.35 2.43-.4C9.28 1.34 9.68 1.33 12 1.33zm0 1.8c-3.15 0-3.52 0-4.76.07-.96.04-1.48.2-1.82.34a3.1 3.1 0 00-1.15.75c-.35.34-.57.68-.75 1.15-.14.34-.3.86-.34 1.82C3.11 8.48 3.1 8.85 3.1 12s0 3.52.07 4.76c.04.96.2 1.48.34 1.82.18.47.4.81.75 1.15.34.35.68.57 1.15.75.34.14.86.3 1.82.34 1.24.06 1.61.07 4.76.07s3.52 0 4.76-.07c.96-.04 1.48-.2 1.82-.34.47-.18.81-.4 1.15-.75.35-.34.57-.68.75-1.15.14-.34.3-.86.34-1.82.06-1.24.07-1.61.07-4.76s0-3.52-.07-4.76c-.04-.96-.2-1.48-.34-1.82a3.1 3.1 0 00-.75-1.15 3.1 3.1 0 00-1.15-.75c-.34-.14-.86-.3-1.82-.34C15.52 3.11 15.15 3.1 12 3.1zm0 3.16a5.74 5.74 0 110 11.48 5.74 5.74 0 010-11.48zm0 1.8a3.94 3.94 0 100 7.88 3.94 3.94 0 000-7.88zm6-2.02a1.34 1.34 0 11-2.68 0 1.34 1.34 0 012.68 0z"
                  />
                </svg>
              </a>
              <a
                href="https://whatsapp.com/channel/0029Vb7dH5k0wajp7QiO6A2m"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6" fill="#25D366" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 22c-1.612 0-3.19-.435-4.567-1.259l-.328-.194-3.398.891.906-3.309-.213-.34a9.9 9.9 0 01-1.518-5.293c.001-5.462 4.447-9.909 9.921-9.909 2.65 0 5.14 1.034 7.014 2.912a9.85 9.85 0 012.906 7.001c-.002 5.462-4.448 9.9-9.923 9.9zm8.413-18.29A11.815 11.815 0 0012.05 0C5.495 0 .16 5.334.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.654a11.87 11.87 0 005.681 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.82 11.82 0 00-3.478-8.191z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center text-sm opacity-70">
            <p>&copy; {new Date().getFullYear()} Dominion Outreach. All rights reserved.</p>
            <p className="mt-2">
              Site by{" "}
              <a
                href="https://favourbaraka.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="credit-name hover:underline transition-colors"
              >
                Favour Baraka
              </a>
            </p>
          </div>
        </footer>

        <ThemeToggle />
      </body>
    </html>
  );
}