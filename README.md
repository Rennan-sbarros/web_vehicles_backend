## Projeto: Crud de veículos com Node.JS + Angular

- O intuito do projeto é criar uma API rest em Node.JS com CRUD de veículos com os seguintes atributos: id, placa, chassi, renavam, modelo, marca e ano. E no Frontend utilizar o Angular para criação de uma lista de veículos consumindo os dados da API.

## Tecnologias utilizadas:

- JavaScript: Linguagem de programação.
- Express: Framework para Node.js para tratar as requisições e enviar as respostas.
- MongoDB + ODM Mongoose: Banco de dados.
- Nodemon: Pacote para atualizar projeto em tempo real.
- Postman: Plataforma para testar API.

## Como rodar a aplicação na sua máquina(localhost): 

- Clone o projeto em sua máquina
- Na IDE de sua preferência, abra a pasta onde fez o clone e no CMD rode o seguinte comando: npm install
- Em seguida, no CMD inicie a aplicação com o comando: npm start
- Pronto! Agora vamos usar o Postman para testar as rotas e cadastrar alguns veículos para que seja possível visualizar a listagem no front, e pra facilitar sua vida deixei aqui o link para fazer o download da "collection" que criei no postman com todas as requisições: <a href="https://github.com/Rennan-sbarros/rennan-sbarros/blob/main/Diversos/Web_Vehicles%20-%20API%20Node.js%20%2B%20Mongoose%20Copy.postman_collection.rar">Collection Postman API</a>
- No Postman, após copiar a "collection", clique em "Create vehicle" e depois em "Body" onde aparecerá os atributos do veículo. Agora basta clicar em Send e criar quantos veículos quiser.

- Exemplo do Postman:
<img src="https://github.com/Rennan-sbarros/rennan-sbarros/blob/main/Diversos/postman.png"/>

## Com a API rodando, vamos partir para o Front feito em Angular para consumir os dados de todos os veículos cadastrados?

- <a href="https://github.com/Rennan-sbarros/web_vehicles_frontend">Clique aqui para ir até o Front da aplicação</a>

