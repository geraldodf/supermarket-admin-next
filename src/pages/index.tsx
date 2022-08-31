import 'bootstrap/dist/css/bootstrap.min.css'
import MenuLateral from './../components/MenuLateral'
import Formulario from "../components/Formulario";
import Cabecalho from "../components/Cabecalho";
import TabelaProduto from "../components/TabelaProduto";
import AlterarProduto from "../components/AlterarProduto";
import {useState} from "react";
import Inicio from "../components/Inicio";

export default function Home() {
    const [tela, setTela] = useState('tabela')

    const [produtoParaEdicao, setProdutoParaEdicao] = useState({})

    function mostrarFormAddProduto(tela: string, produto: any = {}) {
        setTela(tela)
        produto && alterarTelaEProduto(produto)
    }

    function alterarTelaEProduto(produto: any) {
        setProdutoParaEdicao(produto)
    }

    return (
        <>
            <main className={`d-flex bg-light`} data-spy={'scroll'}>
                <MenuLateral escolherTela={mostrarFormAddProduto}></MenuLateral>
                <div className={`container-fluid `} style={{padding: "0px 0px"}}>
                    <Cabecalho></Cabecalho>
                    {tela == 'tabela' ? (
                        <TabelaProduto escolherTela={mostrarFormAddProduto}></TabelaProduto>
                    ) : tela == 'formulario' ? (
                        <Formulario></Formulario>
                    ) : tela == 'alterarProduto' ? (
                        <AlterarProduto produtoRecebido={produtoParaEdicao}></AlterarProduto>
                    ) : (
                        <Inicio></Inicio>
                    )}
                </div>
            </main>

        </>
    )
}
