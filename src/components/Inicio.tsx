export default function Inicio() {
    return (
        <>
            <div className={`h3 container row flex justify-content-center`}>
                <div className={`flex text-center p-5`}>
                    <strong>Aqui será a tela de entrada!</strong><br />
                    <strong>Vai ser impletadas as seguintes features:</strong><br />
                </div>

                <div className={`m-3 p-3 border border-2 border-dark rounded col-5`}>
                    - Verificação automática se o produto precisa de reposição baseado nas vendas
                </div>

                <div className={`m-3 p-3 border border-2 border-dark rounded col-5`}>
                    - Quantidade de venda; (Podendo ser diariamente, mensalmente, semanalmente e anualmente)
                </div>

                <div className={`m-3 p-3 border border-2 border-dark rounded col-5`}>
                    -Lucro; (Podendo ser diariamente, mensalmente, semanalmente e anualmente)
                </div>

                <div className={`m-3 p-3 border border-2 border-dark rounded col-5`}>
                    -Produtos Mais Vendidos; (Podendo ser diariamente, mensalmente, semanalmente e anualmente)
                </div>
            </div>
        </>
    )
}