# Template do frontend de uma aplicação utlizando tecnologias como:
> Node, Npm e Yarn
> ESlint, Babel e Prettier
> React e React Hooks
> Redux e Redux Saga
> Styled Componentes
> Componentes funcionais
> Axios

# Instalação e configuração do Node, Npm e Yarn
sudo npm install -g yarn (apenas na primeira instalação local)

# Instalação do React
yarn create react-app my-app

# Instalação e configuração de ambiente (eslint, babel e prettier)
yarn add -D eslint babel-eslint prettier eslint-config-prettier eslint-plugin-prettier
yarn create @eslint/config

# Instalação de plugin para styled components
Procurar na Loja de plugins e instalar a dependência abaixo
yarn add styled-components

# Instalação de React Icons
yarn add react-icons

# Instalação de React Router DOM
yarn add react-router-dom@5.2.0

# Instalação do History
yarn add history@4.10.1

# Instalação de Prop-types
yarn add prop-types 

# Instalação de React Toastify (mensagens de sucesso/erro)
yarn add react-toastify

# Instalação do Axios
yarn add axios

# Instalação do Redux
yarn add redux react-redux 

# Instalação do Redux Saga
yarn add redux-saga

# Instalação do Redux Persist
yarn add redux-persist

# OBSERVAÇÕES
1. axios retorna o fetch 2x
2. npm run build não transpila o cors e helmet para o dist, sendo necessário adicionar manualmente conforme repo da API

# Dicas de uso
1. Redux -> usamos apenas em aplicações que precisam de estados globais. Ex> carrinho de compras, playslist de video, etc
2. Redux Saga: ação (request - async) -> saga -> reducer -> success/fail