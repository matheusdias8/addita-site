"use client";
import { useState } from "react";
import styles from "./ServiceObjections.module.css";

const items = [
  {
    q: "Minha obra é pequena — não vai causar dano nenhum.",
    a: "Independente do porte da obra, a vistoria cautelar é sempre uma proteção. O custo da vistoria é uma fração do custo de um processo. Se um vizinho fizer uma denúncia alegando dano causado pela sua obra, sem um relatório do estado anterior, reverter essa situação é muito difícil — mesmo que você não tenha causado nada.",
  },
  {
    q: "Minha equipe é boa e está tomando todos os cuidados.",
    a: "Uma boa equipe reduz riscos — mas não elimina fatores imprevisíveis. Com a vistoria cautelar bem documentada, se algo ocorrer, você atua apenas nos pontos que são de sua responsabilidade real. Sem ela, o risco é arcar com danos que já existiam — e provar isso sem documentação é quase impossível.",
  },
  {
    q: "Vale a pena o investimento?",
    a: "O custo de uma vistoria cautelar é incomparável ao custo de um processo judicial de vizinhança — que pode incluir obras de reparo não planejadas, honorários advocatícios e, nos casos mais graves, paralisação da obra por liminar judicial. A vistoria é um investimento de proteção com retorno direto na sua segurança jurídica e financeira.",
  },
  {
    q: "Já tive má experiência com outras empresas.",
    a: "A Áddita opera com volume controlado de contratos. Não aceitamos mais do que conseguimos atender com excelência. O padrão de entrega é percebido desde a primeira reunião.",
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
        <h2 className={styles.h2}>Perguntas frequentes sobre vistorias cautelares</h2>
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
