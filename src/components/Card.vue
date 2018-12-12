<template>
  <div>
    <b-card-group columns>
      <b-card no-body
        style="max-width: 20rem;"
        >
      <h4 slot="header">学习</h4>
        <b-card-body>
            <p class="card-text">
                Summary of travel
                quick example text
            </p>
        </b-card-body>
        <b-list-group flush>
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
        </b-list-group>
        <b-card-body>
            <a href="#"
               class="card-link">Card link</a>
            <a href="#"
               class="card-link">Another link</a>
        </b-card-body>
        <b-card-footer>This is a footer</b-card-footer>
        <b-card-img src="https://placekitten.com/480/204"
                    alt="Image"
                    bottom></b-card-img>
      </b-card>
    <b-card no-body
        style="max-width: 20rem;"
        >
      <h4 slot="header">Hello World</h4>
        <b-card-body>
            <p class="card-text">
                2:Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
        </b-card-body>
        <b-list-group flush>
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
        </b-list-group>
        <b-card-body>
            <a href="#"
               class="card-link">Card link</a>
            <a href="#"
               class="card-link">Another link</a>
        </b-card-body>
        <b-card-footer>This is a footer</b-card-footer>
        <b-card-img src="https://placekitten.com/480/200"
                    alt="Image"
                    bottom></b-card-img>
    </b-card>
    <b-card no-body
        style="max-width: 20rem;"
        >
      <h4 slot="header">读书</h4>
        <b-card-body>
            <p class="card-text">
              很有意思
            </p>
        </b-card-body>
        <b-list-group flush>
            <b-list-group-item><a href="#/track/">冷场 ｜ 李诞</a></b-list-group-item>
            <b-list-group-item><a href="#/track/">REMOTE | Jason Fried and David Heinemeier Hansson</a></b-list-group-item>
            <b-list-group-item><a href="#/track/">REWORK | Jason Fried and David Heinemeier Hansson</a></b-list-group-item>
            <b-list-group-item><a href="#/track/">一只特立独行的猪 ｜ 王小波</a></b-list-group-item>
        </b-list-group>
        <b-card-body>
            <a href="#"
               class="card-link">Card link</a>
            <a href="#"
               class="card-link">Another link</a>
        </b-card-body>
        <!-- <b-card-footer>This is a footer</b-card-footer> -->
        <b-card-img src="https://placekitten.com/480/201"
                    alt="Image"
                    bottom></b-card-img>
    </b-card>
    <b-card no-body
        style="max-width: 20rem;"
        v-for="card in cards"
        :key="card.id"
        :img-src="card.headImg"
        img-top>
      <h4 slot="header">{{card.header}}</h4>
      <b-card-body>
        <p class="card-text">{{card.subHeader}}</p>
      </b-card-body>
      <b-list-group flush>
        <b-list-group-item v-for="li in card.listItems" :key="li.text">
        <a class="card-link" :href="li.linkTo">{{li.text}}</a>
        </b-list-group-item>
      </b-list-group>
      <b-card-body>
        <a :href="card.link" class="card-link">More</a>
      </b-card-body>
      <b-card-footer>{{card.footer}}</b-card-footer>
      <b-card-img :src="card.footImg"
                  alt="Image"
                  bottom></b-card-img>
    </b-card>
    </b-card-group>
  </div>
</template>
<script>
// import fetchJsonp from 'fetch-jsonp'
export default {
  data () {
    return {
      cards: []
    // cards: this.$store.state.cards
    //   cards: [
    //     {
    //       headImg: '',
    //       header: 'Read',
    //       subHeader: 'some quick example text ro build',
    //       listItems: [{text: 'item0', linkTo: '#/note'}, {text: 'item1', linkTo: '#/note'}, {text: 'item2', linkTo: '#/note'}],
    //       link: '#/track',
    //       footer: 'This is footer',
    //       footImg: 'https://placekitten.com/480/204'
    //     },
    //     {
    //       headImg: 'https://placekitten.com/380/199',
    //       header: 'Read',
    //       subHeader: 'some quick example text ro build',
    //       listItems: [{text: 'item0', linkTo: '#/note'}, {text: 'item1', linkTo: '#/note'}],
    //       link: '#/track',
    //       footer: 'This is footer',
    //       footImg: 'https://placekitten.com/480/210'
    //     }
    //   ]
    }
  },
  created () {
    // https://www.weibo.com/p/1005051263905037/wenzhang
    // https://www.weibo.com/ttarticle/p/show?id=2309404194775615067422
    // fetchJsonp('https://api.weibo.com/2/favorites.json?access_token=2.00H8NX4BoGuhsC867e46a17a0fmskj').then(function (response) {
    //   console.log('response')
    // }).catch(function (ex) {
    //   console.log('parsing failed', ex)
    // })
    fetch('http://localhost:3000').then(function (sres) {
      console.log(sres)
      return sres.json()
      // here need use arrow function to make 'this' work as expected
    }).then((sjson) => {
      console.log(sjson)
      let listItems = []
      sjson.forEach(function (item) {
        listItems.push({text: item.title, linkTo: item.href})
      })
      this.cards.push({
        headImg: '',
        header: '旅行',
        subHeader: 'It is a beautiful world',
        listItems: listItems,
        link: 'https://weibo.com/p/1005051263905037/wenzhang',
        footer: 'Don\'t worry, be happy',
        footImg: 'https://placekitten.com/480/199'
      })
    })
  }
}
</script>
<style>

</style>
