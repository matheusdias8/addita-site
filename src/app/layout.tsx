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
  icons: { icon: "/favicon.png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://addita.com.br/#business",
      "name": "Áddita Engenharia e Consultoria",
      "url": "https://addita.com.br/",
      "logo": "https://addita.com.br/og-image.jpg",
      "image": "https://addita.com.br/og-image.jpg",
      "description": "Perícia judicial de engenharia em Goiânia. Assistência técnica e análise de contratos.",
      "telephone": "+55-62-92000-2426",
      "email": "contato@addita.com.br",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Goiânia",
        "addressRegion": "GO",
        "addressCountry": "BR",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -16.6869,
        "longitude": -49.2648,
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00",
        },
      ],
      "sameAs": [
        "https://www.instagram.com/addita.eng",
        "https://www.linkedin.com/company/additaengenharia/",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços de Engenharia",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Perícia Judicial de Engenharia" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Assistência Técnica em Perícia" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Análise de Contratos de Engenharia" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Avaliação Imobiliária com Laudo" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vistoria Cautelar de Vizinhança" } },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": "https://addita.com.br/#matheus",
      "name": "Matheus Dias Lima",
      "jobTitle": "Engenheiro Perito Judicial",
      "worksFor": { "@id": "https://addita.com.br/#business" },
      "description": "Perito IBAPE-GO nº 275, inscrito no TJ-GO e TJDFT. Mais de 13 anos de experiência em contratos de engenharia.",
      "sameAs": [
        "https://www.linkedin.com/company/additaengenharia/",
        "https://ibape-go.com.br/peritos-e-avaliadores/?associado=163",
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Não sei se meu caso é complexo o suficiente para contratar uma perícia.",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Se existe uma disputa envolvendo valores, obras, contratos ou imóveis, existe espaço para prova técnica. A avaliação inicial é para entender isso. Você não precisa saber a resposta antes de perguntar.",
          },
        },
        {
          "@type": "Question",
          "name": "Já existe um perito nomeado pelo juiz. Para que contratar assistência técnica?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O perito do juízo trabalha para o processo — não para você. A assistência técnica garante que nenhum erro ou omissão passe sem contestação. Em muitos casos, é ela que muda o resultado.",
          },
        },
        {
          "@type": "Question",
          "name": "Perícia de engenharia é caro?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O custo de um laudo é sempre menor do que o custo de perder uma causa ou aceitar uma obra com defeito sem como provar. O investimento é apresentado só após entender o caso — sem compromisso.",
          },
        },
        {
          "@type": "Question",
          "name": "A Áddita atende em todo o Brasil?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Atendimento presencial em Goiás e Distrito Federal. Para outros estados, avaliamos caso a caso — parte significativa do trabalho é feita remotamente.",
          },
        },
        {
          "@type": "Question",
          "name": "Quanto tempo leva para entregar um laudo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depende da complexidade. O prazo estimado é apresentado junto com o escopo e o investimento — antes de qualquer assinatura.",
          },
        },
        {
          "@type": "Question",
          "name": "Como é definido o preço?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Após entendermos o tamanho e a complexidade do caso. Não trabalhamos com tabelas fixas. O valor é apresentado antes de qualquer compromisso.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={outfit.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
