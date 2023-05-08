import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginAdmin from  '../views/loginAdmin.vue'
import StepFormContainer from '../views/StepFormContainer.vue'
import ReportView from "../views/ReportView.vue"
import PrintView from "../views/PrintView.vue"
import PrintFinalView from "../views/PrintFinalView.vue"
import TermsAndConditions  from "../views/TermsAndConditions.vue"
import MainAdmin from   "../views/MainAdmin.vue" 
import MainPending from "../views/MainPending.vue" 
import MainBoard from "../views/MainBoard.vue" 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/fill-kenes',
    name: 'fill-kenes',
    component: StepFormContainer
  },
  
    {
      path: '/admin',
      name: 'admin',
      component: MainAdmin
    },
  
    {
      path: '/admin/pending',
      name: 'pending',
      component: MainPending
    },
    {
      path: '/admin/board',
      name: 'board',
      component: MainBoard
    },
  
  {
    path: '/login',
    name: 'login',
    component: loginAdmin
  }, {
    path: '/reports/:id',
    name: ':id',
    component: ReportView
  },
  {
    path: '/print-view',
    name: 'print-view',
    component: PrintView
  }, {
    path: '/print-final-view',
    name: 'print-final-view',
    component: PrintFinalView
  },
  {
    path: '/terms-and-conditions',
    name: 'terms-and-conditions',
    component: TermsAndConditions
  },

  
  

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
