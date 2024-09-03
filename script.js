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
                texto: "Que um trem atropela 100 doguinhos, mas todos os que estão vivos têm um lar amável",
                afirmação: "afirmação",
            },
            {
                texto: "Que a sua mãe é atropelada e morre, mas todos os pai viram saudáveis e presentes",
                afirmação: "afirmação",
            },
        ] 
    },
{
            enunciado: "No âmbito social, você prefere:",
            alternativas: [
            {
                texto: "Que você fique rico, mas sua familia passe fome e vc não possa ajudar",
                afirmação: "afirmação",
            },
            {
                texto: "Que sua família fique rica, mas que te deixem em situação de rua",
                afirmação: "afirmação",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Que toda a fauna seja substituída para a do Era Mesozóica, mas os humanos se mantenham",
                afirmação: "afirmação",
            },
            {
                texto: "Que todos os humanos morram, mas a fauna se mantenha a mesma",
                afirmação: "afirmação",
            },
        ]
    },
        {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Ter incidência de placas tectônicas, mas um deles destrói os estados unidos para sempre",
                afirmação: "afirmação",
            },
            {
                texto: "Ter incidência de furacões, mas um deles te leva para oz",
                afirmação: "afirmação",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "Ter acesso a todos os jogos existentes, mas toda vez que vc jogar ele vai ficar travando",
                afirmação: "afirmação",
            },
            {
                texto: "Poder assistir todos os filmes que você quiser, mas sempre te contam toda a história em detalhes antes",
                afirmação: "afirmação",
            },
        ]
    },
        {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "Desenvolver uma inovação que te de fama, mas ela gera a terceira guerra mundial",
                afirmação: "afirmação",
            },
            {
                texto: "Ter um trabalho científico que muda o mundo para melhor, mas outra pessoa leva os créditos e você continua desconhecido ",
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
