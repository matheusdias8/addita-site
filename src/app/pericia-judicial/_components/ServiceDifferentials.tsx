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
    desc: "Experiência prática que sustenta análises técnicas com profundidade que poucos peritos conseguem oferecer.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Conhece os dois lados da mesa contratual",
    desc: "Atuou como contratante, contratado e operador de sistemas públicos. Sabe como cada parte estrutura seus argumentos.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Credenciado no TJGO e no TJDF",
    desc: "Perito judicial registrado nos dois principais tribunais do Centro-Oeste. Advogados podem sugerir o nome ao juízo.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Domínio das normas técnicas aplicáveis",
    desc: "ABNT, IBRAOP, TCU, TCE-GO — utilizadas corretamente para cada tipo de caso, sustentando cada conclusão.",
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
    title: "IA aplicada à análise de documentos",
    desc: "Uso sistemático de inteligência artificial na análise de documentos e elaboração de laudos — profundidade técnica com agilidade.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: "IBAPE-GO nº 275 · CREA-GO",
    desc: "Associado ao IBAPE-GO e registrado no CREA-GO. Credenciado como avaliador no Banco do Brasil e na Caixa Econômica Federal.",
  },
];

const highlight = {
  title: "Volume controlado de trabalho",
  desc: "Cada processo recebe a atenção que merece. A Áddita não aceita mais casos do que consegue atender com excelência — sua perícia não vira número.",
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
        <h2 className={styles.h2}>O que fundamenta nossa atuação pericial</h2>
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
