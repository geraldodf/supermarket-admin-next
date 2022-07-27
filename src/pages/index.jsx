import 'bootstrap/dist/css/bootstrap.min.css'
import MenuLateral from './../components/MenuLateral'
import Formulario from "../components/Formulario";
import Cabecalho from "../components/Cabecalho";
import TabelaProdutos from "../components/TabelaProdutos";

export default function Home() {
    return (
        <>
            <div className={``}>

              <main className={`d-flex`}>
                  <MenuLateral></MenuLateral>
                  <div>
                      <Cabecalho></Cabecalho>
                      <TabelaProdutos></TabelaProdutos>
                      <Formulario></Formulario>
                  </div>
              </main>
            </div>



        </>
    )
}
