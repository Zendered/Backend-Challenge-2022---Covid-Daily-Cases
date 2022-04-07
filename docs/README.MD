# Backend Challenge 2021 🏅 - Covid Daily Cases

### A web API that return covid cases around the world by date or day

#### linguagem, framework e/ou tecnologias usadas

* nodejs
* express
* mongoDB
* mongoose
* typescript
* jest
* docker


## Modo de usar
1. clonar o repositorio: `git clone [link](https://github.com/Zendered/Backend-Challenge-2022---Covid-Daily-Cases.git)`
2. baixar as dependencias: `npm i` ou `yarn i` caso vc use yarn
3. testar pra ver se esta tudo ok: `npm test`
4. subir docker: `npm run up` para subir os containers da api e do banco de dados no docker
5. testar api: você pode usar um [postman](https://www.postman.com/) ou o [insomnia](https://insomnia.rest/products/insomnia)
6. casos do dia: ` [GET] http://localhost:3333/cases/:date/count` para receber os casos do dia informado (:date)
7. casos do mes: `[GET] http://localhost:3333/cases/:date/cumulative` para receber os caso do mes informado (:date) ⚠️
8. meses disponiveis: `[GET] http://localhost:3333/dates:` para receber quais datas estao disponiveis ⚠️

>  This is a challenge by [Coodesh](https://coodesh.com/)

> Status: Developing ⚠️
  