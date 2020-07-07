<template>
  <div class="login-page">
    <div class="login-form">
      登录页
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.login-page {
  width: 100vw;
  height: 100vh;
  background: #000000;
}

.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  background-color: #fff;
  width: 24vw;
  height: 50vh;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: black 0px 0px 10px;
}
</style>
