import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="antialiased relative overflow-x-hidden">

        {/* BACKGROUND */}
        <div className="fixed inset-0 -z-10 bg-[url('/fundo.png')] bg-cover bg-center" />
        <div className="fixed inset-0 -z-10 bg-black/40" />

        {/* NAVBAR */}
        <nav className="w-full ms-2 backdrop-blur-md h-20 flex items-center relative z-20">
          <Image
            src="/rookly.png"
            className="ms-5"
            alt="Logotipo"
            width={200}
            height={80}
          />

          <ul className="inline-flex text-xl ml-auto mr-10 text-white gap-10">
            <li><Link href="/">Como Funciona</Link></li>
            <li><Link href="/blog">Sobre Nós</Link></li>
            <li><Link href="/contato">Feed</Link></li>
            <li><Link href="/precos">Perfil</Link></li>
          </ul>
        </nav>

        {children}

      </body>
    </html>
  );
}