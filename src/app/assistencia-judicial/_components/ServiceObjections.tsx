"use client";
import { useState } from "react";
import styles from "./ServiceObjections.module.css";

const items = [
  {
    q: "O que é assistência técnica em perícia judicial?",
    a: "É o direito de cada parte de indicar um engenheiro para acompanhar a perícia, analisar o laudo do perito do juízo, formular quesitos e apresentar pareceres complementares ou de impugnação — previsto no Art. 465 do CPC.",
  },
  {
    q: "Qual a diferença entre perito e assistente técnico?",
    a: "O perito é nomeado pelo juiz e trabalha para o processo. O assistente técnico é indicado pela parte e defende exclusivamente os interesses técnicos do seu contratante — podendo questionar o laudo, apontar erros e apresentar conclusões divergentes.",
  },
  {
    q: "Posso contratar assistência técnica mesmo com perito já nomeado?",
    a: "Sim. É um direito das partes previsto no CPC (Art. 465, §1º). Você pode indicar seu assistente para acompanhar a perícia, formular quesitos complementares e apresentar parecer técnico — mesmo depois que o laudo já foi entregue.",
  },
  {
    q: "Qual o prazo para indicar o assistente técnico?",
    a: "O prazo é fixado pelo juiz na mesma decisão que nomeia o perito. Geralmente é de 15 dias. É essencial agir rápido ao receber a intimação — entre em contato com a Áddita assim que possível.",
  },
  {
    q: "A impugnação do laudo pode mudar o resultado do processo?",
    a: "Sim — em muitos casos é ela que muda o resultado. Quando o assistente técnico aponta erros metodológicos concretos e fundamentados em norma, o juiz pode determinar complementação, esclarecimentos ou até nova perícia.",
  },
];

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width={14} height={14}>
      <polyline points="6,9 12,15 18,9" />
    </svg>
  );
}

export default function ServiceObjections() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <div className="container-sm">
        <span className={`label ${styles.labelDim}`}>Dúvidas respondidas</span>
        <h2 className={styles.h2}>Perguntas frequentes sobre assistência técnica</h2>
        {items.map((item, i) => (
          <div key={i} className={`acc-item${open === i ? " open" : ""}`}>
            <button className="acc-header" onClick={() => setOpen(open === i ? null : i)}>
              <span className="acc-q">{item.q}</span>
              <span className="acc-arrow">
                <ChevronIcon />
              </span>
            </button>
            <div className="acc-body">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
