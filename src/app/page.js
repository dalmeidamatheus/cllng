import NavBar from "@/components/NavBar";
import Image from "next/image";
import Titulo from "@/components/Titulo";
import c1 from "@/images/imgcard1.jpg";
import c2 from "@/images/imgcard2.jpg";



export default function Home() {
  return (
    <>
      <NavBar />

      <Titulo id="desafio" >Nosso desafio</Titulo>
      <div id="container" style={{ marginTop: "20px" }}>
        <p id="textocontainer">
          A falta de padronização na nomenclatura de mais de 66.000 itens no setor de saúde tem gerado impactos significativos em diversos processos. A variedade de termos utilizados para descrever produtos e medicamentos torna a comunicação entre profissionais de saúde, hospitais e farmácias mais complexa e propensa a erros. Neste contexto, é essencial buscar soluções que simplifiquem e otimizem esse cenário.
        </p>
      </div >

      <Titulo id="solucao">Optimus</Titulo>
      <div className="image-text-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px", marginBottom: "20px" }}>
        <div id="container" style={{ marginTop: "20px" }}>
          <p id="textocontainer">
            Nossa solução foi o software Optimus, com um layout que permite que o
            usuário selecione o medicamento desejado em um menu suspenso e insira a
            quantidade em miligramas (mg). A inclusão dos medicamentos 2 e 3 é opcional,
            proporcionando flexibilidade ao usuário. Os resultados fornecidos pelo software,
            após a conclusão do treinamento, são fundamentados nos medicamentos selecionados
            e em sua composição. Quando a entrada corresponde exatamente à composição
            presente no dataframe manipulado, o software apresenta um resultado preciso.
            No caso de uma composição que não seja uma correspondência exata, o software
            fornece o resultado mais próximo, baseado no treinamento realizado.
          </p>
        </div>
        <Image src={c1} alt="" id="imgcard1" style={{ marginTop: "20px" }} />
        <Image src={c2} alt="" id="imgcard1" style={{ marginTop: "20px" }} />
        <a href="https://challenge-sanofi-optimus.camilasayuri111.repl.co/" target="_blank" rel="noopener noreferrer">
      <button className="btn rounded-lg py-2 px-4 mt-4">Conheça o site</button>
    </a>

      </div>


      <Titulo id="video" >Assista ao nosso vídeo</Titulo>
      <section className="flex justify-center" style={{ height: "400px", marginTop: "20px" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cCzQJmqE6nI?si=93kTkWFW7Ms-GE39"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}