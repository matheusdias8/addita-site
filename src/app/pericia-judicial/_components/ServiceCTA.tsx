import styles from "./ServiceCTA.module.css";

const WA =
  "https://wa.me/5562920002426?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20%C3%81ddita%21%20Tenho%20interesse%20em%20Per%C3%ADcia%20Judicial.";

export default function ServiceCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.h2}>
          Tem um processo com componente técnico de engenharia?
        </h2>
        <p className={styles.sub}>
          Fale com a Áddita — e entenda qual atuação faz mais sentido para o seu caso.
          Perito do juízo ou assistente técnico: avaliamos juntos antes de qualquer
          comprometimento.
        </p>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="btn">
          Conversar no WhatsApp →
        </a>
        <p className={styles.cred}>
          Eng. Matheus Dias Lima &nbsp;·&nbsp; CREA-GO &nbsp;·&nbsp; IBAPE-GO nº 275
          <br />
          Credenciado como perito judicial: TJGO &nbsp;·&nbsp; TJDF
          <br />
          Avaliador credenciado: Banco do Brasil &nbsp;·&nbsp; Caixa Econômica Federal
        </p>
      </div>
    </section>
  );
}
