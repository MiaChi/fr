<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="https://picsum.photos/1024/480/?image=50"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="https://picsum.photos/1024/480/?image=55" alt="image slot">
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
          ut lacus vel interdum.
        </p>
      </b-carousel-slide>
     <b-carousel-slide v-for="img in imgs" :key="img.id">
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             :src="img.src"
             :text="img.text"
             :caution="img.caution"
             alt="image slot">
        <h1>{{img.head}}</h1>
      </b-carousel-slide>
    </b-carousel>

    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
    <div>
      <h4>{{title}}</h4>
      <p>{{content}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null,
      imgs: [
        {
          src: 'https://a0.muscache.com/im/pictures/5897ee64-8070-4b19-846e-4fdf8a5a708b.jpg',
          caution: 'First slide',
          text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
          head: ''
        },
        {
          src: 'https://a0.muscache.com/im/pictures/0b3823de-03db-49bf-8d0c-9d7f76810bb5.jpg',
          caution: '',
          text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
          head: 'Hello world!'
        },
        {
          src: 'https://a0.muscache.com/im/pictures/0e0026f0-a07d-4718-a4a6-756a5e307e29.jpg',
          caution: '',
          text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
          head: ''
        },
        {
          src: 'https://a0.muscache.com/im/pictures/ecbd8f30-75d6-4a00-8349-5a24d67de8f3.jpg?aki_policy=xx_large_portrait',
          caution: '',
          text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
          head: ''
        }
      ],
      title: '租一椽町屋，且作几日京都猫',
      content: ' 京都，绝对是猫心中真正的日本的样子，也是猫最想长住的地方。'
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
