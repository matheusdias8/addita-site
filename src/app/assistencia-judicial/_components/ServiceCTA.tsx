import styles from "./ServiceCTA.module.css";

const WA =
  "https://wa.me/5562920002426?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20%C3%81ddita%21%20Tenho%20interesse%20em%20Assist%C3%AAncia%20T%C3%A9cnica.";

export default function ServiceCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.h2}>
          O laudo do perito não reflete a realidade técnica?
        </h2>
        <p className={styles.sub}>
          Conte o caso. Analisamos o laudo e apresentamos uma estratégia técnica — antes de
          qualquer comprometimento financeiro de sua parte.
        </p>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="btn">
          Solicitar Avaliação →
        </a>
        <p className={styles.cred}>
          Eng. Matheus Dias Lima &nbsp;·&nbsp; CREA-GO &nbsp;·&nbsp; IBAPE-GO nº 275
          <br />
          Credenciado: Banco do Brasil &nbsp;·&nbsp; Caixa Econômica Federal &nbsp;·&nbsp; TJGO
          &nbsp;·&nbsp; TJDF
        </p>
      </div>
    </section>
  );
}
