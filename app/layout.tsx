import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

          {/* TEXTO */}
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Transforme sua ideia em realidade
            </h1>

            <p className="text-lg mb-8 text-blue-200">
              Publique sua ideia e encontre programadores prontos para
              transformar seu projeto em um produto real.
            </p>

            <div className="flex gap-4">
              <Link
                href="/postar"
                className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold"
              >
                Postar Projeto
              </Link>

              <Link
                href="/programadores"
                className="border border-white px-6 py-3 rounded-lg"
              >
                Encontrar Programadores
              </Link>
            </div>
          </div>

          {/* ESPAÇO PRA IMAGEM */}
          <div className="bg-blue-800 h-72 rounded-xl flex items-center justify-center">
            <p className="text-blue-200">Imagem / Ilustração</p>
          </div>

        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16">
            Como funciona
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">
                1. Descreva sua ideia
              </h3>
              <p className="text-gray-600">
                Explique o projeto, funcionalidades e requisitos que você
                deseja desenvolver.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">
                2. Receba propostas
              </h3>
              <p className="text-gray-600">
                Programadores interessados entram em contato com você para
                discutir o projeto.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">
                3. Comece o projeto
              </h3>
              <p className="text-gray-600">
                Escolha o programador ideal e transforme sua ideia em um
                produto real.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROGRAMADORES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16">
            Programadores disponíveis
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="border rounded-xl p-6">
              <div className="h-32 bg-gray-200 rounded mb-4"></div>
              <h3 className="font-semibold text-lg">Full Stack Developer</h3>
              <p className="text-gray-500">React • Node • SQL</p>
            </div>

            <div className="border rounded-xl p-6">
              <div className="h-32 bg-gray-200 rounded mb-4"></div>
              <h3 className="font-semibold text-lg">UI/UX Designer</h3>
              <p className="text-gray-500">Figma • UX Research</p>
            </div>

            <div className="border rounded-xl p-6">
              <div className="h-32 bg-gray-200 rounded mb-4"></div>
              <h3 className="font-semibold text-lg">Mobile Developer</h3>
              <p className="text-gray-500">Flutter • React Native</p>
            </div>

          </div>

          <div className="text-center mt-12">
            <Link
              href="/programadores"
              className="bg-blue-900 text-white px-8 py-3 rounded-lg"
            >
              Ver todos
            </Link>
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-blue-900 text-white py-20">
        <div className="text-center max-w-3xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            Pronto para tirar sua ideia do papel?
          </h2>

          <Link
            href="/postar"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold"
          >
            Começar agora
          </Link>

        </div>
      </section>

    </main>
  );
}