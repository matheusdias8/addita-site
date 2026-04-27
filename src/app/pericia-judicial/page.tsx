import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import ServiceHero from "./_components/ServiceHero";
import ServiceProblem from "./_components/ServiceProblem";
import ServiceSolution from "./_components/ServiceSolution";
import ServiceHowItWorks from "./_components/ServiceHowItWorks";
import ServiceDifferentials from "./_components/ServiceDifferentials";
import ServiceObjections from "./_components/ServiceObjections";
import ServiceCTA from "./_components/ServiceCTA";

export const metadata: Metadata = {
  title: "Perícia Judicial em Engenharia Civil em Goiânia | Áddita Engenharia",
  description:
    "Perito judicial de engenharia civil em Goiânia. Atuação como perito nomeado ou assistente técnico. Credenciado no TJGO e no TJDF. Laudos em norma técnica.",
  alternates: { canonical: "https://addita.com.br/pericia-judicial" },
  openGraph: {
    type: "website",
    siteName: "Áddita Engenharia",
    url: "https://addita.com.br/pericia-judicial",
    title: "Perícia Judicial em Engenharia Civil em Goiânia | Áddita Engenharia",
    description:
      "Perito judicial de engenharia civil em Goiânia. Credenciado no TJGO e no TJDF. Laudos fundamentados em norma técnica.",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perícia Judicial em Engenharia Civil em Goiânia | Áddita Engenharia",
    description:
      "Perito judicial de engenharia civil em Goiânia. Credenciado no TJGO e no TJDF. Laudos fundamentados em norma técnica.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://addita.com.br/pericia-judicial#service",
      name: "Perícia Judicial em Engenharia Civil",
      description:
        "Perícia judicial de engenharia civil em Goiânia. Atuação como perito nomeado pelo juízo ou assistente técnico. Credenciado no TJGO e no TJDF. Laudos fundamentados em norma técnica.",
      url: "https://addita.com.br/pericia-judicial",
      provider: { "@id": "https://addita.com.br/#business" },
      areaServed: [
        { "@type": "City", name: "Goiânia" },
        { "@type": "State", name: "Goiás" },
        { "@type": "State", name: "Distrito Federal" },
      ],
      serviceType: "Perícia Judicial de Engenharia Civil",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: "https://addita.com.br" },
        { "@type": "ListItem", position: 2, name: "Perícia Judicial", item: "https://addita.com.br/pericia-judicial" },
      ],
    },
  ],
};

export default function PericiaJudicial() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header basePath="/" />
      <ServiceHero />
      <ServiceProblem />
      <ServiceSolution />
      <ServiceHowItWorks />
      <ServiceDifferentials />
      <ServiceObjections />
      <ServiceCTA />
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
