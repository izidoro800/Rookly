export default function Contato() {
  return (
    <main className="min-h-screen text-black py-10">

      {/* PERFIL */}
      <section className="bg-white max-w-4xl mx-auto rounded-xl shadow-md overflow-hidden">

        {/* Banner */}
        <div className="h-40 bg-blue-600"></div>

        {/* Foto + nome */}
        <div className="px-6 pb-6">
          <img
            src="https://i.pravatar.cc/150"
            className="w-32 h-32 rounded-full border-4 border-white -mt-16"
          />

          <h1 className="text-2xl font-bold mt-4">Seu Nome</h1>
          <p className="text-gray-600">
            Desenvolvedor Front-end | Next.js | UI/UX
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Guaratinguetá, São Paulo • 500+ conexões
          </p>
        </div>
      </section>

      {/* FEED */}
      <section className="max-w-4xl mx-auto mt-8 space-y-6">

        {/* POST 1 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/50"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-bold">Seu Nome</p>
              <p className="text-gray-500 text-sm">Desenvolvedor • 1 dia</p>
            </div>
          </div>

          <p className="mt-4">
            Finalizei hoje o desenvolvimento de uma landing page completa em
            Next.js com design responsivo e animações modernas.
          </p>

          <img
            src="https://picsum.photos/800/400?1"
            className="mt-4 rounded-lg"
          />

          <div className="flex justify-between text-gray-500 mt-4 text-sm">
            <span>👍 120 curtidas</span>
            <span>💬 15 comentários</span>
          </div>
        </div>

        {/* POST 2 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/50"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-bold">Seu Nome</p>
              <p className="text-gray-500 text-sm">Desenvolvedor • 3 dias</p>
            </div>
          </div>

          <p className="mt-4">
            Estou trabalhando em um sistema de autenticação com JWT e proteção
            de rotas no Next.js. Em breve compartilho o código no GitHub.
          </p>

          <div className="flex justify-between text-gray-500 mt-4 text-sm">
            <span>👍 85 curtidas</span>
            <span>💬 9 comentários</span>
          </div>
        </div>

        {/* POST 3 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/50"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-bold">Seu Nome</p>
              <p className="text-gray-500 text-sm">Desenvolvedor • 1 semana</p>
            </div>
          </div>

          <p className="mt-4">
            Compartilhando um dos meus projetos favoritos: um dashboard
            administrativo com gráficos interativos e controle de usuários.
          </p>

          <img
            src="https://picsum.photos/800/400?2"
            className="mt-4 rounded-lg"
          />

          <div className="flex justify-between text-gray-500 mt-4 text-sm">
            <span>👍 210 curtidas</span>
            <span>💬 27 comentários</span>
          </div>
        </div>

      </section>

    </main>
  );
}