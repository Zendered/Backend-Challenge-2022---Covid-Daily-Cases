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
#### baixar dependencias
1. clonar o repositorio: `git clone [link](https://github.com/Zendered/Backend-Challenge-2022---Covid-Daily-Cases.git)`
2. baixar as dependencias: `npm i` ou `yarn i` caso vc use yarn
### tranformando aquivo csv para json e enviando pro banco de dados
1. para transformar o aquivo `covid-variants.csv` em um arquivo `covid-cases.json` use `npm run make:covid-file`
2. entao para subir o banco de dados com todos os casos de covid do aruivo `covid-cases.json` use `npm run up:migration` (caso não funcione, use `npm run down:migration` e tente usar `npm run up:migratin` novamente
### dando start na api
1. depois use `npm run build`
2. e entao assim que dados estiverem no banco use `npm run start`
### usando api
1. testar api: você pode usar um [postman](https://www.postman.com/) ou o [insomnia](https://insomnia.rest/products/insomnia)
2. casos do dia: ` [GET] http://localhost:3333/cases/:date/count` para receber os casos do dia informado (:date)
3. casos ate a data informada: `[GET] http://localhost:3333/cases/:date/cumulative` para receber os caso do ate o mes informado (:date)
4. meses disponiveis para pesquisa: `[GET] http://localhost:3333/dates:` para receber quais datas estao disponiveis
### subir o docker (talvez não funcione)
1. subir docker:  para subir os containers da api e do banco de dados no docker  
* caso não funcione e você saiba mexer com docker e consiga funcionar me avise :)
> [video de apresentaçao do projeto](https://www.loom.com/share/9266cb1822e24eb6bfe5b99f595b6212)
> [texto de apresentaçao do projeto](https://github.com/Zendered/Backend-Challenge-2022---Covid-Daily-Cases/tree/main/docs/texto-de-apresentaçao-do-projeto)

>  This is a challenge by [Coodesh](https://coodesh.com/)
