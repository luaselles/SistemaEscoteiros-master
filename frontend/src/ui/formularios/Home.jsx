import '../../estilos/home.css'

export default function Home(props){
        async function fetchAbrirCaixa() {

        const timeElapsed = Date.now();
        const data = new Date(timeElapsed);
        
        if (window.confirm("Deseja abrir o caixa?")){
        await fetch('http://localhost:4000/abrirCaixa',{method:"POST"})
        .then(resposta=>resposta.json())
        .catch(error =>{
            alert(error)
        });
            alert("Caixa aberto (" +data + ")")
            document.getElementById("botao").disabled = true;
        }
    }

    return(
        <div className="cabecalho">
            <div className="div">
                    <a className="aa1" href="/eventos">Tabela de Eventos</a>
                    <a className="aa" href="/Produtos">Tabela de Produtos</a>
                    <a className="aa" href="/escoteiros">Tabela de Escoteiros</a>
                    <a className="aa" href="/recebermensalidade">Receber mensalidades</a>
                    <button id="botao" className="aa" onClick={() => fetchAbrirCaixa()}>
                        Abrir caixa
                    </button>
            </div>
        </div>
    );
}