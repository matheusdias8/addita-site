"use client";
import { useEffect, useRef } from "react";
import styles from "./ServiceHowItWorks.module.css";

const steps = [
  {
    n: "1",
    title: "Reunião de diagnóstico",
    desc: "Você apresenta o processo e a fase em que ele se encontra. Avaliamos o escopo de atuação necessário — como perito do juízo ou como assistente técnico — e as perspectivas técnicas do caso.",
  },
  {
    n: "2",
    title: "Proposta personalizada",
    desc: "Cada processo tem complexidade e volume documental próprios. A proposta é definida com base no esforço real necessário.",
  },
  {
    n: "3",
    title: "Execução técnica",
    desc: "Análise documental, vistorias, elaboração de quesitos, acompanhamento pericial ou produção do laudo — conforme o papel e o que o processo exige.",
  },
  {
    n: "4",
    title: "Entrega e apresentação",
    desc: "Laudo, parecer ou manifestação técnica redigidos com clareza e fundamentação adequada para uso judicial imediato.",
  },
  {
    n: "5",
    title: "Suporte durante o processo",
    desc: "Disponibilidade para esclarecimentos, complementações e manifestações técnicas ao longo do andamento processual.",
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

      ctx = gsap.context(() => {
        const items = listRef.current?.querySelectorAll(`.${styles.step}`);
        if (items) {
          gsap.from(Array.from(items), {
            opacity: 0,
            y: 24,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: { trigger: listRef.current, start: "top 80%" },
          });
        }
      });
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <span className={`label ${styles.labelDim}`}>Como funciona</span>
        <h2 className={styles.h2}>Do primeiro contato à entrega do laudo</h2>
        <ol ref={listRef} className={styles.steps}>
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
