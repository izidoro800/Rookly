import Topo from "@/componentes/topo";
import Post from "@/componentes/post"; 

export default async function Blog(){
        const resposta = await fetch('https://dummyjson.com/posts') //REQUISIÇÃO GET
        const dados = await resposta.json() // CONVERTE A RESPOSTA PARA JSON
        const dados_formatados = dados.posts
        return (
        <>
            <Topo pagina="BLOG" />
            
            <main className="mt-110">
                <div>
                    {dados_formatados.map((item)=>(
                        <Post key={item.id} titulo={item.title}
                            descricao = {item.body}
                            dia={item.reactions.dislikes}
                            mes="Jan"
                            imagem="/blog_1.jpg"
                            tags={item.tags} />
                    ))}
                </div>
            </main>
        </>
    )
}
