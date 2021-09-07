<h3 align="center">
    <img alt="Logo" title="#logo" width="170px" src="./assets/nodejs-logo.png">
    <img alt="Logo" title="#logo" width="200px" src="./assets/google-cloud-logo.png">
</h3>

<p align="center">
  <a href="https://cloud.google.com/">
    <img alt="Integration with" src="https://img.shields.io/badge/integration%20with-Google-%23f1e05a">
  </a>
   <a href="https://github.com/VictorGabrielMS">
    <img alt="Code by Victor Gabriel" src="https://img.shields.io/badge/code%20by-Victor Gabriel-%23E02041">
  </a>
</p>

<p align="center">
  <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
    <img alt="Javacript" src="https://img.shields.io/badge/Javacript-%23D1CB36">
  </a>
  <a href="https://nodejs.org/en/">
    <img alt="Node.js" src="https://img.shields.io/badge/Node.js-%2341B879">
  </a>
  <a href="https://cloud.google.com/">
    <img alt="Google Cloud" src="https://img.shields.io/badge/Google Cloud-%234185f4">
  </a>
</p>

## Api Rest - Inegrada com o google cloud vision

- [Sobre](#sobre)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Rotas](#rotas)
- [Faça um clone e use](#como-usar)
- [Como contribuir](#como-contribuir)

<a id="sobre"></a>

## :interrobang: Sobre

Uma _API Rest_ integrada com o sdk do <strong>Google Cloud Vision</strong>, onde as requisições são processadas e uma resposta em formato JSON e devolvida.

<a id="tecnologias-utilizadas"></a>

## :diamonds: Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Javacript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Nodemon](https://nodemon.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

<a id="rotas"></a>

## :space_invader: Rotas

- #### Método ᚛ `$POST`

  - rota usada para listar as labels de uma imagem desejada

  - **PARÂMETROS » Enviados pelo corpo da requisição**:

    - imageUrl → _link de uma imagem_

  - [x] Requisição <br />
        `routes.post('http://aplication_url/')`

  ```json
  {
    "imageUrl": "https://image.freepik.com/vetores-gratis/aniversario-de-casamento-do-royal-25-de-luxo_1340-6709.jpg"
  }
  ```

  - [x] Resposta

  ```json
  {
    "labels": [
      "Text",
      "Font",
      "Logo",
      "Sky",
      "Symbol",
      "Illustration",
      "Circle",
      "Graphics",
      "Space",
      "Night"
    ]
  }
  ```

<a id="como-usar"></a>

## :octocat:Clone este repositório

1. Faça um clone :

```sh
  $ git clone https://github.com/VictorGabrielMS/api-integration-google-cloudvision.git
```

2. Vá ao diretório

```sh
  $ cd api-integration-google-cloudvision
```

3. Executando as aplicações:

```sh
  $ npm install
  $ npm run start
```

<a id="como-contribuir"></a>

## :dart: Como contribuir

- Faça um _Fork_ deste repositório;
- Crie uma _branch_ com a sua feature: `git checkout -b my-feature`
- _Commit_ suas mudanças: `git commit -m 'feat: My new feature'`
- Faça um _push_ da sua branch: `git push origin my-feature`
