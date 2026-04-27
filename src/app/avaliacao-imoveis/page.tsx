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
  title: "Avaliações Imobiliárias em Goiânia e Anápolis | Áddita Engenharia",
  description:
    "Avaliação imobiliária em Goiânia, RM de Goiânia e Anápolis conforme NBR 14.653. Laudos para inventários, divórcios, disputas judiciais e transações. Perito IBAPE-GO nº 275.",
  alternates: { canonical: "https://addita.com.br/avaliacao-imoveis" },
  openGraph: {
    type: "website",
    siteName: "Áddita Engenharia",
    url: "https://addita.com.br/avaliacao-imoveis",
    title: "Avaliações Imobiliárias em Goiânia e Anápolis | Áddita Engenharia",
    description:
      "Avaliação imobiliária em Goiânia, RM de Goiânia e Anápolis conforme NBR 14.653. Laudos para inventários, divórcios, disputas judiciais e transações.",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avaliações Imobiliárias em Goiânia e Anápolis | Áddita Engenharia",
    description:
      "Avaliação imobiliária em Goiânia, RM de Goiânia e Anápolis conforme NBR 14.653. Laudos para inventários, divórcios, disputas judiciais e transações.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://addita.com.br/avaliacao-imoveis#service",
      name: "Avaliação Imobiliária",
      description:
        "Avaliação imobiliária em Goiânia, RM de Goiânia e Anápolis conforme NBR 14.653. Laudos para inventários, divórcios, disputas judiciais e transações. Perito IBAPE-GO nº 275.",
      url: "https://addita.com.br/avaliacao-imoveis",
      provider: { "@id": "https://addita.com.br/#business" },
      areaServed: [
        { "@type": "City", name: "Goiânia" },
        { "@type": "City", name: "Anápolis" },
        { "@type": "AdministrativeArea", name: "Região Metropolitana de Goiânia" },
        { "@type": "State", name: "Goiás" },
      ],
      serviceType: "Avaliação Imobiliária",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: "https://addita.com.br" },
        { "@type": "ListItem", position: 2, name: "Avaliação de Imóveis", item: "https://addita.com.br/avaliacao-imoveis" },
      ],
    },
  ],
};

export default function AvaliacaoImoveis() {
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
