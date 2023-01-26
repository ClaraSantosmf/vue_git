# vue_git

Esse README.md será um resumo das aulas do Tony Lampada. 
A seguir algumas instruções de setup.

Existem algumas anotações em tópicos do que eu não sabia e agora eu sei. Do que  sabia que havia esquecido. Logo, preciso anotar novamente para relembrar. 
E detalhes que passaram a fazer sentido. 

### Como rodar o projeto.
## 1º Project setup
Na pasta do projeto, rode o seguinte comando primeiro para instalar nossas dependências.
```
npm install
```
### Como rodar o projeto.
Se você precisar rodar sem mock o comando a seguir serve.
Sem mock -> 
```
npm run serve
```
Com mock você deve setar a variável de ambiente. 
```
API_MOCK = 1  npm run serve
```

MVP

![alter text](https://raw.githubusercontent.com/ClaraSantosmf/vue_git/main/src/img/mvp.png)

### Compiles and minifies for production
```
npm run build
```
Cria arquivos estáticos para deploy com arquivos html, css, js. dentro de uma pasta dist. Isso porquê não dá para rodar o ``` npm run serve ``` na página. Que por default o ignore não permite subir. 
Dá para testar seus arquivos estáticos se você entrar no seu dist e tentar subir com ```npx serve```. Isso vai subir um serviço web na pasta atual.
Então no github da o deploy na branch ghpages.

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Eslint

Esse embelezador de código vai chorar por muitas coisas. A forma de configurar o comportamento do eslint é por meio do .eslintrc.js. Nesse aquivos vamos desligar o problema com debbuguer e a necessidade de ome compost. 

### Como servi os seus arquivos do dist que estão em sua subpastas. 

O publicpath inserido no vue.config.js permite publicar a mini path qualquer do servidor, ou seja, aqueles os arquivos que não estão na raiz do projeto podem ser publicados.
Então o conteúdo da pasta dist funciona com o publicPath. 

```
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  publicPath: "./",
});
```

### Deploy automático

Para fazer um deploy automático inseri um arquivo sh ```deploy.sh``` que pode ser rodado pelo terminal. Porém, ainda estou melhorando ele. Ele vai levar as alterações para o github pages. roda um ``` bash deploy.sh```. 

Para não ser necessário que seja feito isso na mão, melhor usar o arquivo yaml que aciona o Github Actions. 

Esse arquivo deve estar dentro do .github/worflows no seu repositório.

Lá tem o bizu que, automaticamente, na hora que vc der push na main, ele fará o deploy do arquivo estático. 

### Data

O campo do data tem o nome da função que atende o parâmetro do v-bind. 

### v-for

Os que começam com o prefixo v- são chamados de diretivas. Esses são, por sua vez, atributo especiais que recebem uma simples expressão JS. O trabalho da diretiva é aplicar reativamente os efeitos colaterais ao DOM. Ou seja, reagir as modificações.
* v-if
* v-bind

### v-bind

O v-bind, que é uma diretiva, aceita parâmetro. Pode encontrar a expressão apenas com dois pontos como seu açúcar sintático. :parâmetro="issoÉUmVBind". Os parâmetros possíveis podem ser:
* href="url"
* click="NomeDaFunção"

Também é possível usar como parâmetro da diretativa v-bind uma expressão JS desde que entre colchetes, onde o valor final resultante é utilizado como o argumento. 

### Watch 

Serve para acionar efeitos colaterais, alterar outra parte do estado com base no resultado de uma operação assíncrona. O retorno de chamada só será acionado quando a propriedade observada receber um novo valor - ele não será acionado em alterações de propriedade aninhada. Por isso é chamado de raso. 
Acredita que ele NÃO participa dos methodos? apenas do export default.

 
### vuetify. 

* Por algum motivo, o componente que possui um v-autocomplete espera na page que exista o componente seja envolvido em um tag <app>

### JavaScript 

* Decorator

### API GitHub

* Foi utilizado o 'users?q=' que procura usuários com prefixo utilizado, isso ajuda no autocomplete. Para fazer a chamada ajax.

* MEU DEUS, tu sabia que o await é uma outra forma de escrever o .then . Então, o await manda esperar pela resolução da promessa e atribui a resposta a uma variável. Devido ao fato dela não retornar na mesma hora, por estar esperando o await, a função externa deve conter um async. Async que der, eu falo. 

``` async function promess(){
  const variavel = await fetch (url)
 }```

Para tratar casos de 'se der ruim', a ideia é dar um **try&catch**

* Foi necessário uma api_mock com os objetos que deveriam ser retornados, por conta do ratelimit. Por uma questão de coerência, os parâmetros foram mantidos e precisamos desativar a regra do eslint para que as variáveis que não foram usadas não impeçam de subir o projeto. Então o 'no-unused-vars': 'off' no .eslintrc.js. 

* Necessário ativar a variável de ambiente com API_MOCK=1 npm run serve.

* A configuração da mock fica configurada no vue.config.js, onde existe um configurewebpack que constroi o path segundo a variável de ambiente que é passada.

## Dicionário 

* [Debounce](https://www.freecodecamp.org/portuguese/news/debounce-como-atrasar-a-execucao-de-uma-funcao-em-javascript-exemplo-com-js-es6/) - garante que seu código seja executado apenas uma vez a cada caso de uso quando a informação está realmente pronta para executar a função. A finalidade é não disparar diversas vezes um comando a cada interação não-final do usuário. Mesmo com todo poder da internet, ele deve ser implementando na mão junto ao setTimeout. 
Para esse caso foi escrito no methods uma função que agenda a execução do código para meio segundo depois. Isso foi posto dentro de um decorator. QUe apenas funciona se utilizar  ```function```, pois a arrow function zoa todo decorator.

* [helpers](https://medium.com/js-dojo/registering-globally-your-helpers-in-a-vue-app-b7ba3b9596b3) - Pasta que organiza funções utilizadas por um tópico específico, porém, compartilhada por mais de um componente. Por isso o arquivo js carrega o nome do tema em específico. Existe várias maneiras de exportar esses arquivos para uso. Mas o detalhe importante que o caminho relativo pode ser precedido de @, ao invés de ..

* [Apply(), this(), bind()](https://imasters.com.br/javascript/descomplicando-call-apply-e-bind-em-javascript)


# To Do

* Melhorar a popup
* Melhorar a mock