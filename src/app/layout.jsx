'use client';

import { Geist, Geist_Mono, Bebas_Neue, Outfit } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState, Suspense } from "react";
import { usePathname } from "next/navigation"; // ✅ IMPORTAÇÃO CORRETA

// Componentes
import Login from "@/app/login/page";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Criamos um componente interno para usar o hook com segurança
function AuthWrapper({ children }) {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [autenticado, setAutenticado] = useState(false);
  const pathname = usePathname(); 

  // Normaliza para evitar erros de maiúsculas/minúsculas ou barras extras
  const pathNormalizado = pathname?.toLowerCase().replace(/\/$/, "") || "";
  const rotasPublicas = ["/login", "/cadastro"]; 
  const ehRotaPublica = rotasPublicas.includes(pathNormalizado);

  useEffect(() => {
    const usuario = localStorage.getItem('usuario');
    setAutenticado(!!usuario);
    setPageLoaded(true);
  }, [pathname]);

  if (!pageLoaded) return null;

  return (
    <>
      <Header />
      {autenticado || ehRotaPublica ? children : <Login />}
      <Footer />
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${bebasNeue.variable} ${outfit.variable}`}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>        
        <AuthWrapper>{children}</AuthWrapper>
      </body>
    </html>
  );
}