"use client";
import { useState } from "react";
import styles from "./ServiceObjections.module.css";

const items = [
  {
    q: "É só comparar com imóveis na internet.",
    a: "Portais imobiliários listam preços pedidos — não valores de mercado. Uma avaliação confiável considera padrão construtivo, estado de conservação, benfeitorias, infraestrutura do bairro e pontos de valorização e desvalorização, entre outras variáveis. A diferença entre um valor \"da internet\" e o valor técnico real pode ser de dezenas de milhares de reais — especialmente em disputas judiciais onde esse número define quem paga o quê.",
  },
  {
    q: "Tenho boa relação com meu sócio ou ex-cônjuge — não teremos problemas com a partilha.",
    a: "A maioria das disputas que chegam ao judiciário começa exatamente em negociações onde as partes achavam que não teriam problemas. O papel de um avaliador independente é apresentar um valor neutro e tecnicamente fundamentado — que preserve a relação, porque ninguém pode questionar um número que não é de ninguém.",
  },
  {
    q: "Não tem como refutar o valor avaliado pelo banco.",
    a: "Tem — e com frequência. Avaliações bancárias são padronizadas e nem sempre verificam todas as variáveis que impactam o valor real do seu imóvel. Um laudo com maior grau de fundamentação e precisão pode ser apresentado em juízo para contestar o valor apresentado pela instituição financeira.",
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
        <h2 className={styles.h2}>Objeções comuns sobre avaliações imobiliárias</h2>
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
