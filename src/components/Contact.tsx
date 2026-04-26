"use client";
import { useState } from "react";
import styles from "./Contact.module.css";

const WA_AVALIACAO =
  "https://wa.me/5562920002426?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20%C3%81ddita%21%20Gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o%20do%20meu%20caso.";
const FORMSPREE_ID = "mrerylqy";

export default function Contact() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
    const tel = (form.elements.namedItem("tel") as HTMLInputElement).value;
    const caso = (form.elements.namedItem("caso") as HTMLTextAreaElement).value;

    fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ nome, telefone: tel, caso }),
    }).catch(() => {});

    setSent(true);
  }

  return (
    <section id="contato" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.h2}>
          Você tem um problema técnico real.
          <br />
          A Áddita está aqui para resolvê-lo.
        </h2>
        <p className={styles.sub}>
          Conte seu caso. Respondemos em até 24h — atendimento direto com o engenheiro responsável.
        </p>
        <div className={styles.card}>
          {sent ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>✅</div>
              <h3>Mensagem recebida!</h3>
              <p>Entraremos em contato em até 24 horas.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.group}>
                <label>Nome</label>
                <input name="nome" type="text" placeholder="Seu nome completo" required />
              </div>
              <div className={styles.group}>
                <label>WhatsApp / Telefone</label>
                <input name="tel" type="tel" placeholder="(62) 9 9999-9999" required />
              </div>
              <div className={styles.group}>
                <label>Descrição do caso</label>
                <textarea name="caso" rows={4} placeholder="Conte brevemente o que está acontecendo..." required />
              </div>
              <button type="submit" className={styles.submit}>
                Solicitar Avaliação do Caso
              </button>
            </form>
          )}
        </div>
        <p className={styles.waAlt}>
          Prefere pelo WhatsApp?{" "}
          <a href={WA_AVALIACAO} target="_blank" rel="noopener noreferrer">
            Clique aqui e fale agora →
          </a>
        </p>
      </div>
    </section>
  );
}
