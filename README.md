# trilha-especializar-frontEnd
Curso da plataforma rocktseat para desenvolvimeto web
## `javaScript assincrono`
#### `síncrono`
Sitema sincrono, uma tarefa é concluida após a outra
#### `Assincrono`
Sistema assincrono, tarefas são executadas de maneiras independentemente uma da outra
#### `Callback`
Funçoes que aceitam qualquer tipo de dado como argumento.
Uma função callback é uma função passada a outra função como argumento, que é então invocada dentro da função externa para completar algum tipo de rotina ou ação
#### `setTimeout`
O método global setTimeout()define um cronômetro que executa uma função ou trecho de código especificado assim que o cronômetro expira.
#### `promise`
A promessa de algo acontecer no futuro. Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona. Como a maioria das pessoas consomem promises já criadas, este guia explicará o consumo de promises devolvidas antes de explicar como criá-las.
#### `promise-fetch`
A API fetch provê ao navegador uma interface para a execução de requisições HTTP através de Promisses
- then : permite definir o bloco executado mediante o cumprimento de uma promise retornando um objeto do tipo Response.
- catch - permite definir o bloco executado mediante a rejeição de uma promise
- [requisição](https://www.alura.com.br/artigos/metodos-de-requisicao-do-http)
#### `promise-axios`
Axios é um cliente HTTP baseado-em-promessas para o node.js e para o navegador. É isomórfico (= pode rodar no navegador e no node.js com a mesma base de código). No lado do servidor usa o código nativo do node.js - o modulo http, enquanto no lado do cliente (navegador) usa XMLHttpRequests.

## `fundamentos react`
Uma biblioteca JavaScript para construir interfaces de usuário
- criar projeto usando vite(ferramenta front-end):  npm create vite@latest reactapp --template react
- cd projeto
- npm install
- npm run dev
#### `componentes`
Componentes são como funções JavaScript. Eles aceitam entradas arbitrárias (chamadas “props”) e retornam elementos React que descrevem o que deve aparecer na tela.
#### `propriedades`
As propriedades dentro de um componente faz com que você possa passar valores diferentes para cada um deles
#### `estado`
O Hook useState permite ter variáveis em componentes funcionais. Você passa o estado inicial para esta função e ele retorna uma variável com o valor atual do estado (não necessariamente o estado inicial).
#### `imutabilidade`
O conteúdo da variável não deve ser modificado e sim substituído.Entendesse por imutável, algo não esta sujeito a mudar/alterar. É esse conceito que levamos para o estado

#### `key prop`
Em uma listagem, normalmente utilizamos o map() do JavaScript para trazer todos os dados dessa lista. No React, precisamos passar uma propriedade key para que esse dado nunca se repita e evitar que erros desse tipo aconteçam.
#### `hooks`
São funções que permitem conectar os recursos de estados e ciclos de vida do React a partir de componentes funcionais. Normalmente os Hooks iniciam com a palavra use por convenção. Exemplos de hooks: useState, useEffect.
#### `Header`
Nessa aula, criamos uma tag header em nossa Home para indicar quem é o usuário que está editando a lista de presença.
#### `useEffect`
O useEffect é executado automaticamente sempre que o componente é renderizado.
A estrutura do useEffect é da seguinte forma:
- // Dentro do objeto devemos colocar todas. ações que serão executadas.
- // Os arrays definem quais os estados que o useEffect depende.