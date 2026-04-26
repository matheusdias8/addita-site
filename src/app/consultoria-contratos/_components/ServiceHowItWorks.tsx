"use client";
import { useEffect, useRef } from "react";
import styles from "./ServiceHowItWorks.module.css";

const steps = [
  {
    n: "1",
    title: "Reunião de diagnóstico",
    desc: "Você apresenta o contrato ou a situação. Analisamos o cenário e damos uma avaliação honesta sobre as possibilidades — antes de qualquer compromisso financeiro de sua parte.",
  },
  {
    n: "2",
    title: "Proposta personalizada",
    desc: "O escopo de cada trabalho é único. Definimos juntos o que precisa ser feito e qual o investimento necessário.",
  },
  {
    n: "3",
    title: "Execução técnica",
    desc: "Análise documental, revisão de planilhas e cronogramas, elaboração de pareceres, cálculo de reajustes, montagem de argumentação técnica — conforme o que o caso exige.",
  },
  {
    n: "4",
    title: "Entrega e apresentação",
    desc: "Relatório ou parecer técnico redigido com clareza, em linguagem acessível para uso jurídico ou administrativo imediato.",
  },
  {
    n: "5",
    title: "Suporte ao longo do processo",
    desc: "Disponibilidade para complementações e esclarecimentos durante negociações, audiências ou processos administrativos.",
  },
];

export default function ServiceHowItWorks() {
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const items = listRef.current?.querySelectorAll(`.${styles.step}`);
      if (!items) return;

      ctx = gsap.context(() => {
        gsap.from(Array.from(items), {
          opacity: 0,
          y: 24,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: listRef.current, start: "top 80%" },
        });
      });
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section className={styles.section}>
      <div className="container-sm">
        <span className={`label ${styles.labelDim}`}>Como Funciona</span>
        <h2 className={styles.h2}>Do primeiro contato à entrega</h2>
        <ol ref={listRef} className={styles.list}>
          {steps.map((s) => (
            <li key={s.n} className={styles.step}>
              <div className={styles.num}>{s.n}</div>
              <div className={styles.content}>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
