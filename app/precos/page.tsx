import Topo from "@/componentes/topo";
import Post from "@/componentes/post"; 

export default async function Blog(){
        const resposta = await fetch('https://fakestoreapi.com/products') //REQUISIÇÃO GET
        const guardando = await resposta.json() // CONVERTE A RESPOSTA PARA JSON

        return (
        <>
            <Topo pagina="SENAC STORE" />
            
            <main className="mt-210">
                <div>
                     

                    {guardando.map(item=>(
                        
                        <p className="font-bold" key={item.id}>
                            
                            <span className="block ms-150 mr-150 mt-25 text-4xl"> {item.title}</span>
                            <img className="block ms-190 mr-180 w-100 h-150 " src={item.image} />
                            <span className="text-amber-50 mb-10 ms-260 text-7xl bg-green-900">{item.price}</span>
                            <span className="block text-green-900 bg-green-900">-----------------------</span>
                            <span className=" block ms-80 mr-80 text-3xl">{item.description}</span>
                            <span className="block ms-150 mt-3 float-left text-5xl">{item.rating.rate}⭐⭐⭐


                            </span>
                            <span className="block mt-3 ms-250 text-4xl">📱{item.category}</span>
                            
                        
                        </p>
                       
                    ))}
                </div>
            </main>
        </>
    )
}
