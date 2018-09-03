<template>
    <Timeline class="narrow-timeline">
        <TimelineItem color="green">
            <Icon type="ios-trophy" slot="dot"></Icon>
            <span>发布里程碑版本</span>
        </TimelineItem>
         <TimelineItem v-for="item in items" :key="item.id">
            <p class="time">{{item.date}}</p>
            <p class="content">{{item.content}}</p>
            <p><img src="https://pek3a.qingstor.com/warehouse1/c1.jpg" /></p>
        </TimelineItem>
    </Timeline>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          date: '2018.9.2',
          cotent: 'Hello, SriLanka'
        },
        {
          date: '2018.01',
          content: 'Hello, HongKong'
        },
        {
          date: '2016.1',
          content: 'Hello, Dali'
        },
        {
          date: '2015.1',
          content: 'Hello, LiJiang'
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
</style>
