export default function Blog() {
  return (
    <main className="min-h-screen text-white">

      {/* PERFIL */}
      <section className="flex items-center gap-10 px-20 py-10">

        {/* Foto de perfil */}
        <img
          src="https://i.pravatar.cc/200"
          className="w-40 h-40 rounded-full border-4 border-white"
        />

        {/* Informações */}
        <div>
          <h1 className="text-4xl font-bold">SeuNomeDev</h1>
          <p className="text-gray-300 mt-2">
            Desenvolvedor Front-end | Criador de Sites
          </p>

          <div className="flex gap-10 mt-4 text-lg">
            <span><b>9</b> posts</span>
            <span><b>1.2k</b> seguidores</span>
            <span><b>350</b> seguindo</span>
          </div>
        </div>
      </section>

      {/* LINHA DIVISÓRIA */}
      <div className="border-b border-gray-700 mx-20 mb-10"></div>

      {/* POSTS */}
      <section className="px-20 grid grid-cols-3 gap-10 pb-20">

        {/* POST 1 */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
          <img
            src="https://picsum.photos/400/300?1"
            className="w-full h-60 object-cover"
          />

          <div className="p-4 space-y-2">
            <h2 className="font-bold text-lg">Landing page moderna</h2>
            <p className="text-gray-400 text-sm">
              Projeto desenvolvido em Next.js com design responsivo.
            </p>
          </div>
        </div>

        {/* POST 2 */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
          <img
            src="https://picsum.photos/400/300?2"
            className="w-full h-60 object-cover"
          />

          <div className="p-4 space-y-2">
            <h2 className="font-bold text-lg">Dashboard administrativo</h2>
            <p className="text-gray-400 text-sm">
              Interface para gerenciamento de usuários e dados.
            </p>
          </div>
        </div>

        {/* POST 3 */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
          <img
            src="https://picsum.photos/400/300?3"
            className="w-full h-60 object-cover"
          />

          <div className="p-4 space-y-2">
            <h2 className="font-bold text-lg">E-commerce completo</h2>
            <p className="text-gray-400 text-sm">
              Loja virtual com carrinho, pagamento e painel admin.
            </p>
          </div>
        </div>

        {/* POST 4 */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
          <img
            src="https://picsum.photos/400/300?4"
            className="w-full h-60 object-cover"
          />

          <div className="p-4 space-y-2">
            <h2 className="font-bold text-lg">Blog pessoal</h2>
            <p className="text-gray-400 text-sm">
              Sistema de posts dinâmicos com Markdown.
            </p>
          </div>
        </div>

        {/* POST 5 */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
          <img
            src="https://picsum.photos/400/300?5"
            className="w-full h-60 object-cover"
          />

          <div className="p-4 space-y-2">
            <h2 className="font-bold text-lg">Sistema de login</h2>
            <p className="text-gray-400 text-sm">
              Autenticação com JWT e proteção de rotas.
            </p>
          </div>
        </div>

        {/* POST 6 */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
          <img
            src="https://picsum.photos/400/300?6"
            className="w-full h-60 object-cover"
          />

          <div className="p-4 space-y-2">
            <h2 className="font-bold text-lg">Site institucional</h2>
            <p className="text-gray-400 text-sm">
              Página para apresentação de empresa e serviços.
            </p>
          </div>
        </div>

      </section>

    </main>
  );
}