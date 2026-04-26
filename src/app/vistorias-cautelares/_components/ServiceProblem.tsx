import styles from "./ServiceProblem.module.css";

export default function ServiceProblem() {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className={`label ${styles.labelDim}`}>O problema</span>
        <h2 className={styles.h2}>
          Quando um vizinho alega dano causado pela sua obra,
          <span className={styles.h2accent}> o ônus da prova é seu.</span>
        </h2>
        <p className={styles.p}>
          Sem uma vistoria cautelar realizada antes do início das obras, qualquer fissura,
          recalque ou dano preexistente nos imóveis vizinhos pode ser imputado à sua construtora.
          E provar o contrário, sem documentação técnica prévia, é extremamente difícil.
        </p>
        <p className={styles.p}>
          Uma liminar paralisando sua obra enquanto o processo corre pode custar muito mais
          do que qualquer vistoria.
        </p>
        <div className={styles.callout}>
          <p className={styles.calloutText}>
            A vistoria cautelar é o que separa uma construtora protegida de uma construtora
            vulnerável — independentemente do cuidado da equipe na execução.
          </p>
        </div>
      </div>
    </section>
  );
}
