import {faTrashCan, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import {useEffect, useState} from "react";

interface TabelaProdutosProps {
    escolherTela?: (tela: string, produto: any) => void
    novaDescricao?: string
    novoCodigo?: number
}

export default function TabelaProduto(props: TabelaProdutosProps) {

    const [produtos, setProdutos] = useState([])

    const baseUrl = "http://localhost:8080/api/"

    function exluirProduto(produtoExcluidoId: number) {
        setProdutos(produtos.filter(p => p.id != produtoExcluidoId))
        axios({
            url: `${baseUrl}produtos/${produtoExcluidoId}`,
            method: "DELETE"
        })
    }

    props.novaDescricao && pegarProdutosPorDescricao(props.novaDescricao)
    props.novoCodigo && pegarProdutosPorCodigo(props.novoCodigo)


    async function pegarProdutosPorDescricao(descricao: string) {
        const response = await axios({
            url: `${baseUrl}produtos/pesquisa-por-descricao?descricao=${props.novaDescricao}`,
            method: "get",
            responseType: "json"
        })
        setProdutos(response.data);
    }

    async function pegarProdutosPorCodigo(codigo: number) {
        const response = await axios({
            url: `${baseUrl}produtos/pesquisa-por-codigo?codigo=${props.novoCodigo}`,
            method: "get",
            responseType: "json"
        })
        setProdutos(response.data);
    }

    useEffect(() => {
        async function getProdutos() {
            const response = await axios({
                url: `${baseUrl}produtos`,
                method: "get",
                responseType: "json"

            })
            setProdutos(response.data);
        }

        getProdutos();
    }, [])

    function renderizarProdutos() {
        return produtos?.map((p) => {
            return (
                <tr key={p.id}>
                    <td>{p.descricao}</td>
                    <td>{p.codigo}</td>
                    <td>{p.precoDeVenda}</td>
                    <td>{p.quantidade}</td>
                    <td>{p.tipoDoProduto.nomeTipoDoProduto}</td>
                    <td>
                        <FontAwesomeIcon style={{margin: "0 5px"}} icon={faPenToSquare}
                                         onClick={() => props.escolherTela('alterarProduto', p)}/>
                        <FontAwesomeIcon style={{margin: "0 8px"}} icon={faTrashCan}
                                         onClick={() => exluirProduto(p.id)}/>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            <div className={`p-1 overflow-scroll p-5`} style={{height: "100%"}}>
                <table className="table-responsive table table-hover table-striped table-light">
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