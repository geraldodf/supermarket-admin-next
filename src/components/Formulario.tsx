import {useEffect, useState} from "react";
import axios from "axios";
import {right} from "@popperjs/core";


export default function Formulario() {

    const tiposDosProdutos = {
        "Grãos": 1,
        "Hortifruti": 3,
        "Friamberia": 10,
        "Biscoitos e Bolachas": 14,
        "Massas": 13,
        "Temperos e Condimentos": 12
    }

    const [descricao, setDescricao] = useState('')
    const [codigo, setCodigo] = useState('')
    const [precoDeCompra, setPrecoDeCompra] = useState('')
    const [precoDeVenda, setPrecoDeVenda] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [tipoProduto, setTipoProduto] = useState('')

    const baseUrl = "http://localhost:8080/api/"

    async function criarProduto() {
        await axios({
            url: `${baseUrl}produtos`,
            method: "post",
            data: {
                descricao,
                codigo: +codigo,
                precoDeCompra: +precoDeCompra,
                precoDeVenda: +precoDeVenda,
                quantidade: +quantidade,
                idTipoDoProduto: +tipoProduto
            }
        })
    }

    return (
        <>
            <div className={`rounded-4 p-4 m-5 shadow-lg bg-light`} >
                <form className="row g-3" style={{marginRight: "4rem !important"}}>
                    <div className="col-md-6">
                        <label htmlFor="" className="form-label">Descrição</label>
                        <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)}
                               className="form-control" id="inputDescricao"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="" className="form-label">Código</label>
                        <input type="text" value={codigo} onChange={e => setCodigo(e.target.value)}
                               className="form-control" id="inputCodigo"/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="" className="form-label">Preço de Compra</label>
                        <input type="number" value={precoDeCompra} onChange={e => setPrecoDeCompra(e.target.value)}
                               className="form-control" id="inputPrecoCompra"/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="" className="form-label">Preço de Venda</label>
                        <input type="number" value={precoDeVenda} onChange={e => setPrecoDeVenda(e.target.value)}
                               className="form-control" id="inputPrecoVenda"/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="" className="form-label">Quantidade</label>
                        <input type="number" value={quantidade} onChange={e => setQuantidade(e.target.value)}
                               className="form-control" id="inputQuantidade"/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="" className="form-label">Seção</label>
                        <select id="inputState" className="form-select"
                                onChange={e => setTipoProduto(tiposDosProdutos[e.target.value])}>
                            <option selected>Selecione a seção do produto</option>
                            <option>Grãos</option>
                            <option>Hortifruti</option>
                            <option>Friamberia</option>
                            <option>Biscoitos e Bolachas</option>
                            <option>Massas</option>
                            <option>Temperos e Condimentos</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={criarProduto}>Confimar Cadastro
                        </button>
                    </div>
                </form>
            </div>

        </>
    )

}