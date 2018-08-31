<template>
  <timeline>
    <timeline-title>你的足迹</timeline-title>
    <timeline-item bg-color="#9dd8e0">Hello, SriLanka</timeline-item>
    <timeline-item :hollow="true">Hello, HongKong</timeline-item>
  </timeline>
</template>

<script>
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'

export default {
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  }
}
</script>
