<template>
  <div>
    <b-card-group columns>
      <b-card no-body
        style="max-width: 20rem;"
        >
      <h4 slot="header">旅行</h4>
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
        <b-card-img src="https://placekitten.com/480/210"
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
        <b-card-img src="https://placekitten.com/480/210"
                    alt="Image"
                    bottom></b-card-img>
    </b-card>
    <b-card no-body
        style="max-width: 20rem;"
        >
      <h4 slot="header">读书</h4>
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
        <b-card-img src="https://placekitten.com/480/210"
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
import fetchJsonp from 'fetch-jsonp'
export default {
  data () {
    return {
      cards: [
        {
          headImg: '',
          header: 'Read',
          subHeader: 'some quick example text ro build',
          listItems: [{text: 'item0', linkTo: '#/note'}, {text: 'item1', linkTo: '#/note'}, {text: 'item2', linkTo: '#/note'}],
          link: '#/track',
          footer: 'This is footer',
          footImg: 'https://placekitten.com/480/210'
        },
        {
          headImg: 'https://placekitten.com/380/199',
          header: 'Read',
          subHeader: 'some quick example text ro build',
          listItems: [{text: 'item0', linkTo: '#/note'}, {text: 'item1', linkTo: '#/note'}],
          link: '#/track',
          footer: 'This is footer',
          footImg: 'https://placekitten.com/480/210'
        }
      ]
    }
  },
  created () {
    // https://www.weibo.com/p/1005051263905037/wenzhang
    // https://www.weibo.com/ttarticle/p/show?id=2309404194775615067422
    fetchJsonp('https://www.google.com', {timeout: 6000}).then(function (response) {
      console.log('response')
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  }
}
</script>
<style>

</style>
