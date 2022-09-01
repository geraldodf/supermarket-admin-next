interface ProdutoProps {
    id?: number
    descricao?: string
    codigo?: number
    precoDeCompra?: number
    precoDeVenda?: number
    quantidade?: number
    tipoDoProduto?: number

}

export default class Produto {

    private _props: ProdutoProps

    constructor(props: ProdutoProps) {
        this._props = props;
    }

    get id(): number {
        return this._props.id;
    }

    set id(value: number) {
        this._props.id = value;
    }

    get descricao(): string {
        return this._props.descricao;
    }

    set descricao(value: string) {
        this._props.descricao = value;
    }

    get codigo(): number {
        return this._props.codigo;
    }

    set codigo(value: number) {
        this._props.codigo = value;
    }

    get precoDeCompra(): number {
        return this._props.precoDeCompra;
    }

    set precoDeCompra(value: number) {
        this._props.precoDeCompra = value;
    }

    get precoDeVenda(): number {
        return this._props.precoDeVenda;
    }

    set precoDeVenda(value: number) {
        this._props.precoDeVenda = value;
    }

    get quantidade(): number {
        return this._props.quantidade;
    }

    set quantidade(value: number) {
        this._props.quantidade = value;
    }

    get tipoDoProduto(): number {
        return this._props.tipoDoProduto;
    }

    set tipoDoProduto(value: number) {
        this._props.tipoDoProduto = value;
    }
}