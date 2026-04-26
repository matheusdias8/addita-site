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

export default function PericiaJudicial() {
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
