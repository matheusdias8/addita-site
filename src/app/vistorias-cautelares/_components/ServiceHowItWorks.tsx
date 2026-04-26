"use client";
import { useEffect, useRef } from "react";
import styles from "./ServiceHowItWorks.module.css";

const steps = [
  {
    n: "1",
    title: "Reunião de diagnóstico",
    desc: "Você apresenta o caso — obra, localização, cronograma previsto. Avaliamos o escopo necessário e definimos o plano de vistoria.",
  },
  {
    n: "2",
    title: "Proposta personalizada",
    desc: "O investimento varia conforme o número de imóveis, a extensão da área e a complexidade da obra. Enviamos uma proposta clara antes de iniciar.",
  },
  {
    n: "3",
    title: "Vistoria técnica",
    desc: "Visita in loco aos imóveis vizinhos, levantamento fotográfico completo, identificação e mapeamento de patologias preexistentes.",
  },
  {
    n: "4",
    title: "Relatório técnico",
    desc: "Documento assinado por engenheiro habilitado, com registro detalhado do estado das estruturas — válido para uso judicial e administrativo.",
  },
  {
    n: "5",
    title: "Monitoramento periódico",
    desc: "Para obras de maior porte ou risco, realizamos visitas periódicas para monitorar eventuais alterações e propor soluções técnicas antes que se tornem processos.",
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
        <h2 className={styles.h2}>Do primeiro contato à entrega do relatório</h2>
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
