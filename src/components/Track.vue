<template>
    <Timeline class="narrow-timeline">
        <TimelineItem color="green">
            <Icon type="ios-trophy" slot="dot"></Icon>
            <span>发布里程碑版本</span>
        </TimelineItem>
         <TimelineItem>
            <p class="time">2018.9.2</p>
            <p class="content">Hello, SriLanka</p>
            <p><img src="https://pek3a.qingstor.com/warehouse1/c1.jpg" /></p>
        </TimelineItem>
        <TimelineItem>
            <p class="time">2018.01</p>
            <p class="content">Hello, HongKong</p>
        </TimelineItem>
        <TimelineItem>
            <p class="time">2016.1</p>
            <p class="content">Hello, Dali</p>
        </TimelineItem>
        <TimelineItem>
            <p class="time">2015.1</p>
            <p class="content">Hello, LiJiang</p>
        </TimelineItem>
    </Timeline>
</template>
<script>
export default {

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
