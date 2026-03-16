export default function Post({imagem, dia, mes, titulo, descricao, tags}){
    return (
        <article className="clear-both ms-70 mt-25">
                <div style={{backgroundImage:`url(${imagem})`}} className="w-180 h-90 bg-no-repeat">
                    <p className="text-white bg-red-500 px-8 py-3 absolute mt-75 ms-10 rounded-2xl">
                        <span className="block text-3xl font-bold">{dia}</span>
                        <span className="block">{mes}</span>
                    </p>
                </div>

                <div className="w-180 h-50 shadow-md">
                    <h1 className="font-bold text-2xl mt-14 ms-10">{titulo}</h1>
                    <p className="w-180 h-20 ms-10 mt-5 text-gray-500">{descricao}</p>
                    <p className="text-gray-400 ms-10">👤 {tags} | 💬 03 comentários </p>
                </div>
            </article>
    )
}

//