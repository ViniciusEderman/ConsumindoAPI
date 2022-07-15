# 🤞 Consumindo API com fetch 🤞
    Desenvolvido uma aplicação com foco no consumo de uma api para busca de cep
    O projeto em si é algo bem simples. Um pequeno html, apenas para ser digitado o cep e depois o javaScript com fetch fazendo toda a funcionalidade backend

# 🖥️ O projeto terá um futuro?
    Não! O projeto só teve como fundamentos/objetivos o foco de estudo e entendimento na utilização de api

# ⚡ Api utilizada:
    {https://viacep.com.br/}
    Utilizando o formato json, o viacep é um WebService que serve para consultar CEP de endereçamento do Brasil gratuitamente. Para Consultar CEP basta você fazer uma requisição http para a API do ViaCep e então obter o retorno com informações como CEP, nome da Cidade, Código do Município, UF, etc

# 💬 Como rodar o projeto?
    1°-Clone o repositório,
    2°-Utilize o comando npm i para instalar as dependências do projeto,
    3°-Caso queira ver as dependências, analise o package-lock.json,
    4°-Abra o index.html no seu navegador ou utilizando o live server,

# 💬 Index.js funcionalidade:
    As funcionalidades básicas do app é simplesmente pegar o que foi digitado no html e fazer a busca, 
    utilizando a requisição http da api viacep. O then/catch ficará responsável por tentar pegar a resposta em formato json e caso aconteça algum erro será pego pelo catch e mostrado no terminal
