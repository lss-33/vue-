<template>
  <section class="handleBox">
    <header>
      <router-link class="return" :to="{path:'/',query:{time:time}}"></router-link>
      <h3>日志管理</h3>
    </header>

    <!-- 新增 -->
    <div class="content" v-if="!id">
      <div class="info">
        <span>日志标题：</span>
        <div class="inp">
          <input type="text" v-model="title" />
        </div>
      </div>
      <div class="info">
        <span>日志内容：</span>
        <div class="inp">
          <textarea v-model="content"></textarea>
        </div>
      </div>
      <a href="javascript:;" class="submit" @click="addHandle">新增</a>
    </div>

    <!-- 显示 -->
    <div class="content" v-else>
      <div class="tip" v-if="!infoData"></div>
      <div v-else>
        <div class="info">
          <span>日志标题：</span>
          <div class="inp">
            <p>{{infoData.title}}</p>
          </div>
        </div>
        <div class="info">
          <span>日志内容：</span>
          <div class="inp">
            <p>{{infoData.content}}</p>
          </div>
        </div>
        <a href="javascript:;" class="submit" @click="removeHandle">删除</a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      id: null,
      time: '',
      title: '',
      content: '',
      infoData: null
    }
  },
  created() {
    let { time, id } = this.$route.query
    if (!time) return
    this.time = decodeURIComponent(time)
    if (id) {
      this.id = id
      //=>获取数据
      this.infoData = this.$Storage.get(this.time, this.id)
    }
  },
  methods: {
    removeHandle() {
      let flag = window.confirm('确定要删除此任务吗？')
      if (flag) {
        flag = this.$Storage.del(this.time, this.id)
        if (flag) {
          alert('恭喜您，删除成功！')
          this.$router.push(`/?time=${this.time}`)
        }
      }
    },
    addHandle() {
      let flag = this.$Storage.set(this.time, this.title, this.content)
      if (flag) {
        alert('恭喜您，增加成功！')
        this.$router.push(`/?time=${this.time}`)
      }
    }
  }
}
</script>
<style lang="less">
.handleBox {
  header {
    position: relative;
    height: 1rem;
    line-height: 1rem;
    color: #fff;
    background: #0fc37c;
    .return {
      position: absolute;
      top: 0;
      left: 0;
      width: 1rem;
      height: 1rem;
      background: url(../assets/images/return.svg) no-repeat 50%;
      background-size: 40% 40%;
    }
    h3 {
      text-align: center;
      font-size: 0.32rem;
      font-weight: 400;
    }
  }
  .content {
    padding: 0.3rem;
    .info {
      margin-bottom: 0.2rem;
      line-height: 0.6rem;
      font-size: 0.28rem;
      input {
        box-sizing: border-box;
        padding: 0 0.1rem;
        width: 90%;
        height: 0.6rem;
        line-height: 0.6rem;
        border: 0.02rem solid #ddd;
      }
      textarea {
        box-sizing: border-box;
        padding: 0 0.1rem;
        width: 90%;
        line-height: 0.6rem;
        border: 0.02rem solid #ddd;
      }
    }
    .submit {
      display: block;
      width: 20%;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      font-size: 0.32rem;
      color: #fff;
      background: #0fc37c;
    }
  }
}
</style>
