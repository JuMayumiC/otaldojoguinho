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
                afirmação: "Uau, ser bem hipócrita com relação a cachorrinhos inocentes kkkkkkkkk",
            },
            {
                texto: "Que a sua mãe é atropelada e morre, mas todos os pais viram saudáveis e presentes",
                afirmação: "Uau, eu tenho muito medo ou dó de você com essa escolha kk, bora pra terapia hj?",
            },
        ] 
    },
{
            enunciado: "No âmbito social, você prefere:",
            alternativas: [
            {
                texto: "Que você fique rico, mas sua familia passe fome e vc não possa ajudar",
                afirmação: "Uau, bem egoísta e ingrato da tua parte, mas estou com você kk",
            },
            {
                texto: "Que sua família fique rica, mas que te deixem em situação de rua",
                afirmação: "Uau, ou você não tem um pingo de amor próprio ou é uma pessoa gente boa",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Que toda a fauna seja substituída para a do Era Mesozóica, mas os humanos se mantenham",
                afirmação: "Uau, você é ama a natureza neh kkkkk",
            },
            {
                texto: "Que todos os humanos morram, mas a fauna se mantenha a mesma",
                afirmação: "Uau, obrigada por resolver todos os problemas de uma vez só kk",
            },
        ]
    },
        {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Ter incidência de placas tectônicas, mas um deles destrói os estados unidos para sempre",
                afirmação: "Uau, EU ESTOU CONTIGO NESSA",
            },
            {
                texto: "Ter incidência de furacões, mas um deles te leva para oz",
                afirmação: "Uau, você leu as alternativas mesmo??",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "Ter acesso a todos os jogos existentes, mas toda vez que vc jogar ele vai ficar travando",
                afirmação: "Uau, você é paciente hein kk",
            },
            {
                texto: "Poder assistir todos os filmes que você quiser, mas sempre te contam toda a história em detalhes antes",
                afirmação: "Uau, você é o maior inimigo do plot twist kkkkkk",
            },
        ]
    },
        {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "Desenvolver uma inovação que te de fama, mas ela gera a terceira guerra mundial",
                afirmação: "Uau, realmente não há sucesso sem cao neh",
            },
            {
                texto: "Ter um trabalho científico que muda o mundo para melhor, mas outra pessoa leva os créditos e você continua desconhecido ",
                afirmação: "Uau, ficar nas sombras a vida inteira? Corajoso hein",
            },
        ]
    },
]
let atual = 0;
let perguntaAtual;
let historiafinal = "";


function mostraPergunta (){
    if (atual >= perguntas.length){
        mostraResultado ();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado; 
    caixaAlternativas.textContent = "";
    mostraAlternativa();
}

function mostraAlternativa (){
    for(const pergunta of perguntaAtual.alternativas) {
    const botaoAlteranativa = document.createElement('button');
    botaoAlteranativa.textContent = pergunta.texto;
    botaoAlteranativa.addEventListener("click", ()=> respostaSelecionada(pergunta));
    caixaAlternativas.appendChild(botaoAlteranativa);
    
}    
}

function respostaSelecionada (pergunta){
    const afirmações = pergunta.afirmação;
    historiafinal += afirmações + " ";
    atual++;
    mostraPergunta ();
}

function mostraResultado (){
    caixaPerguntas.textContent = "Parabéns, você escolheu..."
    caixaResultado.textContent = historiafinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();
