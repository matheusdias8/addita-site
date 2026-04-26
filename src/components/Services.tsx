"use client";
import { useEffect, useRef } from "react";
import styles from "./Services.module.css";

const services = [
  {
    title: "Consultoria em Contratos de Engenharia",
    desc: "Análise de BDI, formação de preços, aditivos, reajustes e reequilíbrio econômico-financeiro. Suporte técnico em disputas contratuais entre construtoras, estatais e entes privados.",
    porque: "Porque contratos mal assessorados não geram litígios do nada — eles acumulam perdas invisíveis até que viram processo.",
    href: "/consultoria-contratos",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: "Assistência Técnica Judicial",
    desc: "Apoio técnico especializado para advogados e partes em processos que envolvem obras e engenharia. Traduzimos o que acontece no canteiro para a linguagem que o processo exige.",
    porque: "Porque quesitos mal elaborados geram perícias ruins — e perícias ruins definem processos perdidos.",
    href: "/assistencia-judicial",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Perícia Judicial em Engenharia Civil",
    desc: "Atuação como perito nomeado pelo juízo ou como assistente técnico da parte — em processos que envolvem contratos, obras, imóveis e vícios construtivos. Credenciado no TJGO e no TJDF.",
    porque: "Porque a batalha técnica de um processo acontece na perícia — e quem não a acompanha de perto deixa a decisão nas mãos do outro lado.",
    href: "/pericia-judicial",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Vistorias Cautelares",
    desc: "Registro técnico do estado de imóveis vizinhos antes e durante obras. Documentação que previne disputas e protege construtoras e proprietários de demandas indevidas.",
    porque: "Porque sem documentação anterior, qualquer dano preexistente pode ser imputado à sua obra — e provar o contrário é quase impossível.",
    href: "/vistorias-cautelares",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Avaliações Imobiliárias",
    desc: "Laudos de valor de mercado em conformidade com a NBR 14.653. Para inventários, divórcios, disputas judiciais, operações financeiras e transações comerciais.",
    porque: "Porque um número sem fundamentação técnica não aguenta contestação — e em uma disputa, é exatamente isso que vai acontecer.",
    href: "/avaliacao-imoveis",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

export default function Services() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const cards = gridRef.current?.querySelectorAll(`.${styles.card}`);
      if (!cards) return;

      ctx = gsap.context(() => {
        gsap.from(Array.from(cards), {
          opacity: 0,
          y: 28,
          duration: 0.55,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 78%",
          },
        });
      });
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section id="servicos" className={styles.section}>
      <div className="container">
        <span className={`label ${styles.labelDim}`}>Como podemos te ajudar</span>
        <h2 className={styles.h2}>Como a Áddita pode te ajudar</h2>
        <div ref={gridRef} className={styles.grid}>
          {services.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.icon}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              {s.porque && <p className={styles.cardPorque}>{s.porque}</p>}
              <a href={s.href} className={styles.btn}>
                Saiba mais
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
