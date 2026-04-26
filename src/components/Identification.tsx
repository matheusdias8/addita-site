"use client";
import { useEffect, useRef } from "react";
import styles from "./Identification.module.css";

const WA_AVALIACAO =
  "https://wa.me/5562920002426?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20%C3%81ddita%21%20Gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o%20do%20meu%20caso.";

const items = [
  "Está em processo judicial envolvendo obra, contrato ou imóvel — e o laudo do perito não reflete a realidade técnica",
  "Precisa contestar uma perícia, mas não encontra um engenheiro que entenda o que está em jogo",
  "A construtora entregou a obra com defeitos e você não tem documentação técnica para provar",
  "Está discutindo aditivo, reequilíbrio financeiro ou BDI contestado e precisa de parecer técnico",
  "Tem audiência marcada e ainda não tem assistência técnica do seu lado",
  "Precisa encontrar falhas no laudo adverso com argumentos técnicos — não achismos",
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

export default function Identification() {
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
          y: 24,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        });
      });
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.h2}>Você se identifica com alguma dessas situações?</h2>
        <div ref={gridRef} className={styles.grid}>
          {items.map((text, i) => (
            <div key={i} className={styles.item}>
              <CheckIcon />
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className={styles.fechamento}>
          <p>Se você disse sim para qualquer uma, você está no lugar certo.</p>
          <a href={WA_AVALIACAO} target="_blank" rel="noopener noreferrer" className="btn">
            Solicitar Avaliação do Caso
          </a>
        </div>
      </div>
    </section>
  );
}
