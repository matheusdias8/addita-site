import styles from "./ServiceProblem.module.css";

const rows = [
  { aspect: "Quem indica", perito: "O juiz", assistente: "Você (a parte)" },
  { aspect: "Para quem trabalha", perito: "Para o processo", assistente: "Para você" },
  { aspect: "Pode questionar o laudo", perito: "Não", assistente: "Sim — é sua função" },
  { aspect: "Formula quesitos", perito: "Responde", assistente: "Formula e acompanha" },
  { aspect: "Apresenta parecer próprio", perito: "Não", assistente: "Sim" },
  { aspect: "Acompanha a vistoria", perito: "Realiza", assistente: "Fiscaliza e documenta" },
];

export default function ServiceProblem() {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className={`label ${styles.labelDim}`}>Entenda a diferença</span>
        <h2 className={styles.h2}>
          Perito do juízo × assistente técnico:
          <span className={styles.h2accent}> papéis opostos.</span>
        </h2>
        <p className={styles.p}>
          Muitas partes chegam ao processo confiando que o perito nomeado será imparcial e
          capaz de identificar todos os problemas. Na prática, o perito trabalha para o processo —
          e pode errar, omitir ou adotar metodologia questionável. Seu assistente técnico é quem
          defende seus interesses.
        </p>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Perito do Juízo</th>
                <th className={styles.thHighlight}>Assistente Técnico (Áddita)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.aspect}>
                  <td className={styles.tdAspect}>{r.aspect}</td>
                  <td>{r.perito}</td>
                  <td className={styles.tdHighlight}>{r.assistente}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
