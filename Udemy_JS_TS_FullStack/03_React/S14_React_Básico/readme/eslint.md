# Instalar e iniciar o yarn
sudo npm install -g yarn
yarn init

# Configuração
yarn create @eslint/config

✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JavaScript

# Instalação do Prettier/Eslint
yarn add -D eslint-config-prettier prettier

# Aceitando arquivos diferentes de .jsx
Basta adicionar no eslint a regra abaixo
rules: {
    "react/jsx-filename-extension": 0
  },


