# Backend Challenge 2021 🏅 - Covid Daily Cases

### A web API that return covid cases around the world by date or day

#### linguagem, framework e/ou tecnologias usadas

1. Linguagem
* nodejs
* typescript
2. framework
* express
* mongoDB
3. tecnologias
* jest
* docker
* migrate-mongo
* date-fns
* ts-jest

## Modo de usar
### modo mais rapido
1. voce pode usar você pode usar seu navegador ou um [postman](https://www.postman.com/) ou ate mesmo o  [insomnia](https://insomnia.rest/products/insomnia)
2. entrar pelo link do heroku: https://lit-bayou-90286.herokuapp.com/
3. casos do dia: `[GET]` https://lit-bayou-90286.herokuapp.com/cases/2020-08-31/count para receber os casos do dia informado
4. casos ate a data informada: `[GET]` https://lit-bayou-90286.herokuapp.com/cases/2020-08-31/cumulative para receber os caso do ate o mes informado
5. meses disponiveis para pesquisa: `[GET]` https://lit-bayou-90286.herokuapp.com/dates: para receber quais datas estao disponiveis
* `(:date) = YYYY-MM-DD ---> 20-08-31`
#### baixar dependencias
1. clonar o repositorio: `git clone https://github.com/Zendered/Backend-Challenge-2022---Covid-Daily-Cases.git`
2. baixar as dependencias: `npm i` ou `yarn i` caso vc use yarn
### tranformando aquivo csv para json e enviando pro banco de dados
1. para transformar o aquivo `covid-variants.csv` em um arquivo `covid-cases.json` use `npm run make:covid-file`
2. entao para subir o banco de dados com todos os casos do arquivo `covid-cases.json` use `npm run up:migration` (caso não funcione, use `npm run down:migration` e tente usar `npm run up:migration` novamente
### dando start na api
1. depois use `npm run build`
2. e entao assim que dados estiverem no banco use `npm run start`
### usando api
1. voce pode usar você pode usar seu navegador ou um [postman](https://www.postman.com/) ou ate mesmo o  [insomnia](https://insomnia.rest/products/insomnia)
3. casos do dia: ` [GET] http://localhost:3333/cases/:date/count` para receber os casos do dia informado (:date)
4. casos ate a data informada: `[GET] http://localhost:3333/cases/:date/cumulative` para receber os caso do ate o mes informado (:date)
5. meses disponiveis para pesquisa: `[GET] http://localhost:3333/dates:` para receber quais datas estao disponiveis
* (:date) = `2020-08-31`
### subir o docker
1. mude a area `environment` no arquivo `docker-compose.yml` mude o `- PROD_MONGO_URL=mongodb+srv://<user>:<password>@<cluster>.hp8av.mongodb.net/<database>?retryWrites=true&w=majority` com os dados do mongodb Atlas
2. subir docker: para subir os containers da api e do banco de dados no docker `npm run up:container`

* caso não funcione e você saiba mexer com docker e consiga fazer funcionar me avise :)
> [video de apresentaçao do projeto](https://www.loom.com/share/9266cb1822e24eb6bfe5b99f595b6212)
> [texto de apresentaçao do projeto](https://github.com/Zendered/Backend-Challenge-2022---Covid-Daily-Cases/blob/main/docs/texto-de-apresenta%C3%A7ao-do-projeto.txt)

>  This is a challenge by [Coodesh](https://coodesh.com/)
