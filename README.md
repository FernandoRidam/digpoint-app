<img src="/assets/icon.png" width="48">

# DigPoint

Aplicativo de consulta e dicas de filmes. Suas principais funcionalidades são:

1. Listar filmes e séries lançamentos.
2. Busca de filmes e séries por titulo.
3. Listar filmes e séries por genêro.
4. Exibe detalhes dos filmes e séries, com trailers.
5. Com duas opções de idiomas. Português do Brasil e Inglês.

### Screens

| <img src="/screens/login_default.png" width="200">
| <img src="/screens/login_error.png" width="200">
| <img src="/screens/login_hide_password.png" width="200">
| <img src="/screens/login_show_password.png" width="200">

<br />

| <img src="/screens/code_default.png" width="200">
| <img src="/screens/code_informed.png" width="200">
| <img src="/screens/code_after_register_not_found.png" width="200">
| <img src="/screens/code_after_register_successfully.png" width="200">

<br />

| <img src="/screens/confirm_exit_default.png" width="200">
| <img src="/screens/confirm_exit_error.png" width="200">
| <img src="/screens/confirm_exit_hide_password.png" width="200">
| <img src="/screens/confirm_exit_show_password.png" width="200">

## Executando o projeto

- Após clonar o projeto:
- yarn install
- cd ios && pod install (se ios)
- yarn android ou yarn ios para executar

## APi

- [DigPoint API](https://github.com/FernandoRidam/digpoint-api)

## Tecnologias e Bibliotecas

### React native

- O [React Native](https://reactnative.dev/) foi utilizado em sua versão 0.73.4

### Principais libs:

- [axios](https://github.com/axios/axios) para o consumo da api.
- [react navigation v6](https://reactnavigation.org/) para gerenciamento da navegação entre telas.
- [Phosphor Icons](https://phosphoricons.com/) Uma família de ícones flexível para interfaces.

### Padrões

#### Componentização de codigo reutilizavel

Componentes foram criados para evitar a repetição de codigo. Os componentes são reutilizaveis e não contem regras de negocio, podendo ser utilizados nas variadas telas.

#### Separação de responsabilidades

- Uma camada de serviço foi criada e atua de forma transparente para as camadas superiores, seu funcionamento nao depende das regras superiores e vice e versa.
- As telas se preocupam em obter inputs dos usuarios e mostrar resultados. Dessa forma, adicionar uma nova tela não é um trabalho tão arduo.
