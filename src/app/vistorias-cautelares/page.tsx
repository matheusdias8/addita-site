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
  title: "Vistorias Cautelares em Goiânia e DF | Áddita Engenharia",
  description:
    "Vistoria cautelar de vizinhança em Goiânia e Distrito Federal. Registro técnico do estado de imóveis antes e durante obras. Protege construtoras e proprietários.",
  alternates: { canonical: "https://addita.com.br/vistorias-cautelares" },
  openGraph: {
    type: "website",
    siteName: "Áddita Engenharia",
    url: "https://addita.com.br/vistorias-cautelares",
    title: "Vistorias Cautelares em Goiânia e DF | Áddita Engenharia",
    description:
      "Vistoria cautelar de vizinhança em Goiânia e Distrito Federal. Documentação técnica que previne disputas e protege construtoras e proprietários.",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vistorias Cautelares em Goiânia e DF | Áddita Engenharia",
    description:
      "Vistoria cautelar de vizinhança em Goiânia e Distrito Federal. Documentação técnica que previne disputas e protege construtoras e proprietários.",
  },
};

export default function VistoriasCautelares() {
  return (
    <>
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
