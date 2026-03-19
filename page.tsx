import Topo from "@/componentes/topo";
import Post from "@/componentes/post"; 

export default async function Blog(){
        return (
        <>
            <Topo  pagina="Sobre Nós" />
            
            <main className="mt- ml-10 ">
                
                <div className=" ">
                    <img alt='Aperto de mão' src='/reuniao.png' className="h-70 w-50 float-left ml-210 absolute text-white mt-38" />
                   <p className='text- ml-115 text-white'> <u><strong>Quem Somos? </strong></u></p>
                   <p className="mt-10 ml-115 text-white">Somos uma empresa dedicada a fornecer soluções de alta qualidade para nossos clientes.  Nossa missão é <br/> 
                    proporcionar excelência e inovação em tudo o que fazemos, garantindo a satisfação e o sucesso de nossos parceiros.</p>
                </div>

                <div> 
                   <p className="mt-15 ml-130 text-white"><u><strong> Nossa História</strong></u></p>
                   <img alt='prédio' src='/predio.png' className="h-50 w-50 float-left ml-115 mt-5" />
                   <p className="mt-10 ml-170 text-white "><u><strong>  Nossa Jonada </strong></u></p>
                   <p className="ml-170 mt-5 text-white"> Fundada em [ano], nossa empresa vem crescendo e se<br/>
                    destacando no mercado. Ao longo dos anos,<br/>
                     conquistamos a confiança de nossos clientes e construír-<br/>mos uma trajetória de sucesso.</p>
                </div>

                <div className="">
                    <p className='text-white mt-40 ml-120 '><u><strong>  Nossos Valores</strong></u> </p>

<img alt='Aperto de mão' src='/compromisso.png' className="h-25 w-25 float-left ml-132  absolute" />
                    <p className='text-white mt-20 ml-120 float-left'> <u> <strong>Clientes em primeiro Lugar  </strong></u></p>
                       <p className='mt-30 ml-120 float-left absolute text-white'>Estamos fechados<br/> com a excelência e a ética. </p>

 <img alt='Lampada' src='/lampada.png' className="h-25 w-25 float-left ml-207 absolute text-white" />
                      <p className='text-white mt-20 ml-40 float-left '> <u><strong>inovação</strong></u> </p>
                                <p className='mt-30 ml-200 float-left absolute text-white'>Estamos fechadoss<br/> com a excelência e a ética. </p>
 <img alt='Aperto de mão' src='/alvo.png' className="h-25 w-25 float-left ml-290 absolute text-white" />
                        <p className='text-white mt-20 ml-60 float-left'><u><strong> Compromisso</strong></u></p>
                        <p className='mt-30  float-left absolute ml-280 text-white'>Estamos comprometidos <br/> com a excelência e a ética. </p>
                </div>

                <div>
                    <p className="mt-70 ml-156 text-white"><u><strong> Nossa Equipe</strong></u> </p>
                     <img alt='Aperto de mão' src='/equipe.png' className="h-50 w-40 float-left mt-5 ml-150 absolute" />
                    <p  className="mt-10 ml-200 text-white"> <u><strong>Uma Equipe dedicada e experiente </strong></u></p>
                    <p  className="mt-5 ml-200 text-white">Contamos com uma equipe de<br/>
                         profissionais altamente qualificados<br/>
                          prontos para atender você.</p>
                </div>
            </main>
        </>
    )
}
