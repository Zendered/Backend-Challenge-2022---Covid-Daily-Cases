Modelo de Dados:
Para a definição do modelo consulte os campos presentes no arquivo a ser importado; você pode ver a estrutura como o exemplo:
{
    "location": "string",
    "date": "date",
    "variant": "string",
    "num_sequences": "number",
    "perc_sequences": "number",
    "num_sequences_total": "number",
  }

Back-End:
Nessa etapa você deverá construir uma API Restful com as melhores práticas de desenvolvimento. Para isso você deve executar os passos a seguir:
Obrigatório 1 - Você deverá desenvolver as seguintes rotas:


[GET]/: Retornar um Status: 200 e uma Mensagem "Backend Challenge 2021 🏅 - Covid Daily Cases"

[GET]/cases/:date/count: Listar todos os registros da base de dados no dia selecionado, agrupados por país e separados por variante.

[GET]/cases/:date/cumulative: Listar todos os registros da base de dados, retornando a soma dos casos registrados de acordo com a data selecionada, agrupados por país e separados por variante.

[GET]/dates: Listar as datas disponíveis no dataset

Obrigatório 2 - Para alimentar o seu banco de dados você deve criar um script para armazenar os dados do arquivo CSV que o Kaggle disponibiliza.
Diferencial 1 - Configurar Docker no Projeto para facilitar o Deploy da equipe de DevOps;
Diferencial 2 - Escrever Unit Tests para os endpoints da API;
Diferencial 3 - Descrever a documentação da API utilizando o conceito de Open API 3.0;
Diferencial 4 - Usar a Kaggle API para baixar os arquivos do dataset. Lembrando que esta biblioteca roda com Python, então será necessário conferir se o ambiente pode executar a biblioteca;
Diferencial 5 - Salvar em cache o resultado dos endpoints, para agilizar a resposta em caso de buscas com parâmetros repetidos
Diferencial 6 - Utilizar aggregate para calcular os dados cumulativos
Diferencial 7 - Publique o projeto em alguma plataforma, como por exemplo a Heroku, Glitch ou outra de sua preferência.