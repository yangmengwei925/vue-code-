<!--
 * @Author: Qun
 * @Date: 2021-09-25 16:09:08
 * @LastEditTime: 2021-09-25 20:11:08
 * @LastEditors: Qun
 * @Description: 
 * @FilePath: \爱玛培训考试系统-前台\src\Mobile\layout\layout.vue
 * 
-->
<template>
  <div class="layout">
    <layout-header></layout-header>
    <div class="content">
      <router-view></router-view>
    </div>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import LayoutHeader from "./layout-header";
import LayoutFooter from "./layout-footer";

export default {
  name: "layout",
  components: { LayoutHeader, LayoutFooter },
  created() {
    if (this.$route.name === "layout") {
      this.$router.push({ name: "index" });
    }
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.layout {
  width: 100%;
  margin: 0;
  padding: 0;
}

.content {
  width: 100%;
  min-height: calc(100vh - 283px);
}
</style>
