import styles from "./ServiceProblem.module.css";

export default function ServiceProblem() {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className={`label ${styles.labelDim}`}>O problema</span>
        <h2 className={styles.h2}>
          Um portal imobiliário lista preços pedidos —
          <span className={styles.h2accent}> não o valor real do imóvel.</span>
        </h2>
        <p className={styles.p}>
          Quando um imóvel está no centro de uma disputa — num divórcio, numa partilha de
          herança, no encerramento de uma empresa, numa execução judicial — uma estimativa
          errada pode custar muito. Pesquisar em portais imobiliários parece suficiente,
          mas esses sites listam preços pedidos, não valores de mercado. Eles não avaliam
          padrão construtivo, estado de conservação, benfeitorias realizadas, infraestrutura
          do bairro, pontos de valorização e desvalorização nas proximidades — entre dezenas
          de outras variáveis que afetam o valor real do imóvel.
        </p>
        <div className={styles.callout}>
          <p className={styles.calloutText}>
            E quando o banco apresenta sua própria avaliação numa disputa, muita gente
            acredita que não tem como contestar. Tem — e com frequência, um laudo com
            maior grau de fundamentação muda o resultado.
          </p>
        </div>
      </div>
    </section>
  );
}
