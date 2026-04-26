import styles from "./ServiceProblem.module.css";

const painPoints = [
  "BDI mal formado",
  "Reajustes não reclamados no prazo correto",
  "Equilíbrio econômico-financeiro ignorado",
  "Aditivos negociados sem embasamento técnico",
  "Cronograma que não reflete o que foi executado",
];

export default function ServiceProblem() {
  return (
    <section className={styles.section}>
      <div className="container-sm">
        <span className={`label ${styles.labelDim}`}>O Problema</span>
        <h2 className={styles.h2}>
          Nenhum contrato de engenharia começa com a intenção de gerar litígio.
          <span className={styles.h2accent}> Mas a realidade das obras é outra.</span>
        </h2>
        <p className={styles.p}>
          Imprevistos acontecem. Escopos mudam. Prazos se esticam. E quando isso ocorre, o
          contrato vira campo de batalha — e quem não tem domínio técnico e jurídico do documento
          sai em desvantagem.
        </p>
        <p className={styles.pBold}>Só que o problema começa antes do litígio.</p>
        <div className={styles.grid}>
          {painPoints.map((pt) => (
            <div key={pt} className={styles.painItem}>
              <span className={styles.dot} />
              {pt}
            </div>
          ))}
        </div>
        <p className={styles.p}>
          Em cada um desses pontos há dinheiro sendo deixado na mesa — ou risco sendo assumido
          sem perceber.
        </p>
        <p className={styles.p}>
          E quando chega o conflito, a equipe jurídica enfrenta laudos, planilhas e projetos que
          precisam de alguém que entenda engenharia para explicar o que está escrito — e o que
          deveria estar.
        </p>
      </div>
    </section>
  );
}
