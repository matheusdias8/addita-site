"use client";
import { useEffect, useRef } from "react";
import styles from "./ServiceSolution.module.css";

const steps = [
  {
    n: "1",
    title: "Análise prévia do caso",
    desc: "Estudo dos autos, documentos e contexto técnico antes de qualquer comprometimento — para que você saiba exatamente o que está em jogo.",
  },
  {
    n: "2",
    title: "Formulação de quesitos",
    desc: "Elaboração de perguntas técnicas estratégicas ao perito do juízo — para extrair informações relevantes e expor pontos que o laudo precisa responder.",
  },
  {
    n: "3",
    title: "Acompanhamento da vistoria",
    desc: "Presença técnica nas vistorias para garantir que todos os elementos relevantes sejam registrados e que nenhum ponto seja negligenciado.",
  },
  {
    n: "4",
    title: "Análise crítica do laudo",
    desc: "Revisão detalhada do laudo pericial — identificando erros metodológicos, omissões, referências normativas incorretas e conclusões questionáveis.",
  },
  {
    n: "5",
    title: "Parecer técnico e impugnação",
    desc: "Produção de parecer técnico fundamentado em norma — para impugnar o laudo, apresentar conclusões divergentes e sustentar sua posição no processo.",
  },
];

const whenMatters = [
  "Laudo com metodologia questionável ou imprecisa",
  "Conclusões que ignoram normas técnicas aplicáveis",
  "Omissão de vícios ou danos relevantes",
  "Valores de indenização sub ou superestimados",
  "Medições contratuais contestáveis",
  "BDI ou reequilíbrio calculados incorretamente",
];

export default function ServiceSolution() {
  const stepsRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const items = stepsRef.current?.querySelectorAll(`.${styles.step}`);
        if (items) {
          gsap.from(Array.from(items), {
            opacity: 0,
            y: 24,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: { trigger: stepsRef.current, start: "top 80%" },
          });
        }
      });
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <span className={`label ${styles.labelDim}`}>O que a Áddita faz</span>
        <h2 className={styles.h2}>Como atuamos como seu assistente técnico</h2>
        <div className={styles.grid}>
          <ol ref={stepsRef} className={styles.steps}>
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
          <div className={styles.aside}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Quando a assistência técnica faz diferença</h3>
              <ul className={styles.checklist}>
                {whenMatters.map((item) => (
                  <li key={item} className={styles.checkItem}>
                    <span className={styles.checkDot} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.urgency}>
              <span className={styles.urgencyIcon}>⚠</span>
              <div>
                <h3 className={styles.urgencyTitle}>Prazo para indicar assistente técnico</h3>
                <p className={styles.urgencyText}>
                  O prazo é fixado pelo juiz na mesma decisão que nomeia o perito. Não perca —
                  entre em contato assim que receber a intimação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
