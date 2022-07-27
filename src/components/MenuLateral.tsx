export default function MenuLateral() {
    return (

        <>
            <main className=" flex-nowrap">
                <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: "280px", height: "100%"}}>
                    <a href="/"
                       className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <svg className="bi pe-none me-2" width="40" height="32">
                        </svg>
                        <span className="fs-4">Daroz Admin</span>
                    </a>
                    <hr/>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link active" aria-current="page">
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
                        <li>
                            <a href="#" className="nav-link text-white">
                                <svg className="bi pe-none me-2" width="16" height="16">
                                </svg>
                                Produtos
                            </a>
                        </li>
                    </ul>
                    <hr/>
                    <div className="dropdown">
                        <a href="#"
                           className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={"https://github.com/mdo.png"} alt="" width="32" height="32"
                                 className="rounded-circle me-2"/>
                            <strong>Administrador</strong>
                        </a>
                    </div>
                </div>

            </main>

        </>

    )
}