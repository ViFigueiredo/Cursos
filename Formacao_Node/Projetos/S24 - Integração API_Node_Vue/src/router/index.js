import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';

import Home from '../views/Home.vue';
import Admin from '../views/Admin.vue';
import Gestao from '../views/Gestao.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Users from '../views/Users.vue';
import Edit from '../views/Edit.vue';

function AdminAuth(to, from, next) {
  if (localStorage.getItem('jwt') != undefined) {
    const req = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwt')
      }
    };
    // console.log(req);
    axios
      .post('http://localhost:3000/validate', {}, req)
      .then((res) => {
        console.log(res);
        next();
      })
      .catch((err) => {
        console.log(err.response);
        next('/login');
      });
  } else next('/login');
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/gestao',
      name: 'gestao',
      component: Gestao
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      beforeEnter: AdminAuth
    },
    {
      path: '/admin/users',
      name: 'admin_users',
      component: Users
    },
    {
      path: '/admin/users/edit/:id',
      name: 'admin_edit_users',
      component: Edit,
      beforeEnter: AdminAuth
    },
    {
      path: '/admin/register',
      name: 'register',
      component: Register
    }
  ]
});

export default router;
