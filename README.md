# vue_git

Esse README.md será um resumo das aulas do Tony Lampada. 
A seguir algumas instruções de setup.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

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

## Eslint

Esse embelezador de código vai chorar por muitas coisas. A forma de configurar o comportamento do eslint é por meio do .eslintrc.js. Nesse aquivos vamos desligar o problema com debbuguer e a necessidade de ome compost. 

## Como servi os seus arquivos do dist que estão em sua subpastas. 

O publicpath inserido no vue.config.js permite publicar a mini path qualquer do servidor, ou seja, aqueles os arquivos que não estão na raiz do projeto podem ser publicados.
Então o conteúdo da pasta dist funciona com o publicPath. 

```
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  publicPath: "./",
});
```