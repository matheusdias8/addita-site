"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const WA_URL =
  "https://wa.me/5562920002426?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20%C3%81ddita%21%20Gostaria%20de%20falar%20com%20o%20engenheiro.";

const SERVICES = [
  { label: "Consultoria em Contratos de Engenharia", href: "/consultoria-contratos" },
  { label: "Assistência Técnica Judicial", href: "/assistencia-judicial" },
  { label: "Perícia Judicial em Engenharia Civil", href: "/pericia-judicial" },
  { label: "Vistorias Cautelares", href: "/vistorias-cautelares" },
  { label: "Avaliações Imobiliárias", href: "/avaliacao-imoveis" },
];

interface HeaderProps {
  basePath?: string;
}

export default function Header({ basePath = "" }: HeaderProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      ref.current?.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header ref={ref} className={styles.header}>
      <div className={styles.inner}>
        <a href={`${basePath}#inicio`} className={styles.logo}>
          <Image
            src="/images/logo_horizontal_branco.png"
            alt="Áddita Engenharia"
            width={160}
            height={40}
            style={{ width: "auto", height: 40 }}
            priority
          />
        </a>
        <nav className={styles.nav}>
          <a href={`${basePath}#inicio`}>Início</a>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>
              Serviços <span className={styles.arrow}>▾</span>
            </button>
            <div className={styles.dropMenu}>
              {SERVICES.map((s) => (
                <a key={s.href} href={s.href}>{s.label}</a>
              ))}
            </div>
          </div>
          <a href={`${basePath}#sobre`}>Sobre</a>
          <a href={`${basePath}#contato`}>Contato</a>
        </nav>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={styles.cta}>
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}
