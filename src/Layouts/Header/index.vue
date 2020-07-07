<template>
  <div class="header-content">
    <div class="right-content">
      用户
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader',
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style lang="less" scoped>
.header-content {
  min-width: calc(100% - 70px);
  display: inline-block;
}
.right-content {
  float: right;
  margin-right: 40px;
}
</style>
