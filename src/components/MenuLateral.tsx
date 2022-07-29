import Link from "next/link";

interface MenuLateralProps {
    escolherTela?: (tela: string) => void
}


export default function MenuLateral(props: MenuLateralProps) {

    return (

        <>

            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: "280px", height: "100%"}}>
                <Link href={`/`}
                      className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <div>
                        <svg className="bi pe-none me-2" width="40" height="32">
                        </svg>
                        <span className="fs-4">Daroz Admin</span>
                    </div>
                </Link>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item" onClick={() => props.escolherTela('tabela')}>
                        <a href="#" className="nav-link text-white" aria-current="page">
                            <svg className="bi pe-none me-2" width="16" height="16">
                            </svg>
                            Início
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="16">
                            </svg>
                            Painel
                        </a>
                    </li>
                    <li onClick={() => props.escolherTela('formulario')}>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="16">
                            </svg>
                            Cadastrar Produtos
                        </a>
                    </li>
                </ul>
                <hr/>
                <div className="dropdown">
                    <a href="#"
                       className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
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