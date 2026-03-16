export default function Topo({pagina}){
    return (
        <main id="topo">
            <div className="float-left w-2/4 h-100 bg-black text-white p-15 text-center">
                <h2 className="font-[Impact] text-8xl mb-5">{pagina}</h2>
            </div>
    
            <div className="float-right 
                w-2/4 h-100 bg-black bg-[url(/barbeiro_banner.jpg)] bg-no-repeat bg-cover">
            </div>
        </main>
    )
}