<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" width="230px">
      <side-menu :collapsed="collapsed" />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0;">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <Header />
      </a-layout-header>
      <breadcrumb-layout />
      <a-layout-content class="main-containt">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import SideMenu from '@/Layouts/SideMenu';
import Header from '@/Layouts/Header';
import BreadcrumbLayout from '@/Layouts/BreadcrumbLayout';
export default {
  name: 'Layout',
  components: { SideMenu, Header, BreadcrumbLayout },
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style lang="less">
.main-containt {
  margin: 15px;
  padding: 10px;
  background: #ffffff;
  min-height: 500px;
}
.trigger {
  vertical-align: top; // 修复图标下降
  font-size: 20px;
  line-height: 64px;
  padding: 0 25px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.ant-layout-sider {
  width: 220px;
  max-width: 220px;
  flex: 0 0 220px;
}
</style>
