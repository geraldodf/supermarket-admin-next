export default function TabelaProdutos() {
    return (
        <>
            <div className={`border-light`}>
                <table className="table table-striped table-dark border-light shadow
        ">
                    <thead>
                    <tr className={`fw-bold`}>
                        <th scope="col">Descrição</th>
                        <th scope="col">Código</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Seção Do Produto</th>
                        <th scope="col">Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Feijão</td>
                        <td>48596485</td>
                        <td>2.99</td>
                        <td>89</td>
                        <td>Grãos</td>
                        <button className={`col-6`}>Exc</button>
                        <button className={`col-6`}>Alt</button>


                    </tr>
                    <tr>
                        <td>Queijo</td>
                        <td>655</td>
                        <td>65.22</td>
                        <td>80</td>
                        <td>Frios</td>
                        <button className={`col-6`}>Exc</button>
                        <button className={`col-6`}>Alt</button>
                    </tr>
                    <tr>
                        <td>Bolacha Da Vaquinha</td>
                        <td>5655</td>
                        <td>3.59</td>
                        <td>250</td>
                        <td>Bolachas e Biscoitos</td>
                        <button className={`col-6`}>Exc</button>
                        <button className={`col-6`}>Alt</button>
                    </tr>


                    </tbody>
                </table>
            </div>
        </>
    )
}