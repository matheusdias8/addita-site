"use client";
import { useState } from "react";
import styles from "./ServiceSolution.module.css";

const constutoraItems = [
  "Levantamento fotográfico completo dos imóveis vizinhos antes do início das obras",
  "Mapeamento de todas as patologias e danos preexistentes nas estruturas",
  "Relatório técnico assinado por engenheiro habilitado — com validade jurídica imediata",
  "Monitoramento periódico durante a execução da obra (para obras de maior porte ou risco)",
  "Proposição de soluções técnicas preventivas antes que qualquer situação vire processo",
];

const vizinhoItems = [
  "Registro técnico do estado atual do seu imóvel antes de qualquer dano acontecer",
  "Documentação fotográfica e mapeamento de patologias existentes",
  "Relatório técnico com validade jurídica — prova do que existia antes da obra começar",
  "Acompanhamento de eventuais alterações durante o período de execução da obra vizinha",
  "Base sólida para qualquer reivindicação futura, caso danos sejam causados",
];

type Tab = "construtora" | "vizinho";

export default function ServiceSolution() {
  const [active, setActive] = useState<Tab>("construtora");

  return (
    <section className={styles.section}>
      <div className="container">
        <span className={`label ${styles.labelDim}`}>Como atuamos</span>
        <h2 className={styles.h2}>Proteção técnica para dois públicos distintos</h2>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${active === "construtora" ? styles.tabActive : ""}`}
            onClick={() => setActive("construtora")}
          >
            <span className={styles.tabIcon}>🏗</span>
            Para Construtoras e Incorporadoras
          </button>
          <button
            className={`${styles.tab} ${active === "vizinho" ? styles.tabActive : ""}`}
            onClick={() => setActive("vizinho")}
          >
            <span className={styles.tabIcon}>🏠</span>
            Para Vizinhos de Obra
          </button>
        </div>

        {active === "construtora" && (
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.badge}>Construtoras</span>
              <h3 className={styles.panelTitle}>
                Documentação técnica prévia que elimina o risco de arcar com danos
                que já existiam antes da sua obra.
              </h3>
            </div>
            <p className={styles.panelDesc}>
              A Áddita Engenharia realiza o levantamento completo do estado dos imóveis e
              estruturas vizinhas antes do início das obras. Em caso de surgimento de algum
              dano durante a execução, nossa equipe mantém o monitoramento e propõe soluções
              técnicas antes que a situação se torne um processo.
            </p>
            <p className={styles.panelDesc}>
              Com o relatório em mãos, se um vizinho alegar dano causado pela sua obra,
              você tem a documentação técnica para demonstrar o que existia antes — e atuar
              apenas nos pontos que são de sua responsabilidade real.
            </p>
            <h4 className={styles.listTitle}>O que inclui a vistoria para construtoras:</h4>
            <ul className={styles.list}>
              {constutoraItems.map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.arrow}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {active === "vizinho" && (
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.badge}>Vizinhos</span>
              <h3 className={styles.panelTitle}>
                A obra do vizinho começou — você tem direito a uma documentação
                técnica antes que qualquer dano aconteça.
              </h3>
            </div>
            <p className={styles.panelDesc}>
              Se você mora ou tem um imóvel próximo a uma obra em andamento, é seu direito
              documentar o estado atual do seu patrimônio antes que qualquer problema ocorra.
            </p>
            <p className={styles.panelDesc}>
              A vistoria cautelar realizada por iniciativa do vizinho cumpre dois papéis:
              protege seu patrimônio com documentação técnica válida juridicamente, e serve
              como prova em caso de litígio — estabelecendo com precisão o que existia antes
              e o que surgiu depois do início das obras ao lado.
            </p>
            <h4 className={styles.listTitle}>O que inclui a vistoria para vizinhos:</h4>
            <ul className={styles.list}>
              {vizinhoItems.map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.arrow}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
