"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const WA_AVALIACAO =
  "https://wa.me/5562920002426?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20%C3%81ddita%21%20Gostaria%20de%20falar%20sobre%20o%20meu%20caso.";

export default function Hero() {
  const labelRef = useRef<HTMLSpanElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const microRef = useRef<HTMLParagraphElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

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
        gsap.set(imgRef.current, { opacity: 0, scale: 0.96 });

        const tl = gsap.timeline({ delay: 0.1 });
        tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
          .to(h1Ref.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.35")
          .to(subRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
          .to(btnsRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
          .to(microRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "-=0.25")
          .to(imgRef.current, { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }, "-=0.7");
      });
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <span ref={labelRef} className="label">
            Perícia Judicial · Assistência Técnica · Análise de Contratos · Vistorias Cautelares · Avaliações Imobiliárias
          </span>
          <h1 ref={h1Ref} className={styles.h1}>
            Perito Judicial de Engenharia em Goiânia
            <span className={styles.sub1}>
              Está em um processo e ainda não tem um profissional técnico ao seu lado?
            </span>
          </h1>
          <p ref={subRef} className={styles.sub}>
            A Áddita atua em perícias judiciais, assistência técnica e análise de contratos — com
            mais de 13 anos de experiência prática nos quatro lados de uma obra.
          </p>
          <div ref={btnsRef} className={styles.btns}>
            <a href={WA_AVALIACAO} target="_blank" rel="noopener noreferrer" className="btn">
              Fale sobre o seu caso →
            </a>
          </div>
          <p ref={microRef} className={styles.micro}>
            Sem compromisso &nbsp;•&nbsp; Respondemos em até 24h
          </p>
        </div>
        <div ref={imgRef} className={styles.visual}>
          <Image
            src="/images/casal.png"
            alt="Clientes analisando documentos com preocupação"
            width={420}
            height={480}
            style={{ width: "100%", height: 480, objectFit: "cover", objectPosition: "center top", borderRadius: 12 }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
