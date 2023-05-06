import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginAdmin from  '../views/loginAdmin.vue'
import StepFormContainer from '../views/StepFormContainer.vue'
import ReportView from "../views/ReportView.vue"
import PrintView from "../views/PrintView.vue"
import PrintFinalView from "../views/PrintFinalView.vue"
import TermsAndConditions  from "../views/TermsAndConditions.vue"

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
