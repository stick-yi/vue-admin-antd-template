<template>
  <div class="error-page">
    <div class="title">404</div>
    <div class="main-info">你访问的页面不见了</div>
    <div class="second-info">
      请检查您输入的网址是否正确，请点击以下按钮返回上一个页面
    </div>
    <div class="btns">
      <a-button @click="back">返回上一页</a-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
