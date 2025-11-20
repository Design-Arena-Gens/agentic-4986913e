import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Analizador de Modelo de Negocio | Business Model Canvas",
  description: "Herramienta inteligente para analizar y mejorar tu modelo de negocio con recomendaciones personalizadas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
