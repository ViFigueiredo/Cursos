# ViteJS
npm create vite@latest -- --template react-ts
cd vite-project
npm i
npm run dev

# React Router DOM v6
npm i react-router-dom@6

import { BrowserRouter, Routes, Route } from 'react-router-dom';
> BrowserRouter -> gerenciador de estado das rotas
> Routes (switch) -> onde colocamos as rotas = funciona como uma espécie de IF para rotas
> Route -> a rota em si

> link -> recarrega e renderiza somente o componente (mantém o estado atual)
<Link to="/about"> About </Link>
Pode ser utiliza para enviar estado usando state={} como atributo jsx
<Link to="/about" state={state}> About </Link>

> a -> recarrega e renderiza toda a página (perde o estado atual)
<a href="/about"> About </a>

> Para o router-DOM uma url/:id possui mais especificidade do que a própria url/, logo ela será renderizada primeira

> useNavigate('/') -> redireciona a página para uma url

> <Route path='*' element={<NotFound/>} /> -> redireciona pra NotFound sempre que não encontrar uma rota qualquer (*)

> <Outlet/> Utilizado em conjunto de <Route /> para aninhamento de rotas