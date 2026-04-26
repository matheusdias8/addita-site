"use client";
import { useEffect, useRef } from "react";
import styles from "./ServiceDifferentials.module.css";

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "R$ 2 bilhões em contratos gerenciados",
    desc: "Base de experiência prática que sustenta cada avaliação realizada — não apenas teoria, mas conhecimento real do setor.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Mais de uma centena de avaliações realizadas",
    desc: "Principalmente para Banco do Brasil e Caixa Econômica Federal — credenciais que atestam a aceitação dos laudos no mercado.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Garantia de aceitação do laudo",
    desc: "Em processos administrativos e judiciais — o laudo é elaborado para resistir a questionamentos em qualquer instância.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Inferência estatística — grau máximo de fundamentação",
    desc: "Metodologia NBR 14.653 com análise quantitativa de dados reais de mercado. O resultado mais preciso e tecnicamente defensável.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
      </svg>
    ),
    title: "Geoestatística e IA aplicadas",
    desc: "Modelos geoestatísticos e inteligência artificial nas avaliações — precisão técnica superior e laudos mais robustos.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Capacidade de contestar avaliações bancárias",
    desc: "Laudo com maior grau de fundamentação pode ser apresentado em juízo para questionar o valor da instituição financeira.",
  },
];

const highlight = {
  title: "Credenciada no BB, CEF, TJGO e TJDF · IBAPE-GO nº 275 · CREA-GO",
  desc: "Credenciais que permitem à Áddita atuar em qualquer ambiente — do processo judicial ao financiamento bancário — com o mesmo nível de aceitação técnica.",
};

export default function ServiceDifferentials() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const items = gridRef.current?.querySelectorAll(`.${styles.card}, .${styles.highlightCard}`);
      if (!items) return;

      ctx = gsap.context(() => {
        gsap.from(Array.from(items), {
          opacity: 0,
          y: 24,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
        });
      });
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <span className={`label ${styles.labelDim}`}>Por que a Áddita</span>
        <h2 className={styles.h2}>O que fundamenta nossas avaliações</h2>
        <div ref={gridRef} className={styles.wrap}>
          <div className={styles.grid}>
            {cards.map((c) => (
              <div key={c.title} className={styles.card}>
                <div className={styles.iconWrap}>{c.icon}</div>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.highlightCard}>
            <div className={styles.highlightInner}>
              <span className={styles.highlightIcon}>★</span>
              <div>
                <h3 className={styles.highlightTitle}>{highlight.title}</h3>
                <p className={styles.highlightDesc}>{highlight.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
