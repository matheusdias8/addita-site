import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
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
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={outfit.className}>
      <head />
      <body>
        {children}

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-68XW2ZWWGY"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-68XW2ZWWGY');`}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","wgdc87ayvv");`}
        </Script>
      </body>
    </html>
  );
}
