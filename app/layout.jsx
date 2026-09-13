import { Prata, Jost, Pinyon_Script } from "next/font/google";
import "./globals.css";

const prata = Prata({ subsets: ["latin"], weight: "400", variable: "--font-prata", display: "swap" });
const jost = Jost({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-jost", display: "swap" });
const pinyon = Pinyon_Script({ subsets: ["latin"], weight: "400", variable: "--font-script", display: "swap" });

export const metadata = {
  title: "InvitAle — Invitaciones digitales diseñadas para recordar",
  description:
    "Invitaciones digitales a medida para bodas, quinceañeras, bautizos, comuniones, cumpleaños y eventos corporativos en la Región de Murcia.",
  icons: { icon: "/favicon.png" },
};

// Se ejecuta antes de pintar: evita el parpadeo al cargar.
// Prioridad: preferencia guardada > preferencia del sistema > claro (lado frontal de la tarjeta).
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("invitale-theme");
    var theme = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (theme === "dark") document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${prata.variable} ${jost.variable} ${pinyon.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-paper text-ink transition-colors duration-300 dark:bg-night dark:text-cream font-body antialiased">
        {children}
      </body>
    </html>
  );
}