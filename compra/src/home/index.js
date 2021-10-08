import { useState } from 'react'
import Produto from '../produto'

import { Container } from './styled'

export default function Home() {
    const [produtos, setProdutos] = useState([]);

    function listar() {
        const r = [
            {
              id: 10001,
              imagem: "https://www.notebookcheck.info/uploads/tx_nbc2/SamsungGalaxyS9__1_.jpg",
              titulo: "Samsung Galaxy S9",
              preco: "R$ 1700",
              descricao: "Celular guerreiro",
              especificacoes: "yo boa tarde 🗿👍 "
            },
            {
              id: 10002,
              imagem: "http://3.bp.blogspot.com/-Tjlga06p39Q/VJBAgL2xLlI/AAAAAAAB9W0/HiKqWmWLQCc/s1600/Mitsubishi%2BLancer%2BEvolution%2B-%2Bfrente%2B2.jpg",
              titulo: "Lancer Evolution X",
              preco: "R$ 165.000,00",
              descricao: "se quiser me dar um eu aceito",
              especificacoes: "VRUMMMM"
            },
            {
              id: 10003,
              imagem: "https://everythingisviral.com/wp-content/uploads/2020/11/moyai-emoji-1024x502.png",
              titulo: "Bruh",
              preco: "R$ 99999999",
              descricao: "🗿🗿🗿🗿🗿🗿🗿",
              especificacoes: "🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿" 
            }
          ]
      
          setProdutos(r);    
    }

    return (
        <Container>
            <h1> Sejam bem vindos </h1>
            <br />

            <button onClick={listar}> Listar produtos </button>
            <br />

            <div className="lista-produtos"> 
                {produtos.map(item =>
                    <Produto info={item} />  
                )}
            </div>
        </Container>

    )
}