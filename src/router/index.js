import Vue from 'vue'
import VueRouter from 'vue-router'
import ProjetoInicio from '../views/ProjetoInicio.vue'
import ClubesLista from '../views/ClubesLista.vue'
import ProjetoCadastro from '../views/ProjetoCadastro.vue'
import ProjetoLogin from '../views/ProjetoLogin.vue'
import ProjetoUsuario from '../views/ProjetoUsuario.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ProjetoInicio',
    component: ProjetoInicio
  },
  {
    path: '/classificacao',
    name: 'Classificação',
    component: ClubesLista
  },
  {
    path: '/cadastro',
    name: 'ProjetoCadastro',
    component: ProjetoCadastro
  },
  {
    path: '/login',
    name: 'ProjetoLogin',
    component: ProjetoLogin
  },
  {
    path: '/usuario',
    name: 'ProjetoUsuario',
    component: ProjetoUsuario
  },
]

const router = new VueRouter({
  routes
})

export default router
