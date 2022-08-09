import {faTrashCan, faPenToSquare, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function TabelaProdutos() {
    return (
        <>
            <div className={`p-1`}>
                <table className="table-responsive  table table-hover table-striped table-dark">
                    <thead>
                    <tr className={`fw-bold`}>
                        <th scope="col">Descrição</th>
                        <th scope="col">Código</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Seção Do Produto</th>
                        <th className={`col-1`} scope="col">Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Feijão</td>
                        <td>48596485</td>
                        <td>2.99</td>
                        <td>89</td>
                        <td>Grãos</td>
                        <td className={``}>
                            <FontAwesomeIcon style={{margin: "0 5px"}} icon={faPenToSquare}/>
                            <FontAwesomeIcon style={{margin: "0 8px"}} icon={faTrashCan}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Feijão</td>
                        <td>48596485</td>
                        <td>2.99</td>
                        <td>89</td>
                        <td>Grãos</td>
                        <td className={``}>
                            <FontAwesomeIcon style={{margin: "0 5px"}} icon={faPenToSquare}/>
                            <FontAwesomeIcon style={{margin: "0 8px"}} icon={faTrashCan}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Feijão</td>
                        <td>48596485</td>
                        <td>2.99</td>
                        <td>89</td>
                        <td>Grãos</td>
                        <td className={``}>
                            <FontAwesomeIcon style={{margin: "0 5px"}} icon={faPenToSquare}/>
                            <FontAwesomeIcon style={{margin: "0 8px"}} icon={faTrashCan}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Feijão</td>
                        <td>48596485</td>
                        <td>2.99</td>
                        <td>89</td>
                        <td>Grãos</td>
                        <td className={``}>
                            <FontAwesomeIcon style={{margin: "0 5px"}} icon={faPenToSquare}/>
                            <FontAwesomeIcon style={{margin: "0 8px"}} icon={faTrashCan}/>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}