import { Prata, Jost, Pinyon_Script } from "next/font/google";
import "./globals.css";

const prata = Prata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-prata",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata = {
  title: "InvitAle — Invitaciones digitales diseñadas para recordar",
  description:
    "Invitaciones digitales a medida para bodas, quinceañeras, bautizos, comuniones, cumpleaños y eventos corporativos en la Región de Murcia.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${prata.variable} ${jost.variable} ${pinyon.variable}`}
    >
      <body className="bg-paper font-body text-ink antialiased">
        {children}
      </body>
    </html>
  );
}