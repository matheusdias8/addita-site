"use client";
import { useEffect, useRef } from "react";
import styles from "./ServiceSolution.module.css";

const roles = [
  {
    tag: "Como contratante",
    desc: "Grupo CCR — gerenciando obras rodoviárias em interface com ANTT e ARTESP, com controle de medições e conformidade IFRS.",
  },
  {
    tag: "Como contratado e gestor",
    desc: "SENHA Engenharia — supervisionando mais de R$ 2 bilhões em contratos para SANEAGO, CODEVASF, CAGEPA, CAGECE e prefeituras.",
  },
  {
    tag: "Como operador público",
    desc: "Concessões plenas de saneamento, do planejamento à operação.",
  },
  {
    tag: "Como perito e consultor",
    desc: "Áddita Engenharia, desde 2023 — suporte técnico em disputas contratuais e análises independentes.",
  },
];

const services = [
  "Formação e análise de preços e BDI",
  "Análise de impostos e encargos contratuais",
  "Administração e controle de contratos em execução",
  "Claim (reivindicações contratuais) e elaboração de aditivos",
  "Reajustes contratuais e equilíbrio econômico-financeiro",
  "Análise de jogo de planilhas e jogo de cronograma",
  "Pareceres técnicos para processos judiciais e administrativos",
  "Suporte técnico a advogados, peritos e gestores públicos",
];

export default function ServiceSolution() {
  const rolesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const cards = rolesRef.current?.querySelectorAll(`.${styles.roleCard}`);
        if (cards) {
          gsap.from(Array.from(cards), {
            opacity: 0,
            y: 24,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: { trigger: rolesRef.current, start: "top 80%" },
          });
        }
        const items = servicesRef.current?.querySelectorAll("li");
        if (items) {
          gsap.from(Array.from(items), {
            opacity: 0,
            x: -16,
            duration: 0.45,
            stagger: 0.07,
            ease: "power2.out",
            scrollTrigger: { trigger: servicesRef.current, start: "top 80%" },
          });
        }
      });
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <span className={`label ${styles.labelDim}`}>A Solução</span>
        <h2 className={styles.h2}>
          A maioria dos consultores conhece contratos de um lado só.
          <span className={styles.h2accent}> O Eng. Matheus Dias Lima passou pelos quatro.</span>
        </h2>
        <div ref={rolesRef} className={styles.rolesGrid}>
          {roles.map((r) => (
            <div key={r.tag} className={styles.roleCard}>
              <span className={styles.roleTag}>{r.tag}</span>
              <p className={styles.roleDesc}>{r.desc}</p>
            </div>
          ))}
        </div>
        <p className={styles.midText}>
          Quem viveu cada papel sabe onde cada argumento é forte, onde é fraco — e como o
          judiciário e as administrações públicas interpretam cada cláusula.
        </p>
        <h3 className={styles.h3}>A Áddita atua em todas as frentes de um contrato de obras:</h3>
        <ul ref={servicesRef} className={styles.servicesList}>
          {services.map((s) => (
            <li key={s} className={styles.serviceItem}>
              <span className={styles.arrow}>→</span>
              {s}
            </li>
          ))}
        </ul>
        <p className={styles.footnote}>
          Com mais de 13 anos de experiência em contratos de grande porte — em obras públicas
          (B2G) e entre entes privados (B2B), em vários estados do Brasil — o Eng. Matheus Dias
          já viveu cada uma dessas situações por dentro. Essa vivência prática é o que diferencia
          uma consultoria que identifica o problema de uma que apenas o descreve.
        </p>
      </div>
    </section>
  );
}
