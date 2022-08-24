import {useState} from "react";
import axios from "axios";


export default function AlterarProduto() {

    const tiposDosProdutos = {
        "Grãos": 1,
        "Doces": 2,
        "Hortifruti": 3,
        "Bolachas e Biscoitos": 4,
        "Massas": 5,
        "Temperos e Condimentos": 6,
        "Laticineos": 7,
        "Padaria": 8,
        "Carnes": 9,
        "Friamberia": 10,
        "Higiene Pessoal": 15,
        "Bebidas": 16,
        "Bebidas Alcoolicas": 17,
        "Outros": 19
    }

    const [descricao, setDescricao] = useState('')
    const [codigo, setCodigo] = useState('')
    const [precoDeCompra, setPrecoDeCompra] = useState('')
    const [precoDeVenda, setPrecoDeVenda] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [tipoProduto, setTipoProduto] = useState('')

    const baseUrl = "http://localhost:8080/api/"

    async function atualizarProduto() {
        await axios({
            url: `${baseUrl}produtos`,
            method: "put",
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

            <div className={`rounded-4 p-4 m-5 shadow-lg bg-light justify-content-center`}><h3
                className={`text-center p-3`}>Alteração de Produto</h3>
                <form className="row g-3" style={{marginRight: "4rem !important"}}>
                    <div className="col-md-6">
                        <label htmlFor="" className="form-label">Descrição</label>
                        <input type="text" value={descricao} placeholder={descricao}
                               onChange={e => setDescricao(e.target.value)}
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
                            <option>Doces</option>
                            <option>Hortifruti</option>
                            <option>Bolachas e Biscoitos</option>
                            <option>Massas</option>
                            <option>Temperos e Condimentos</option>
                            <option>Laticineos</option>
                            <option>Padaria</option>
                            <option>Carnes</option>
                            <option>Friamberia</option>
                            <option>Higiene Pessoal</option>
                            <option>Bebidas</option>
                            <option>Bebidas Alcoolicas</option>
                            <option>Outros</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary " onClick={atualizarProduto}>Confimar Cadastro
                        </button>
                    </div>
                </form>
            </div>

        </>
    )

}