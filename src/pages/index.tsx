import 'bootstrap/dist/css/bootstrap.min.css'
import MenuLateral from './../components/MenuLateral'
import Formulario from "../components/Formulario";
import Cabecalho from "../components/Cabecalho";
import TabelaProduto from "../components/TabelaProduto";
import {useState} from "react";
import Inicio from "../components/Inicio";

export default function Home() {
    const [tela, setTela] = useState('tabela')
    const [produtoParaEdicao, setProdutoParaEdicao] = useState({})
    const [descricao, setDescricao] = useState('')
    const [codigo, setCodigo] = useState(null)

    function mostrarFormAddProduto(tela: string, produto: any = {}) {
        setTela(tela)
        produto && alterarTelaEProduto(produto)
    }

    function filtrarProdutosPorDescricao(descricao: string){
        setDescricao(descricao)
    }
    function filtrarProdutosPorCodigo(codigo: number){
        setCodigo(codigo)
    }

    function alterarTelaEProduto(produto: any) {
        setProdutoParaEdicao(produto)
    }
    return (
        <>
            <main className={`d-flex bg-light`} data-spy={'scroll'}>
                <MenuLateral escolherTela={mostrarFormAddProduto}></MenuLateral>
                <div className={`container-fluid `} style={{padding: "0px 0px"}}>
                    <Cabecalho enviarDescricao={filtrarProdutosPorDescricao} enviarCodigo={filtrarProdutosPorCodigo}></Cabecalho>
                    {tela == 'tabela' ? (
                        <TabelaProduto escolherTela={mostrarFormAddProduto} novaDescricao={descricao} novoCodigo={codigo}></TabelaProduto>
                    ) : tela == 'formulario' ? (
                        <Formulario titulo='Cadastrar Produto'></Formulario>
                    ) : tela == 'alterarProduto' ? (
                        <Formulario titulo='Alterar Produto' produtoRecebido={produtoParaEdicao}/>
                    ) : (
                        <Inicio></Inicio>
                    )}
                </div>
            </main>

        </>
    )
}
