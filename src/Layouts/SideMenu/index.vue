<template>
  <div class="side-menu">
    <logo class="logo" />
    <a-menu
      theme="dark"
      :selectedKeys="selectedKeys"
      :openKeys.sync="openKeys"
      mode="inline"
    >
      <template v-for="item in menu">
        <a-menu-item
          v-if="!item.children"
          :key="item.path"
          @click="() => $router.push({ path: item.path, query: $route.query })"
        >
          <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.path" />
      </template>
    </a-menu>
  </div>
</template>

<script>
import Logo from './Logo';
import { mapGetters } from 'vuex';
import SubMenu from './SubMenu';
export default {
  name: 'LayoutSider',
  components: { Logo, SubMenu },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      openKeys: this.collapsed
        ? []
        : [this.$route.path.substr(0, this.$route.path.lastIndexOf('/'))]
    };
  },
  computed: {
    ...mapGetters(['menu']),
    // 选中菜单
    selectedKeys() {
      return [this.$route.path];
    }
  },
  watch: {
    collapsed: {
      handler(val) {
        if (val) {
          this.openKeys = [];
        } else {
          this.openKeys = [
            this.$route.path.substr(0, this.$route.path.lastIndexOf('/'))
          ];
        }
      }
    }
  }
};
</script>

<style lang="less" scoped></style>
