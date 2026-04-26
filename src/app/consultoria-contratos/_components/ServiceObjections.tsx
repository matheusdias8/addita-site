"use client";
import { useState } from "react";
import styles from "./ServiceObjections.module.css";

const items = [
  {
    q: "Será que ainda é possível reverter a situação?",
    a: "Antes de qualquer resposta definitiva, fazemos uma análise do contrato e do contexto. Dependendo da complexidade, oferecemos um diagnóstico inicial sem compromisso. Só avançamos quando o quadro está claro para você — e quando entendemos que há perspectivas reais de resultado.",
  },
  {
    q: "Vale a pena o investimento?",
    a: "Em contratos de engenharia, os valores em disputa tendem a ser expressivos. Quando a análise inicial aponta para possibilidades reais, o retorno sobre o investimento na consultoria costuma ser significativo. Em processos judiciais, os honorários da assistência técnica podem ser ressarcidos pela parte perdedora.",
  },
  {
    q: "O valor é alto.",
    a: "Os profissionais envolvidos têm formação técnica especializada e experiência acumulada em dezenas de contratos complexos. Mais do que isso: você terá ao lado alguém que entende o seu problema de verdade — não alguém que vai elaborar um parecer genérico. E com o diagnóstico inicial, você decide contratar apenas quando as perspectivas são favoráveis.",
  },
  {
    q: "Já tive má experiência com outras empresas.",
    a: "A Áddita opera com volume controlado de trabalhos. Não aceitamos mais do que conseguimos atender com excelência. Desde a primeira reunião, o nível de comprometimento com o seu caso fala por si.",
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
        <span className={`label ${styles.labelDim}`}>Dúvidas sobre a contratação</span>
        <h2 className={styles.h2}>Perguntas que todo cliente faz antes de contratar</h2>
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
