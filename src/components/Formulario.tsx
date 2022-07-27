export default function Formulario() {
    return (
        <>
            <div className={`border border-primary rounded-4 p-5 m-5 shadow-lg`}>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="" className="form-label">Descrição</label>
                        <input type="text" className="form-control" id="inputDescricao"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="" className="form-label">Código</label>
                        <input type="text" className="form-control" id="inputCodigo"/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="" className="form-label">Preço de Compra</label>
                        <input type="number" className="form-control" id="inputPrecoCompra"/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="" className="form-label">Preço de Venda</label>
                        <input type="number" className="form-control" id="inputPrecoVenda"/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="" className="form-label">Quantidade</label>
                        <input type="number" className="form-control" id="inputQuantidade"/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="" className="form-label">State</label>
                        <select id="inputState" className="form-select">
                            <option selected>Selecione a seção do produto</option>
                            <option>Grãos</option>
                            <option>Hortifruti</option>
                            <option>Frios</option>
                            <option>Biscoitos e Bolachas</option>
                            <option>Massas</option>
                            <option>Condimentos</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Confimar Cadastro</button>
                    </div>
                </form>
            </div>
        </>
    )

}