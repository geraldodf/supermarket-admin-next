import {faBoxesStacked} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Cabecalho() {

    const [produtos, setProdutos] = useState([])
    const [descricao, setDescricao] = useState('')

    const baseUrl = "http://localhost:8080/api/"

    async function getProdutosPorDescricao() {
        console.log("Entrou fi")
        const response = await axios({
            url: `${baseUrl}produtos/pesquisa-por-descricao?descricao=${descricao}`,
            method: "get",
            responseType: "json"
        })
        setProdutos(response.data);
        console.log(produtos)
        console.log("Chegou aqui")
    }

    return (
        <>
            <header className="p-3 bg-light text-black ">
                <div className="container">
                    <div
                        className="d-flex align-items-center justify-content-center justify-content-lg-start">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                        </svg>

                        <ul className="nav col-lg-auto me-lg-auto  justify-content-center mb-md-0 ">
                            <li><a href="#" className="nav-link px-2 text-black">
                                <FontAwesomeIcon style={{margin: "0 5px"}} icon={faBoxesStacked}/>
                                Gerenciamento de Estoque
                            </a></li>
                        </ul>

                        <div className={`d-flex justify-content-end`}>
                            <form className=" col-5 mb-3 mb-lg-0 me-lg-3">
                                <input type="search" className="form-control form-control-dark"
                                       placeholder="Pesquisar por Descrição" value={descricao}
                                       onChange={e => setDescricao(e.target.value)}
                                       aria-label="Search"/>
                            </form>
                            <form className=" col-3 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                                <input type="search" className="form-control form-control-dark"
                                       placeholder="Pesquisar por Código"
                                       aria-label="Search"/>
                            </form>
                            <div className=" col-3">
                                <button type="button" className="btn btn-primary"
                                        onClick={() => getProdutosPorDescricao}>Pesquisar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}