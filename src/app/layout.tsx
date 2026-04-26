import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://addita.com.br"),
  title: "Perito Judicial de Engenharia em Goiânia | Áddita Engenharia",
  description:
    "Perícia judicial de engenharia em Goiânia. Perito IBAPE-GO nº 275, credenciado TJ-GO e TJDFT. Assistência técnica e análise de contratos. Fale com a Áddita.",
  openGraph: {
    type: "website",
    siteName: "Áddita Engenharia",
    url: "https://addita.com.br/",
    title: "Perito Judicial de Engenharia em Goiânia | Áddita Engenharia",
    description:
      "Perícia judicial de engenharia em Goiânia. Perito IBAPE-GO nº 275, credenciado TJ-GO e TJDFT. Assistência técnica e análise de contratos.",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perito Judicial de Engenharia em Goiânia | Áddita Engenharia",
    description:
      "Perícia judicial de engenharia em Goiânia. Perito IBAPE-GO nº 275, credenciado TJ-GO e TJDFT. Assistência técnica e análise de contratos.",
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
