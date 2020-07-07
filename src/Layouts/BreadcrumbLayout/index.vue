<template>
  <a-breadcrumb style="margin: 15px; margin-bottom: 0;">
    <a-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="item.name">
      <router-link
        v-if="index != breadcrumbList.length - 1"
        :to="{ path: item.path === '' ? '/' : item.path }"
        >{{ item.meta.title }}
      </router-link>
      <span v-else>{{ item.meta.title }}</span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data() {
    return {};
  },
  computed: {
    breadcrumbList() {
      let breadList = [];
      this.$route.matched.forEach(item => {
        breadList.push(item);
      });
      return breadList;
    }
  }
};
</script>

<style lang="less" scoped></style>
