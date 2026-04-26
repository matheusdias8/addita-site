import styles from "./ServiceCTA.module.css";

const WA =
  "https://wa.me/5562920002426?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20%C3%81ddita%21%20Gostaria%20de%20falar%20sobre%20consultoria%20em%20contratos.";

export default function ServiceCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.h2}>
          Tem um contrato que precisa de análise técnica especializada?
        </h2>
        <p className={styles.sub}>
          Fale com a Áddita Engenharia — e entenda o que está em jogo antes de tomar qualquer
          decisão.
        </p>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="btn">
          Conversar no WhatsApp →
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
