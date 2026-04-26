"use client";
import { useEffect, useRef } from "react";
import styles from "./ServiceHero.module.css";

const WA =
  "https://wa.me/5562920002426?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20%C3%81ddita%21%20Tenho%20interesse%20em%20Vistorias%20Cautelares.";

export default function ServiceHero() {
  const labelRef = useRef<HTMLSpanElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const microRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any;
    (async () => {
      const gsap = (await import("gsap")).default;
      ctx = gsap.context(() => {
        gsap.set(
          [labelRef.current, h1Ref.current, subRef.current, btnsRef.current, microRef.current],
          { opacity: 0, y: 32 }
        );
        const tl = gsap.timeline({ delay: 0.1 });
        tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
          .to(h1Ref.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.35")
          .to(subRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
          .to(btnsRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
          .to(microRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "-=0.25");
      });
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.inner}>
        <span ref={labelRef} className="label">
          Documentação técnica · Proteção jurídica · Construtoras e vizinhos
        </span>
        <h1 ref={h1Ref} className={styles.h1}>
          Vistorias Cautelares de Vizinhança
          <span className={styles.sub1}>
            Antes de a obra começar, o problema pode já estar sendo formado.
          </span>
        </h1>
        <p ref={subRef} className={styles.sub}>
          A Áddita Engenharia realiza vistorias cautelares de vizinhança — documentando o estado
          real dos imóveis próximos à obra antes que qualquer reclamação apareça.
        </p>
        <div ref={btnsRef} className={styles.btns}>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn">
            Conversar no WhatsApp →
          </a>
        </div>
        <p ref={microRef} className={styles.micro}>
          Sem compromisso &nbsp;•&nbsp; Respondemos em até 24h
        </p>
      </div>
    </section>
  );
}
