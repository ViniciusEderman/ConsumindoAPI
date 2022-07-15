# 🤞 Consumindo API com fetch 🤞
    Desenvolvido uma aplicação com foco no consumo de uma api para busca de cep
    O projeto em si é algo bem simples. Um pequeno html, apenas para ser digitado o cep e depois o javaScript com fetch fazendo toda a funcionalidade backend

# 🖥️ O projeto terá um futuro?
    Não! O projeto só teve como fundamentos/objetivos o foco de estudo e entendimento na utilização de api

# ⚡ Api utilizada:
    {https://viacep.com.br/}
    Utilizando o formato json, o viacep é um WebService que serve para consultar CEP de endereçamento do Brasil gratuitamente. Para Consultar CEP basta você fazer uma requisição http para a API do ViaCep e então obter o retorno com informações como CEP, nome da Cidade, Código do Município, UF, etc

# 💬 Como rodar o projeto?
    
💬 E como adicionar mais perguntas?
Bom, é algo bem simples. Abra a const questions, é um array com vários objetos, e lá você irá copia o padrão a seguir:
{
  "question": "Texto da pergunta",
  "answers": [
    {
      "answer": "Texto Da Alternativa A",
      "correct": true
    },
    {
      "answer": "Texto Da Alternativa B",
      "correct": false
    },
    {
      "answer": "Texto Da Alternativa C",
      "correct": false
    },
    {
      "answer": "Texto Da Alternativa D",
      "correct": false
    },
  ]
}
Observação:
O correct = true, quer dizer que é a alternativa correta da pergunta e false são as erradas.
Você pode adicionar mais alternativas, porém isso pode prejudicar a estetica do projeto!