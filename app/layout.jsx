import { Prata, Jost } from "next/font/google";
import "./globals.css";

// Serif de marca: titulares, wordmark, citas
const prata = Prata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-prata",
  display: "swap",
});

// Sans de apoyo: cuerpo de texto, navegación, etiquetas
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata = {
  title: "InvitAle — Invitaciones digitales diseñadas para recordar",
  description:
    "Invitaciones digitales a medida para bodas, quinceañeras, bautizos, comuniones, cumpleaños y eventos corporativos en la Región de Murcia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${prata.variable} ${jost.variable}`}>
      <body className="bg-cream font-body text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
