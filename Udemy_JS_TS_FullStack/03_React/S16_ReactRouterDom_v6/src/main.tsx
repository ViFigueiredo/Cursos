import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Posts } from './components/Posts';
import { Redirect } from './components/Redirect';
import { NotFound } from './components/NotFound';
import { Post } from './components/Post';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/redirect' element={<Redirect />} />
      {/* <Route path='/posts/:id' element={<Posts />} /> */}


      <Route path='/posts' element={<Posts />} >
        <Route path=':id' element={ <Post /> } />
      </Route>
      
      <Route path='/posts' element={<Posts />} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
