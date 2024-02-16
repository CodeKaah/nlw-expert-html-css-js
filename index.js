const perguntas = [
  {
    pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
    respostas: [
      "var",
      "let",
      "const",
    ],
    correta: 2
  },
  {
    pergunta: "Qual função é usada para imprimir algo no console?",
    respostas: [
      "print()",
      "log()",
      "console.log()",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
    respostas: [
      "==",
      "===",
      "!=",
    ],
    correta: 1
  },
  {
    pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
    respostas: [
      "pop()",
      "shift()",
      "splice()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual símbolo é usado para comentários de uma única linha em JavaScript?",
    respostas: [
      "//",
      "/* */",
      "#",
    ],
    correta: 0
  },
  {
    pergunta: "Qual método é usado para converter uma string em um número em JavaScript?",
    respostas: [
      "parseString()",
      "toInt()",
      "parseInt()",
    ],
    correta: 2
  },
  {
    pergunta: "Qual operador é usado para combinar duas strings em JavaScript?",
    respostas: [
      "+",
      "&",
      "|",
    ],
    correta: 0
  },
  {
    pergunta: "Qual método é usado para encontrar o índice de um elemento em um array em JavaScript?",
    respostas: [
      "findIndex()",
      "indexOf()",
      "searchIndex()",
    ],
    correta: 1
  },
  {
    pergunta: "Qual função é usada para converter um objeto em uma string JSON em JavaScript?",
    respostas: [
      "objectToString()",
      "stringify()",
      "toJSON()",
    ],
    correta: 1
  },
  {
    pergunta: "Qual palavra-chave é usada para definir uma função em JavaScript?",
    respostas: [
      "func",
      "function",
      "def",
    ],
    correta: 1
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for(const item of perguntas) {
const quizItem = template.content.cloneNode(true)
quizItem.querySelector('h3').textContent = item.pergunta

for(let resposta of item.respostas) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
dt.querySelector('input').value = item.respostas.indexOf(resposta)
dt.querySelector('input').onchange = (event) => {
  const estaCorreta = event.target.value == item.correta

  corretas.delete(item)
  if(estaCorreta) {
    corretas.add(item)
  }

  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
}

quizItem.querySelector('dl').appendChild(dt)
}

quizItem.querySelector('dl dt').remove()

//coloca a pergunta na tela
quiz.appendChild(quizItem)
}