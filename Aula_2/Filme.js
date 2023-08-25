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

        if (this.avalicao === -1){
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

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const filmes = []

function assistido(){
    r1.question('Filme: ', (titulo)=>{
        const filme_now = filmes.find(filme => filme.titulo === titulo)
        if (filme_now) {
            filme_now.marcarAssistido();
            start();
        }else {
            console.log('Filme nao encontrado');
            start();
    }
    })
}

function avaliado(){
    r1.question('Filme: ', (titulo)=> {
        const filme_now = filmes.find(filme => filme.titulo === titulo)
        if (filme_now) {
            r1.question('Estrelas: ', (avaliacao) => {
                filme_now.avaliarFilme(avaliacao)
                start();
            })
        } else {
            console.log('Filme nao encontrado');
            start();
        }

    })
}
function adiconarFilme(){
    r1.question('\nNome do filme: ', function(nome){
        r1.question('Ano do filme: ', function(ano){
            r1.question('Genero: ', function(genero){
                r1.question('Duracao: ', function(duracao){
                    const filme = new Filme(nome, ano, genero, duracao);
                    filmes.push(filme);
                    start()
                });
            });
        });
    });    
}

function showMenu(){
    console.log('\n1. Adicionar novo filme')
    console.log('2. Marcar como assistido')
    console.log('3. Avaliar um filme')
    console.log('4. Exibir filmes')
    console.log('5. Sair')
}

function input(option){
    switch (option) {
        case 1:
            adiconarFilme();
            break;
        case 2:
            assistido();
            break;
        case 3:
            avaliado();
            break;
        case 4:
            console.log('### FILMES ###')
            console.log(filmes)
            start();
            break;
        case 5:
            console.log('Saindo');
            r1.close();
            break;
        default:
            console.log('Opcao invalida')
            start();
            break;
    }
}

function start(){
    showMenu()
    r1.question('Escolha um opcao: ', (opcao) =>{
        input(parseInt(opcao))
    });
}

start()
