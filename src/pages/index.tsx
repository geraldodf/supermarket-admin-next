import 'bootstrap/dist/css/bootstrap.min.css'
import MenuLateral from './../components/MenuLateral'
import Formulario from "../components/Formulario";
import Cabecalho from "../components/Cabecalho";
import TabelaProdutos from "../components/TabelaProdutos";
import {useState} from "react";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {

    const [tela, setTela] = useState('tabela')

    function mostrarFormAddProduto(tela: string) {
        setTela(tela)
    }

    return (
        <>

            <main className={`d-flex`}>
                <MenuLateral escolherTela={mostrarFormAddProduto}></MenuLateral>
                <div className={`container-fluid`} style={{padding: "0px 0px"}}>
                    <Cabecalho></Cabecalho>
                    {tela == 'tabela' ? (
                        <TabelaProdutos></TabelaProdutos>
                    ) : (
                        <Formulario></Formulario>
                    )}
                </div>
               </main>

        </>
    )
}
