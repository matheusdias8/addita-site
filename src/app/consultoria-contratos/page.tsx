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
  title: "Consultoria em Contratos de Engenharia | Áddita Engenharia",
  description:
    "Consultoria em contratos de engenharia em Goiânia. Análise de BDI, formação de preços, aditivos e reequilíbrio econômico-financeiro. Mais de R$ 2 bilhões em contratos gerenciados.",
  alternates: { canonical: "https://addita.com.br/consultoria-contratos" },
  openGraph: {
    type: "website",
    siteName: "Áddita Engenharia",
    url: "https://addita.com.br/consultoria-contratos",
    title: "Consultoria em Contratos de Engenharia | Áddita Engenharia",
    description:
      "Análise de BDI, formação de preços, aditivos e reequilíbrio econômico-financeiro. Suporte técnico em disputas contratuais.",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoria em Contratos de Engenharia | Áddita Engenharia",
    description:
      "Análise de BDI, formação de preços, aditivos e reequilíbrio econômico-financeiro. Suporte técnico em disputas contratuais.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://addita.com.br/consultoria-contratos#service",
      name: "Consultoria em Contratos de Engenharia",
      description:
        "Consultoria em contratos de engenharia em Goiânia. Análise de BDI, formação de preços, aditivos e reequilíbrio econômico-financeiro. Suporte técnico em disputas contratuais.",
      url: "https://addita.com.br/consultoria-contratos",
      provider: { "@id": "https://addita.com.br/#business" },
      areaServed: [
        { "@type": "City", name: "Goiânia" },
        { "@type": "State", name: "Goiás" },
        { "@type": "State", name: "Distrito Federal" },
      ],
      serviceType: "Consultoria em Contratos de Engenharia",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: "https://addita.com.br" },
        { "@type": "ListItem", position: 2, name: "Consultoria em Contratos", item: "https://addita.com.br/consultoria-contratos" },
      ],
    },
  ],
};

export default function ConsultoriaContratos() {
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
