import styles from "./ServiceProblem.module.css";

export default function ServiceProblem() {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className={`label ${styles.labelDim}`}>O problema</span>
        <h2 className={styles.h2}>
          Argumentos jurídicos não ganham
          <span className={styles.h2accent}> disputas técnicas.</span>
        </h2>
        <p className={styles.p}>
          Processos judiciais que envolvem engenharia raramente são resolvidos só com
          argumentos jurídicos. Quando o objeto da disputa é uma obra com defeito, um
          contrato desequilibrado, um imóvel com valor contestado ou um dano de difícil
          mensuração, a decisão depende de quem consegue demonstrar tecnicamente o que
          aconteceu — com método, documentação e fundamentação que resistam à contestação
          da parte contrária.
        </p>
        <div className={styles.callout}>
          <p className={styles.calloutText}>
            Um laudo mal elaborado atrasa o processo, é impugnado pelas partes e força a
            realização de nova perícia. Um laudo bem fundamentado encerra a discussão técnica
            e permite que o juízo decida com segurança.
          </p>
        </div>
      </div>
    </section>
  );
}
