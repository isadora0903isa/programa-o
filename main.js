const perguntas = [
    {
    enunciado: "QUAL O SEU ESPORTE PREFIRIDO?",
    alternativas: [
    "MOUNTAIN BIKE",
    "SKATE"
    ]
    },
    {
    enunciado: "VOCÊ PREFERE PRATICAR ESPORTES AO AR LIVRE OU EM AMBIENTES FECHADOS?",
    alternativas: [
    "AO AR LIVRE",
    "EM AMBIENTES FECHADOS"
    ]
    },
    {
    enunciado: "QUAL DOS SEGUINTES ESTILOS VOCÊ PREFERE PARA SE EXERCITAR?",
    alternativas: [
    "PARKOUR",
    "ESPORTES DE AÇÃO"
    ]
    },
    {
    enunciado: "VOCÊ COSTUMA PRATICAR ESPORTES SOZINHO OU EM GRUPO?",
    alternativas: [
    "SOZINHO",
    "EM GRUPO"
    ]
    
    },
    {
    enunciado: "QUAL É O FATOR MAIS IMPORTANTE PARA VOCE AO ESCOLHER UM ESPORTE?",
    alternativas: [
    "DESAFIO FÍSICO E ADRENALINA",
    "SOCIALIZAÇÃO E DIVERSÃO"
    ]
    }
    ];
    let atual = 0;
    let perguntaAtual;
    const caixaPerguntas = document.getElementById('caixaPerguntas');
    const alternativasContainer = document.getElementById('alternativas');
    function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa, index) => {
    const button = document.createElement('button');
    button.textContent = alternativa;
    button.addEventListener('click', () => {
    atual++;
    if (atual < perguntas.length) {
    mostraPergunta();
    } else {
    caixaPerguntas.textContent = 'Você completou o questionário!';
    alternativasContainer.innerHTML = '';
    }
    });
    alternativasContainer.appendChild(button);
    });
    }
    mostraPergunta();
