import Link from "next/link";
import {faReceipt, faHouse, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface MenuLateralProps {
    escolherTela?: (tela: string) => void
}


export default function MenuLateral(props: MenuLateralProps) {

    return (

        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-light " style={{width: "280px", height: "100%"}}>
                <Link href={`/`}
                      className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                    <div>
                        <svg className="bi pe-none me-2" width="40" height="32">
                        </svg>
                        <span className="fs-4">Daroz Admin</span>
                    </div>
                </Link>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li onClick={() => props.escolherTela('home')}>
                        <a href="#" className="nav-link text-dark">
                            <svg className="bi pe-none me-2" width="16" height="16">
                            </svg>
                            <FontAwesomeIcon icon={faHouse}/> Início
                        </a>
                    </li>
                    <li onClick={() => props.escolherTela('tabela')}>
                        <a href="#" className="nav-link text-dark">
                            <svg className="bi pe-none me-2" width="16" height="16">
                            </svg>
                            <FontAwesomeIcon icon={faReceipt}/> Painel Produtos
                        </a>
                    </li>
                    <li onClick={() => props.escolherTela('formulario')}>
                        <a href="#" className="nav-item nav-link text-dark">
                            <svg className="bi pe-none me-2" width="16" height="16">
                            </svg>
                            <FontAwesomeIcon icon={faPlus}/> Cadastrar Produtos
                        </a>
                    </li>
                </ul>
                <hr/>
                <div className="dropdown">
                    <a href="#"
                       className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
                       data-bs-toggle="dropdown" aria-expanded="false">
                        <img
                            src={"https://avatars.githubusercontent.com/u/78937716?s=400&u=156f56b487fd56e87663f471dcddb04c1f0d3d56&v=4"}
                            alt="" width="32" height="32"
                            className="rounded-circle me-2"/>
                        <strong>Administrador</strong>
                    </a>
                </div>
            </div>
        </>
    )
}