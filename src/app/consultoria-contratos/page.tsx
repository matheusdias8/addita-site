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
    "Análise de BDI, formação de preços, aditivos e reequilíbrio econômico-financeiro. Suporte técnico em disputas contratuais. Mais de R$ 2 bilhões em contratos gerenciados.",
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

export default function ConsultoriaContratos() {
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
