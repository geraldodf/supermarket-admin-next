import {faTrashCan, faPenToSquare, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import {useEffect, useState} from "react";


export default function TabelaProdutos() {
    const [produtos, setProdutos] = useState([])

    const baseUrl = "http://localhost:8080/api/"
    useEffect(() => {
        async function getProdutos() {
            const response = await axios({
                url: `${baseUrl}produtos`,
                method: "get",
                responseType: "json"

            })
            console.log(response.data)
            setProdutos(response.data);
        }

        getProdutos();
    }, [])


    function renderizarProdutos() {
        return produtos?.map((p) => {
            return (
                <tr key={p.idTipoDoProduto}>
                    <td>{p.descricao}</td>
                    <td>{p.codigo}</td>
                    <td>{p.precoDeVenda}</td>
                    <td>{p.quantidade}</td>
                    <td>{p.tipoDoProduto.nomeTipoDoProduto}</td>
                    <td>
                        <FontAwesomeIcon style={{margin: "0 5px"}} icon={faPenToSquare}/>
                        <FontAwesomeIcon style={{margin: "0 8px"}} icon={faTrashCan}/>
                    </td>
                </tr>
            )
        })
    }

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
                    {renderizarProdutos()}


                    </tbody>
                </table>
            </div>
        </>
    )
}