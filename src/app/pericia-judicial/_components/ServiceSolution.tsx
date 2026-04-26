"use client";
import { useState } from "react";
import styles from "./ServiceSolution.module.css";

const peritoAreas = [
  "Contratos de obras — jogo de planilhas, desequilíbrio econômico-financeiro, claims e aditivos",
  "Vícios construtivos — identificação, causa e custo de reparos",
  "Avaliações imobiliárias judiciais — valor de mercado com grau de fundamentação adequado ao processo",
  "Apuração de danos em obras e edificações",
  "Análise de medições, cronogramas e planilhas contratuais",
];

const assistenteActions = [
  "Elaboração de quesitos técnicos — perguntas certas direcionam a perícia para o que importa",
  "Acompanhamento de vistorias e inspeções periciais",
  "Análise crítica do laudo — identificação de falhas metodológicas, omissões e conclusões inconsistentes",
  "Pareceres técnicos para manifestações e impugnações",
  "Tradução do laudo pericial para linguagem acessível à equipe jurídica",
];

type Tab = "perito" | "assistente";

export default function ServiceSolution() {
  const [active, setActive] = useState<Tab>("perito");

  return (
    <section className={styles.section}>
      <div className="container">
        <span className={`label ${styles.labelDim}`}>Como atuamos</span>
        <h2 className={styles.h2}>Duas formas de atuar no seu processo</h2>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${active === "perito" ? styles.tabActive : ""}`}
            onClick={() => setActive("perito")}
          >
            <span className={styles.tabIcon}>⚖</span>
            Perito Nomeado pelo Juízo
          </button>
          <button
            className={`${styles.tab} ${active === "assistente" ? styles.tabActive : ""}`}
            onClick={() => setActive("assistente")}
          >
            <span className={styles.tabIcon}>🛡</span>
            Assistente Técnico da Parte
          </button>
        </div>

        {active === "perito" && (
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.badge}>Seção A</span>
              <h3 className={styles.panelTitle}>
                Perito judicial credenciado no TJGO e no TJDF —
                análise técnica imparcial para decisões que exigem clareza.
              </h3>
            </div>
            <p className={styles.panelDesc}>
              Como perito nomeado pelo juízo, a atuação da Áddita é orientada pela
              imparcialidade técnica e pelo rigor metodológico. Não há lado — há método,
              dados e conclusões fundamentadas.
            </p>
            <p className={styles.panelDesc}>
              O laudo pericial é elaborado com base documental integral, observância das
              normas técnicas aplicáveis e linguagem acessível para o juízo — sem achismos,
              sem interpretações subjetivas e sem margens para impugnação por falta de
              fundamentação.
            </p>
            <h4 className={styles.listTitle}>Áreas de atuação como perito do juízo:</h4>
            <ul className={styles.list}>
              {peritoAreas.map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.arrow}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {active === "assistente" && (
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.badge}>Seção B</span>
              <h3 className={styles.panelTitle}>
                Seu processo tem uma dimensão técnica que precisa ser acompanhada de perto.
                A Áddita atua ao lado da sua equipe jurídica — do início da perícia até o
                laudo final.
              </h3>
            </div>
            <p className={styles.panelDesc}>
              Como assistente técnico, a Áddita representa os interesses técnicos da parte
              contratante dentro do processo pericial. Isso significa estar presente em todas
              as etapas da perícia, elaborar quesitos que direcionem a análise para os pontos
              relevantes, acompanhar vistorias e contestar, com embasamento técnico, conclusões
              do laudo que não reflitam a realidade do caso.
            </p>
            <p className={styles.panelDesc}>
              A atuação vai além de uma simples opinião paralela — é uma análise estruturada
              que oferece à equipe jurídica os argumentos técnicos necessários para contestar
              ou referendar o laudo pericial com segurança.
            </p>
            <h4 className={styles.listTitle}>O que a Áddita faz como assistente técnico:</h4>
            <ul className={styles.list}>
              {assistenteActions.map((item) => (
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
