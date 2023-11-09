const express = require("express"); // chama o pacote express, faz a requisição
const app = express(); //instância express em app - app é express
app.use (express.json()); // pede pra aplicação (app) que usa o objeto express usar o interpretador json


//qualquer manipulação dessa variavél é em memória, não em arquivo 
let filmes = [ //vetor
    {
    titulo: "Forrest Gump - O Contador de Histórias",
    sinopse: "Quarenta anos da história dos Estados Unidos, vistos pelos olhos de Forrest Gump (Tom Hanks),um rapaz com QI abaixo da média e boas intenções."
    },
    {
    titulo: "Um Sonho de Liberdade",
    sinopse: "Em 1946, Andy Dufresne (Tim Robbins), um jovem e bem sucedido banqueiro, tem a sua vida radicalmente modificada ao ser condenado por um crime que nunca cometeu, o homicídio de sua esposa e do amante dela"
    }
]	

//acesso para requisção http.get: se lgum cliente bater na porta oi, a resposta será oi : http://localhost:2500/oi http é padrãp do thunder client
app.get('/oi', (req, res) => {res.send("oi")}); //send porque manda de volde pra quem enviou
// a requisção http tem por padrão 3 parâmetros - sempre devolve uma promise
//o primeiro refere-se á requisição, os elementos que vão (req, ) - obrigatório
//o segundo é a resposta, o que ele devolve (req, res, ) - obrigatório
//o terceiro é o encademanento - não obrigatório

//acesso para a requisção que irá mostrar os filmes 
app.get('/filmes', (req, res) => {res.send(filmes)});

//acesso para requisição http -post/filmes, ou seja, vamos inserir um novo filme á lista em MEMÓRIA 
app.post('/filmes', (req, res) => { //[e no msm breakpoint mas agora não é mais um get, é um post]
    //vou obter dados que serão inseridos 
    //const titulo = "Vingadores Ultimato"; // aqui está chumbado
    //const sinopse = "Todos contra Thanos"
    const titulo = req.body.titulo; //vai na requisição, no corpo da requisição e vai em título, pega o que tem lá e exibe 
    const sinopse = req.body.sinopse; 
    //montar o objeto json que será inserido 
    const filme = {titulo: titulo, sinopse: sinopse} //objeto json é chave 
    //inserir o novo filme na base ou no vetor filmes 
    filmes.push(filme); //push insere 
    //conferindo
    res.send(filmes);
}); 

app.listen (2500, () => console.log("app subindo e correndo")); //pede pro app ouvir, na porta 300 e toma uma ação em forma de função - é preciso saber em qual endereço estamos batendo - coloca no ar a aplicação
