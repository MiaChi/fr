<template>
    <Timeline class="narrow-timeline">
        <TimelineItem color="green">
            <Icon type="ios-trophy" slot="dot"></Icon>
            <!-- <span>发布里程碑版本</span> -->
        </TimelineItem>
         <TimelineItem v-for="item in items" :key="item.id">
            <p class="time">{{item.date}}</p>
            <p class="content">{{item.content}}</p>
            <p><img :src="item.img"  /></p>
            <!-- <p><img src="https://pek3a.qingstor.com/warehouse1/c1.jpg" /></p> -->
        </TimelineItem>
    </Timeline>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          date: '2018.11',
          content: '冷场 ｜ 李诞',
          img: '/../static/lengchang.png'
        },
        {
          date: '2018.8',
          content: 'REWORK | Jason Fried and David Heinemeier Hansson',
          img: 'https://pek3a.qingstor.com/warehouse1/c1.jpg'
        },
        {
          date: '2018.6',
          content: 'REMOTE | Jason Fried and David Heinemeier Hansson',
          img: 'https://pek3a.qingstor.com/warehouse1/c1.jpg'
        },
        {
          date: '2018.6',
          content: '一只特立独行的猪｜王小波',
          img: 'https://pek3a.qingstor.com/warehouse1/c1.jpg'
        }
      ]
    }
  }
}
</script>
<style scoped>
    .time{
        font-size: 14px;
        font-weight: bold;
        text-align:left;
    }
    .content{
        padding-left: 5px;
    }
    .narrow-timeline{
    width:50%;
    margin:auto;
    }
    .book-pic{
      height: 200 px;
      width: 700px;
    }
</style>
