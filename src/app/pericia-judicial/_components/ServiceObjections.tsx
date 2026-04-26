"use client";
import { useState } from "react";
import styles from "./ServiceObjections.module.css";

const items = [
  {
    q: "O processo já está em andamento — ainda dá tempo de contratar um assistente técnico?",
    a: "Sim. O assistente técnico pode ser constituído em qualquer fase do processo pericial. Quanto antes, melhor — mas mesmo após a entrega do laudo ainda é possível atuar na análise crítica e elaboração de manifestações técnicas.",
  },
  {
    q: "Já temos um advogado bom — é realmente necessário um assistente técnico?",
    a: "Bons advogados ganham no direito. Mas quando o objeto do processo é técnico, a batalha decisiva acontece na perícia. O assistente técnico é quem garante que a engenharia do processo seja disputada com o mesmo rigor que a parte jurídica.",
  },
  {
    q: "Como funciona a nomeação de perito pelo juízo?",
    a: "A indicação parte do próprio juízo, com base no cadastro de peritos credenciados no tribunal. A Áddita está credenciada no TJGO e no TJDF. Advogados que conhecem o trabalho também podem sugerir nomes ao juízo.",
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
        <h2 className={styles.h2}>Perguntas frequentes sobre perícia judicial</h2>
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
