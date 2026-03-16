import Topo from "@/componentes/topo"
export default function Contato(){
    return(
        <>
            <Topo pagina="CONTATO" />
            <main id="conteudo">
                <div className="ms-80 mt-110">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.707237807505!2d-45.19502962563673!3d-22.813309479321028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccc45681df6299%3A0xdafd98a36d707d9b!2sSenac%20Guaratinguet%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1770856134598!5m2!1spt-BR!2sbr" 
                    width="1280" height="350" loading="lazy"></iframe>
                </div>

                <div className="ms-80 mt-10">
                    <h2 className="font-bold text-2xl">Contate-nos</h2>
                    <div className="w-260 h-50 mt-5 float-left">
                        <form>
                            <textarea className="block border border-gray-300 
                            w-220 mb-10 p-3 h-60 resize-none" placeholder="Digite sua mensagem"></textarea>
                            <input className="border border-gray-300 w-105 p-2 me-10" placeholder="Seu Nome" />
                            <input className="border border-gray-300 w-105 p-2 me-10" placeholder="Seu E-mail" />
                            <input className="block border border-gray-300 mt-8 p-2 mb-5 w-220" placeholder="Assunto" />
                        </form>
                    </div>
                    <div className="w-120 h-50 mt-5 float-left">
                        <p className="mb-7">
                            <span className="text-3xl">🏠</span> Guaratinguetá, São Paulo<br />
                            <span className="text-gray-400">Centro, 12515-500</span>
                        </p>

                        <p className="mb-7">
                            <span className="text-3xl">📱</span> (12) 3132-5454 <br />
                            <span className="text-gray-400">Seg-Sex das 9h às 18h</span>
                        </p>

                        <p className="mb-7">
                            <span className="text-3xl">📨</span> barber@barber.com.br <br />
                            <span className="text-gray-400">Contate-nos a qualquer momento</span>
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}