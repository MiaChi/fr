import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Card from '@/components/Card'
import Note from '@/components/Note'
import iViewTrack from '@/components/Track'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
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
      name: 'iview-track',
      component: iViewTrack
    }
  ]
})
