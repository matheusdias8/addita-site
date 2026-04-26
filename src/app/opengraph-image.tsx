import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#012E2C",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 96px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Teal accent bar */}
        <div
          style={{
            width: 72,
            height: 6,
            background: "#35DBD2",
            borderRadius: 3,
            marginBottom: 40,
          }}
        />

        {/* Brand */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#35DBD2",
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Áddita Engenharia
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.15,
            marginBottom: 32,
            maxWidth: 900,
          }}
        >
          Perito Judicial de Engenharia em Goiânia
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            fontWeight: 400,
            color: "#A8D8D6",
            maxWidth: 800,
          }}
        >
          Perícia Judicial · Assistência Técnica · Análise de Contratos
        </div>

        {/* Bottom credentials */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 96,
            display: "flex",
            gap: 32,
            fontSize: 18,
            color: "#6BB8B4",
          }}
        >
          <span>Perito IBAPE-GO nº 275</span>
          <span>·</span>
          <span>TJ-GO</span>
          <span>·</span>
          <span>TJDFT</span>
          <span>·</span>
          <span>addita.com.br</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
