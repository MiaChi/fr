import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Card from '@/components/Card'
import Note from '@/components/Note'
import Track from '@/components/Track'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/card',
      name: 'vue-card',
      component: Card
    },
    {
      path: '/note',
      name: 'vue-note',
      component: Note
    },
    {
      path: '/track',
      name: 'track',
      component: Track
    }
  ]
})
