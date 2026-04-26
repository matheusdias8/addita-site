"use client";
import { useEffect, useRef } from "react";
import styles from "./ServiceHowItWorks.module.css";

const steps = [
  {
    n: "1",
    title: "Reunião de diagnóstico",
    desc: "Você apresenta o caso e o imóvel. Entendemos a finalidade da avaliação e definimos a metodologia mais adequada à sua situação.",
  },
  {
    n: "2",
    title: "Proposta personalizada",
    desc: "O investimento varia conforme o tipo e a complexidade do imóvel. Enviamos uma proposta clara antes de iniciar qualquer trabalho.",
  },
  {
    n: "3",
    title: "Vistoria e levantamento de dados",
    desc: "Visita técnica ao imóvel, levantamento de características construtivas, pesquisa de mercado e coleta de dados comparativos reais.",
  },
  {
    n: "4",
    title: "Elaboração do laudo",
    desc: "Cálculo fundamentado conforme NBR 14.653, com apresentação metodológica completa e linguagem acessível — tanto para uso técnico quanto jurídico.",
  },
  {
    n: "5",
    title: "Entrega e suporte",
    desc: "Laudo assinado pelo engenheiro responsável, com suporte para eventuais questionamentos em processo judicial ou administrativo.",
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
