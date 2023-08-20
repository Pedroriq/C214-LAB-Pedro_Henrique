class Filme {
    constructor(titulo, ano, genero, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = false;
        this.avalicao = -1;
    }

    exibirDetalhes(){
        let statusAssistido;
        let statusAvaliacao;
        if (this.assistido == false){
            statusAssistido = 'Nao assistido';
        }else {
            statusAssistido = 'Assistido'
        }

        if (this.avalicao == -1){
            statusAvaliacao = 'Filme não avaliado'
        }else{
            statusAvaliacao = `${this.avalicao} estrelas`
        }

        console.log(`Titulo do filme: ${this.titulo}\nAno: ${this.ano}\nGenero ${this.genero}\nDuracao: ${this.duracao} minutos\nAssistido: ${statusAssistido}\nAvaliacao: ${statusAvaliacao}\n`)

    }

    marcarAssistido(){
        this.assistido = true;
    }

    avaliarFilme(avaliacao){
        this.avalicao = avaliacao;
    }

}


    const filme1 = new Filme('Homem-Aranha: Através do Aranhaverso', 2023, 'Acao/Aventura', 140);
    filme1.exibirDetalhes();
    filme1.marcarAssistido();
    filme1.avaliarFilme(4);
    filme1.exibirDetalhes();

    const filme2 = new Filme('Liga da Justiça de Zack Snyder', 2021, 'Acao/Aventura', 242);
    filme2.exibirDetalhes();
    filme2.marcarAssistido();
    filme2.avaliarFilme(3);
    filme2.exibirDetalhes();

    const filme3 = new Filme('Star Wars VI - O Retorno de Jedi', 1983, 'Ficcao Cientifica/Acao', 135);
    filme3.exibirDetalhes();
    filme3.marcarAssistido();
    filme3.avaliarFilme(4);
    filme3.exibirDetalhes();
