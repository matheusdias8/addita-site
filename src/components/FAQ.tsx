"use client";
import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "Não sei se meu caso é complexo o suficiente para contratar uma perícia...",
    a: "Se existe uma disputa envolvendo valores, obras, contratos ou imóveis, existe espaço para prova técnica. A avaliação inicial é para entender isso. Você não precisa saber a resposta antes de perguntar.",
  },
  {
    q: "Já existe um perito nomeado pelo juiz. Para que contratar assistência técnica?",
    a: "O perito do juízo trabalha para o processo — não para você. A assistência técnica garante que nenhum erro ou omissão passe sem contestação. Em muitos casos, é ela que muda o resultado.",
  },
  {
    q: "Perícia de engenharia é caro...",
    a: "O custo de um laudo é sempre menor do que o custo de perder uma causa ou aceitar uma obra com defeito sem como provar. O investimento é apresentado só após entender o caso — sem compromisso.",
  },
  {
    q: "A Áddita atende em todo o Brasil?",
    a: "Atendimento presencial em Goiás e Distrito Federal. Para outros estados, avaliamos caso a caso — parte significativa do trabalho é feita remotamente.",
  },
  {
    q: "Quanto tempo leva para entregar um laudo?",
    a: "Depende da complexidade. O prazo estimado é apresentado junto com o escopo e o investimento — antes de qualquer assinatura.",
  },
  {
    q: "Posso contratar a Áddita mesmo que já exista um perito nomeado?",
    a: "Sim. A assistência técnica é um direito das partes no processo. Você pode indicar seu assistente para acompanhar a perícia, questionar o laudo e apresentar pareceres complementares.",
  },
  {
    q: "Como é definido o preço?",
    a: "Após entendermos o tamanho e a complexidade do caso. Não trabalhamos com tabelas fixas. O valor é apresentado antes de qualquer compromisso.",
  },
];

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width={14} height={14}>
      <polyline points="6,9 12,15 18,9" />
    </svg>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <div className="container">
        <span className={`label ${styles.labelDim}`}>Dúvidas respondidas</span>
        <h2 className={styles.h2}>Suas dúvidas, respondidas com honestidade</h2>
        {faqs.map((faq, i) => (
          <div key={i} className={`acc-item${open === i ? " open" : ""}`}>
            <button className="acc-header" onClick={() => setOpen(open === i ? null : i)}>
              <span className="acc-q">{faq.q}</span>
              <span className="acc-arrow">
                <ChevronIcon />
              </span>
            </button>
            <div className="acc-body">
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
