import styles from "./ServiceSolution.module.css";

const useCases = [
  "Divórcio ou dissolução de união estável com imóvel em disputa",
  "Partilha de herança entre herdeiros",
  "Abertura ou encerramento de empresa com ativos imobiliários",
  "Contestação de valor avaliado por banco ou financeira",
  "Execução judicial ou leilão de imóvel",
  "Compra ou venda com necessidade de segurança sobre o valor justo",
];

export default function ServiceSolution() {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className={`label ${styles.labelDim}`}>A solução</span>
        <h2 className={styles.h2}>
          Metodologia NBR 14.653 — o laudo mais defensável que existe
        </h2>

        <div className={styles.panel}>
          <p className={styles.panelDesc}>
            A Áddita Engenharia realiza avaliações em conformidade com a NBR 14.653 —
            a norma técnica brasileira de avaliações de imóveis — utilizando
            preferencialmente o <strong>método comparativo com inferência estatística</strong>:
            seu imóvel é comparado com dados reais de mercado por meio de análise
            quantitativa, resultando no valor mais próximo da realidade e tecnicamente
            defensável em qualquer instância.
          </p>
          <p className={styles.panelDesc}>
            Quando a singularidade do imóvel exige, aplicamos outros métodos previstos
            em norma — sempre com o grau de fundamentação adequado ao uso que o laudo
            terá. Modelos geoestatísticos e inteligência artificial são aplicados às
            avaliações para maior precisão e fundamentação técnica.
          </p>
          <div className={styles.guarantee}>
            <span className={styles.guaranteeIcon}>✓</span>
            <p className={styles.guaranteeText}>
              O laudo emitido pela Áddita tem garantia de aceitação em processos
              administrativos e judiciais.
            </p>
          </div>
        </div>

        <h3 className={styles.whenTitle}>Quando você precisa de uma avaliação confiável</h3>
        <ul className={styles.caseList}>
          {useCases.map((c) => (
            <li key={c} className={styles.caseItem}>
              <span className={styles.arrow}>→</span>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
