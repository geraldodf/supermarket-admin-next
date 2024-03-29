import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "axios";

interface CabecalhoProps {
    enviarDescricao?: (descricao: string) => void
    enviarCodigo?: (codigo: number) => void
}

export default function Cabecalho(props: CabecalhoProps) {

    const [descricao, setDescricao] = useState('')
    const [codigo, setcodigo] = useState(0)

    return (
        <>
            <header className="p-3 text-black bg-info">
                <div className="container">
                    <div
                        className="d-flex align-items-center justify-content-center justify-content-lg-start">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                        </svg>

                        <ul className="nav col-lg-auto me-lg-auto  justify-content-center mb-md-0 ">
                            <li><a href="#" className="nav-link px-2 text-black">
                                <FontAwesomeIcon style={{ margin: "0 5px" }} icon={faBoxesStacked} />
                                Gerenciamento de Estoque
                            </a></li>
                        </ul>

                        <div className={`d-flex justify-content-end`}>
                            <form className=" col-5 mb-3 mb-lg-0 me-lg-3">
                                <input type="search" className="form-control form-control-dark"
                                    placeholder="Pesquisar por Descrição" value={descricao}
                                    onChange={e => setDescricao(e.target.value)}
                                    aria-label="Search" />
                            </form>
                            <form className=" col-3 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                                <input type="number" className="form-control form-control-dark"
                                    placeholder="Pesquisar por Código" value={codigo}
                                    onChange={e => setcodigo(+e.target.value)}
                                    aria-label="Search" />
                            </form>
                            <div className=" col-3">
                                <button type="button" className="btn btn-primary"
                                    onClick={() => {
                                        if (descricao != '') {
                                            props.enviarDescricao(descricao)
                                        } else if (codigo != null && codigo != 0) {
                                            props.enviarCodigo(codigo)
                                        }
                                    }}>Pesquisar
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}