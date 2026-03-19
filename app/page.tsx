import Image from "next/image";
import Link from "next/link";
import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">

      <div className="text-white max-w-3xl z-10 ms-20 mt-13">

        <h1 className={`${archivoBlack.className} text-8xl leading-tight absolute`}>
          Transforme sua ideia
        </h1>

        <h1 className={`${archivoBlack.className} text-8xl mt-22 leading-tight absolute text-[rgba(176,161,248,1)]`}>
          em realidade!
        </h1>

        <p className="text-xl md:text-4xl mt-50 text-gray-200 leading-relaxed absolute">
          Publique seu projeto e encontre programadores
        </p>

        <p className="text-xl md:text-4xl mt-60 text-gray-200 leading-relaxed absolute">
          talentosos para tirar sua ideia do papel!
        </p>

        <div className={`${archivoBlack.className} mt-8`}>
          <Link
            href="/questionario"
            className="mt-80 text-lg md:text-3xl bg-[#5931e3] hover:bg-[#7b60db] transition px-6 py-3 rounded-lg shadow-lg absolute inline-block z-30"
          >
            Cadastrar meu projeto
          </Link>
        </div>
      </div>

      <section className="relative flex items-center px-20 top-0 min-h-[80vh]">
        <div className="ms-210 mt-60 -translate-y-1/2 z-0 hidden md:block">
          <Image
            src="/foguete.png"
            alt="Mulher no foguete"
            width={500}
            height={500}
            className="w-[800px] lg:w-[1000px] mt-90 h-auto drop-shadow-2xl pointer-events-none"
            priority
          />
        </div>
      </section>

    </main>
  );
}