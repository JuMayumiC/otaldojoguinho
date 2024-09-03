const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativas: [
            {
                texto: "Ganhar 100 dólares toda vez que te baterem, mas ninguém nem liga para você",
                afirmação: "afirmação",
            },
            {
                texto: "Que toda a espécie humana seja extinta, menos você (e que você não possa se suicidar)",
                afirmação: "afirmação",
            },
        ] 
    },
{
            enunciado: "No âmbito social, você prefere:",
            alternativas: [
            {
                texto: "Morrer pobre, mas o mundo é muito pacifico",
                afirmação: "afirmação",
            },
            {
                texto: "Você morre, mas a população continue viva",
                afirmação: "afirmação",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Restaurar sua espécie extinta preferida, mas a sua espécie atual preferida acaba",
                afirmação: "afirmação",
            },
            {
                texto: "Todos os gatinhos amam você, mas todo dia um pombo caga na sua cabeça",
                afirmação: "afirmação",
            },
        ]
    },
        {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "As cidades se tornam 100% sustentáveis, mas você sente como se estivesse respirando do lado do rio Tietê a cada hora por 20 min",
                afirmação: "afirmação",
            },
            {
                texto: "Você se torna imune aos pombos, mas todos os gatos te odeiam",
                afirmação: "afirmação",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "Desenvolver a cura para uma doença fodida, mas você contrai dengue hemorrágica",
                afirmação: "afirmação",
            },
            {
                texto: "Você pode ter qualquer eletrônico de graça, mas você se torna fisicamente igual ao Quasimodo",
                afirmação: "afirmação",
            },
        ]
    },
        {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "Você se torna imune a qualquer virose e bacterioses, mas você perde seu órgão reprodutor (perdeu o pau kk)",
                afirmação: "afirmação",
            },
            {
                texto: "Você tem o corpo dos seus sonhos, mas só pode se comunicar por pombo correio ",
                afirmação: "afirmação",
            },
        ]
    },
]
let atual = 0;
let perguntaAtual;


function mostraPergunta (){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado; 
    caixaAlternativas.textContent = "";
    mostraAlternativa();
}

function mostraAlternativa (){
    for(const pergunta of perguntaAtual.alternativas) {
    const botaoAlteranativa = document.createElement('button');
botaoAlteranativa.textContent = pergunta.texto;
botaoAlteranativa.addEventListener("click", function(){
    atual++;
    mostraPergunta();
})
caixaAlternativas.appendChild(botaoAlteranativa);    
}
}
mostraPergunta();
