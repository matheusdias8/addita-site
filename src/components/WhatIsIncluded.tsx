import styles from "./WhatIsIncluded.module.css";

const items = [
  "Visita técnica ao local ou ao cliente",
  "Laudo ou parecer técnico fundamentado em norma",
  "Análise do caso e estratégia prévia de atuação",
  "Documentação com validade judicial",
  "Atendimento direto com o engenheiro responsável",
  "Aplicação de IA e geoprocessamento quando cabível",
];

export default function WhatIsIncluded() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={`label ${styles.labelDim}`}>O que está incluso</span>
        <h2 className={styles.h2}>O que você recebe ao contratar a Áddita</h2>
        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item} className={styles.item}>
              <span className={styles.tick}>✔</span>
              {item}
            </div>
          ))}
        </div>
        <p className={styles.nota}>
          Investimento sob consulta após avaliação do caso. Sem surpresas. Sem letras miúdas.
        </p>
      </div>
    </section>
  );
}
