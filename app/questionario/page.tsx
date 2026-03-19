export default function Questionario() {
  return (
    <main className="min-h-screen flex items-center justify-center p-10 text-white">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-xl p-10 shadow-xl">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Formulário de Criação de Site
        </h1>

        <form className="space-y-6">

          {/* Nome */}
          <div>
            <label className="block mb-2 text-lg">Nome completo</label>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full p-3 rounded-lg bg-white/20 outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-lg">E-mail</label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full p-3 rounded-lg bg-white/20 outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Tipo de site */}
          <div>
            <label className="block mb-2 text-lg">
              Que tipo de site você deseja?
            </label>
            <select className="w-full p-3 rounded-lg bg-white/20 outline-none focus:ring-2 focus:ring-purple-400">
              <option>Selecione...</option>
              <option>Site institucional</option>
              <option>Loja virtual (e-commerce)</option>
              <option>Blog</option>
              <option>Landing page</option>
              <option>Outro</option>
            </select>
          </div>

          {/* Objetivo */}
          <div>
            <label className="block mb-2 text-lg">
              Qual é o objetivo principal do site?
            </label>
            <textarea
              rows={3}
              placeholder="Ex: vender produtos, apresentar empresa, captar clientes..."
              className="w-full p-3 rounded-lg bg-white/20 outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Público-alvo */}
          <div>
            <label className="block mb-2 text-lg">
              Quem é o público-alvo do site?
            </label>
            <input
              type="text"
              placeholder="Ex: jovens, empresas, estudantes..."
              className="w-full p-3 rounded-lg bg-white/20 outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Funcionalidades */}
          <div>
            <label className="block mb-2 text-lg">
              Quais funcionalidades você precisa?
            </label>
            <div className="space-y-2">
              <label className="block">
                <input type="checkbox" className="mr-2" />
                Formulário de contato
              </label>
              <label className="block">
                <input type="checkbox" className="mr-2" />
                Sistema de login
              </label>
              <label className="block">
                <input type="checkbox" className="mr-2" />
                Integração com pagamento
              </label>
              <label className="block">
                <input type="checkbox" className="mr-2" />
                Painel administrativo
              </label>
            </div>
          </div>

          {/* Prazo */}
          <div>
            <label className="block mb-2 text-lg">
              Qual o prazo desejado?
            </label>
            <select className="w-full p-3 rounded-lg bg-white/20 outline-none focus:ring-2 focus:ring-purple-400">
              <option>Sem pressa</option>
              <option>1 mês</option>
              <option>2-3 meses</option>
              <option>Urgente (menos de 2 semanas)</option>
            </select>
          </div>

          {/* Orçamento */}
          <div>
            <label className="block mb-2 text-lg">
              Qual é o orçamento estimado?
            </label>
            <select className="w-full p-3 rounded-lg bg-white/20 outline-none focus:ring-2 focus:ring-purple-400">
              <option>Não definido</option>
              <option>Até R$500</option>
              <option>R$500 - R$1500</option>
              <option>R$1500 - R$5000</option>
              <option>Acima de R$5000</option>
            </select>
          </div>

          {/* Referências */}
          <div>
            <label className="block mb-2 text-lg">
              Tem algum site como referência?
            </label>
            <input
              type="text"
              placeholder="Ex: www.exemplo.com"
              className="w-full p-3 rounded-lg bg-white/20 outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Descrição final */}
          <div>
            <label className="block mb-2 text-lg">
              Descreva melhor o que você precisa
            </label>
            <textarea
              rows={4}
              placeholder="Explique sua ideia com o máximo de detalhes possível..."
              className="w-full p-3 rounded-lg bg-white/20 outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Botão */}
          <div className="pt-4 text-center">
            <button
              type="submit"
              className="bg-[#5931e3] hover:bg-[#7b60db] transition px-8 py-3 rounded-lg text-xl shadow-lg"
            >
              Enviar formulário
            </button>
          </div>

        </form>
      </div>
    </main>
  );
}