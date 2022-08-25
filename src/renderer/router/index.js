import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
// import Main from '../components/Main.vue'
import Write from '../components/pages/letter/Write.vue'
import Letter from '../components/pages/Letter.vue'
import Contacts from '../components/pages/Contacts.vue'
import Drafts from '../components/pages/letter/Drafts.vue'
import Inbox from '../components/pages/letter/Inbox.vue'
import Sent from '../components/pages/letter/Sent.vue'
import Star from '../components/pages/letter/Star.vue'

const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
    { path: '/', redirect: '/home' },
    { path: '/home/write', redirect: '/home/letter/write' },
    {
      path: '/home',
      redirect: '/home/letter',
      component: Home,
      children: [
        {
          path: 'letter',
          redirect: '/home/letter/inbox',
          component: Letter,
          children: [
            { path: 'write', component: Write },
            { path: 'drafts', component: Drafts },
            { path: 'inbox', component: Inbox },
            { path: 'sent', component: Sent },
            { path: 'star', component: Star }
          ]
        },
        { path: 'contacts', component: Contacts }
      ]
    },
    { path: '/login', component: Login }
    // { path: '/main', component: Main }
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ]
})

Vue.use(Router)

export default router
