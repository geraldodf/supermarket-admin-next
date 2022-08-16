export default function Inicio() {
    return (
        <>
            <div className={`h3`}>
                Essa vai ser a tela de entrada!<br/>
                Aqui irá ter informações como:<br/>

                <div className={`m-3 p-3 border border-2 border-dark rounded`}>
                    - Algo para verificar se o produto precisa de reposição
                </div>

                <div className={`m-3 p-3 border border-2 border-dark rounded`}>
                    -Venda; (Podendo ser diariamente, mensalmente, semanalmente e anualmente)
                </div>

                <div className={`m-3 p-3 border border-2 border-dark rounded`}>
                    -Lucro; (Podendo ser diariamente, mensalmente, semanalmente e anualmente)
                </div>

                <div className={`m-3 p-3 border border-2 border-dark rounded`}>
                    -Produtos Mais Vendidos; (Podendo ser diariamente, mensalmente, semanalmente e anualmente)
                </div>

            </div>
        </>
    )
}