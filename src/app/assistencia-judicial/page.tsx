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

export default function AssistenciaJudicial() {
  return (
    <>
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
