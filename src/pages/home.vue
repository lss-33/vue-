<template>
  <div class="content">
    <!-- agoDayHide='1517483961' -->
    <!-- futureDayHide="1526054400" -->
    <Calendar ref="Calendar"></Calendar>
    <br />
  </div>
</template>

<script>
import Calendar from 'vue-calendar-component'
export default {
  components: {
    Calendar
  }
}
</script>
<style scoped>
h3 {
  text-align: center;
  width: 90%;
  margin: auto;
}
.div {
  margin: auto;
  width: 220px;
  height: 44px;
  line-height: 44px;
  background: #0fc37c;
  color: #fff;
  font-size: 17px;
  text-align: center;
  margin-top: 20px;
}
</style>
