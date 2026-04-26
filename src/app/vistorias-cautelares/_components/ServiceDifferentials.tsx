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
    desc: "Experiência prática em obras de infraestrutura, saneamento e habitação — conhece por dentro os riscos que cada tipo de obra impõe à vizinhança.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Supervisão de R$ 433 mi em obras habitacionais",
    desc: "Atuação direta em obras habitacionais em municípios de Goiás — sabe exatamente quais danos cada tipo de obra pode causar e como documentá-los.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Relatórios com validade jurídica reconhecida",
    desc: "Profundo domínio das normas técnicas e da legislação aplicável — cada relatório resiste à contestação judicial.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Atuação preventiva e reativa",
    desc: "Antes da obra (documentação prévia), durante (monitoramento) e após o litígio (suporte técnico). Cobertura completa em todas as fases.",
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
    title: "Geoprocessamento e IA na análise técnica",
    desc: "Uso de ferramentas de geoprocessamento e inteligência artificial na análise e documentação — profundidade técnica com agilidade.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: "IBAPE-GO nº 275 · CREA-GO",
    desc: "Credenciado no BB, CEF, TJGO e TJDF. Associado ao IBAPE-GO. Habilitação técnica reconhecida por instituições públicas e privadas.",
  },
];

const highlight = {
  title: "Volume controlado de trabalho",
  desc: "Cada vistoria recebe a atenção que merece. A Áddita não aceita mais contratos do que consegue atender com excelência — seu relatório não vira número.",
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
        <h2 className={styles.h2}>O que sustenta nossa documentação técnica</h2>
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
