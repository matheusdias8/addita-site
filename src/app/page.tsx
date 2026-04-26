import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Credentials from "@/components/Credentials";
import WhyItMatters from "@/components/WhyItMatters";
import Identification from "@/components/Identification";
import Stats from "@/components/Stats";
import AboutMatheus from "@/components/AboutMatheus";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import WhatIsIncluded from "@/components/WhatIsIncluded";
import Urgency from "@/components/Urgency";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://addita.com.br/#business",
      name: "Áddita Engenharia e Consultoria",
      url: "https://addita.com.br",
      logo: "https://addita.com.br/images/logo_vertical.png",
      image: "https://addita.com.br/opengraph-image",
      description:
        "Perícia judicial de engenharia em Goiânia. Perito IBAPE-GO nº 275, credenciado TJ-GO e TJDFT. Assistência técnica e análise de contratos.",
      telephone: "+55-62-92000-2426",
      email: "contato@addita.com.br",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Goiânia",
        addressRegion: "GO",
        addressCountry: "BR",
      },
      areaServed: [
        { "@type": "City", name: "Goiânia" },
        { "@type": "City", name: "Anápolis" },
        { "@type": "AdministrativeArea", name: "Região Metropolitana de Goiânia", containedInPlace: { "@type": "State", name: "Goiás" } },
        { "@type": "State", name: "Goiás" },
        { "@type": "State", name: "Distrito Federal" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de Engenharia",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Perícia Judicial em Engenharia Civil" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Assistência Técnica Judicial" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Consultoria em Contratos de Engenharia" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vistorias Cautelares" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Avaliações Imobiliárias" } },
        ],
      },
      sameAs: [
        "https://www.instagram.com/addita.eng",
        "https://www.linkedin.com/company/additaengenharia/",
        "https://ibape-go.com.br/peritos-e-avaliadores/?associado=163",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://addita.com.br/#matheus",
      name: "Matheus Dias Lima",
      jobTitle: "Engenheiro Civil e Perito Judicial",
      worksFor: { "@id": "https://addita.com.br/#business" },
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", credentialCategory: "Perito IBAPE-GO nº 275" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "Credenciado TJ-GO" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "Credenciado TJDFT" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://addita.com.br/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Não sei se meu caso é complexo o suficiente para contratar uma perícia...",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Se existe uma disputa envolvendo valores, obras, contratos ou imóveis, existe espaço para prova técnica. A avaliação inicial é para entender isso. Você não precisa saber a resposta antes de perguntar.",
          },
        },
        {
          "@type": "Question",
          name: "Já existe um perito nomeado pelo juiz. Para que contratar assistência técnica?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O perito do juízo trabalha para o processo — não para você. A assistência técnica garante que nenhum erro ou omissão passe sem contestação. Em muitos casos, é ela que muda o resultado.",
          },
        },
        {
          "@type": "Question",
          name: "Perícia de engenharia é caro...",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O custo de um laudo é sempre menor do que o custo de perder uma causa ou aceitar uma obra com defeito sem como provar. O investimento é apresentado só após entender o caso — sem compromisso.",
          },
        },
        {
          "@type": "Question",
          name: "A Áddita atende em todo o Brasil?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Atendimento presencial em Goiás e Distrito Federal. Para outros estados, avaliamos caso a caso — parte significativa do trabalho é feita remotamente.",
          },
        },
        {
          "@type": "Question",
          name: "Quanto tempo leva para entregar um laudo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende da complexidade. O prazo estimado é apresentado junto com o escopo e o investimento — antes de qualquer assinatura.",
          },
        },
        {
          "@type": "Question",
          name: "Posso contratar a Áddita mesmo que já exista um perito nomeado?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. A assistência técnica é um direito das partes no processo. Você pode indicar seu assistente para acompanhar a perícia, questionar o laudo e apresentar pareceres complementares.",
          },
        },
        {
          "@type": "Question",
          name: "Como é definido o preço?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Após entendermos o tamanho e a complexidade do caso. Não trabalhamos com tabelas fixas. O valor é apresentado antes de qualquer compromisso.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <Credentials />
      <WhyItMatters />
      <Identification />
      <Stats />
      <AboutMatheus />
      <Services />
      <Differentials />
      <WhatIsIncluded />
      <Urgency />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
