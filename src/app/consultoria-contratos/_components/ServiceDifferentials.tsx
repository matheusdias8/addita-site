"use client";
import { useEffect, useRef } from "react";
import styles from "./ServiceDifferentials.module.css";

const diffs = [
  "Mais de R$ 2 bilhões em contratos de obras gerenciados — infraestrutura, saneamento e obras residenciais em vários estados do Brasil.",
  "13+ anos de experiência em grandes contratos de engenharia — obras públicas e privadas.",
  "Visão completa do contrato: atuou como gestor de obras, consultor técnico e assistente judicial — conhece todos os lados da mesa.",
  "Traduz engenharia para o direito — e o direito para a engenharia. Seus advogados e seu corpo técnico falam a mesma língua.",
  "Credenciada no Banco do Brasil, Caixa Econômica Federal, TJGO e TJDF.",
  "Associada ao IBAPE-GO (nº 275) e registrada no CREA-GO.",
  "Uso sistemático de inteligência artificial na análise de documentos contratuais — entregas mais rápidas, com maior profundidade técnica.",
  "Volume controlado de trabalho — compromisso real com a qualidade e o resultado de cada entrega.",
];

function CheckIcon() {
  return (
    <div className={styles.check}>
      <svg viewBox="0 0 12 12" fill="none" width={12} height={12}>
        <polyline
          points="1.5,6 4.5,9.5 10.5,2.5"
          stroke="#012E2C"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function ServiceDifferentials() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const items = gridRef.current?.querySelectorAll(`.${styles.item}`);
      if (!items) return;

      ctx = gsap.context(() => {
        gsap.from(Array.from(items), {
          opacity: 0,
          y: 20,
          duration: 0.45,
          stagger: 0.08,
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
        <span className={`label ${styles.labelDim}`}>Por que a Áddita?</span>
        <h2 className={styles.h2}>O que você ganha ao ter a Áddita ao seu lado</h2>
        <div ref={gridRef} className={styles.grid}>
          {diffs.map((d, i) => (
            <div key={i} className={styles.item}>
              <CheckIcon />
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
