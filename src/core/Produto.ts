export default class Produto {
    #id: number
    #descricao: string
    #codigo: number
    #precoDeCompra: number
    #precoDeVenda: number
    #quantidade: number
    #tipoDoProduto: number


    get id(): number {
        return this.#id;
    }

    set id(value: number) {
        this.#id = value;
    }

    get descricao(): string {
        return this.#descricao;
    }

    set descricao(value: string) {
        this.#descricao = value;
    }

    get codigo(): number {
        return this.#codigo;
    }

    set codigo(value: number) {
        this.#codigo = value;
    }

    get precoDeCompra(): number {
        return this.#precoDeCompra;
    }

    set precoDeCompra(value: number) {
        this.#precoDeCompra = value;
    }

    get precoDeVenda(): number {
        return this.#precoDeVenda;
    }

    set precoDeVenda(value: number) {
        this.#precoDeVenda = value;
    }

    get quantidade(): number {
        return this.#quantidade;
    }

    set quantidade(value: number) {
        this.#quantidade = value;
    }

    get tipoDoProduto(): number {
        return this.#tipoDoProduto;
    }

    set tipoDoProduto(value: number) {
        this.#tipoDoProduto = value;
    }
}