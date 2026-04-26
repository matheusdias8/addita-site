import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Perito Judicial de Engenharia em Goiânia | Áddita Engenharia",
  description:
    "Perícia judicial de engenharia em Goiânia. Perito IBAPE-GO nº 275, credenciado TJ-GO e TJDFT. Assistência técnica e análise de contratos. Fale com a Áddita.",
  openGraph: {
    type: "website",
    url: "https://addita.com.br/",
    title: "Perito Judicial de Engenharia em Goiânia | Áddita Engenharia",
    description:
      "Perícia judicial de engenharia em Goiânia. Perito IBAPE-GO nº 275, credenciado TJ-GO e TJDFT. Assistência técnica e análise de contratos.",
    images: [{ url: "https://addita.com.br/og-image.jpg" }],
    locale: "pt_BR",
  },
  alternates: { canonical: "https://addita.com.br/" },
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={outfit.className}>
      <body>{children}</body>
    </html>
  );
}
