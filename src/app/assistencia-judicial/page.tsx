import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import ServiceHero from "./_components/ServiceHero";
import ServiceProblem from "./_components/ServiceProblem";
import ServiceSolution from "./_components/ServiceSolution";
import ServiceDifferentials from "./_components/ServiceDifferentials";
import ServiceObjections from "./_components/ServiceObjections";
import ServiceCTA from "./_components/ServiceCTA";

export const metadata: Metadata = {
  title: "Assistência Técnica Judicial em Engenharia em Goiânia | Áddita",
  description:
    "Assistência técnica em perícia judicial de engenharia. Revisão de laudos, quesitos e pareceres de impugnação. Perito IBAPE-GO nº 275, credenciado TJGO e TJDF.",
  alternates: { canonical: "https://addita.com.br/assistencia-judicial" },
  openGraph: {
    type: "website",
    siteName: "Áddita Engenharia",
    url: "https://addita.com.br/assistencia-judicial",
    title: "Assistência Técnica Judicial em Engenharia em Goiânia | Áddita",
    description:
      "Assistência técnica em perícia judicial de engenharia. Revisão de laudos, quesitos e pareceres de impugnação. Perito IBAPE-GO nº 275.",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Assistência Técnica Judicial em Engenharia em Goiânia | Áddita",
    description:
      "Assistência técnica em perícia judicial de engenharia. Revisão de laudos, quesitos e pareceres de impugnação. Perito IBAPE-GO nº 275.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://addita.com.br/assistencia-judicial#service",
      name: "Assistência Técnica Judicial em Engenharia",
      description:
        "Assistência técnica em perícia judicial de engenharia em Goiânia. Revisão de laudos, quesitos e pareceres de impugnação. Perito IBAPE-GO nº 275, credenciado TJGO e TJDF.",
      url: "https://addita.com.br/assistencia-judicial",
      provider: { "@id": "https://addita.com.br/#business" },
      areaServed: [
        { "@type": "City", name: "Goiânia" },
        { "@type": "State", name: "Goiás" },
        { "@type": "State", name: "Distrito Federal" },
      ],
      serviceType: "Assistência Técnica Judicial",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: "https://addita.com.br" },
        { "@type": "ListItem", position: 2, name: "Assistência Judicial", item: "https://addita.com.br/assistencia-judicial" },
      ],
    },
  ],
};

export default function AssistenciaJudicial() {
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
      <ServiceDifferentials />
      <ServiceObjections />
      <ServiceCTA />
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
