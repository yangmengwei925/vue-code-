<!--
 * @Author: Qun
 * @Date: 2021-09-25 16:09:08
 * @LastEditTime: 2021-09-25 20:15:28
 * @LastEditors: Qun
 * @Description: 
 * @FilePath: \爱玛培训考试系统-前台\src\Mobile\layout\layout-header.vue
 * 
-->
<template>
  <div>
    <div class="header">
      <img class="header-logo" :src="require('../assets/img/logo.jpg')" />
      <Icon type="android-menu"></Icon>
    </div>
    <div class="nevr"><router-link :to="{path: '/'}">首页&nbsp;>&nbsp;考试&nbsp;>&nbsp;当前考试</router-link></div>
  </div>
</template>

<script>
export default {
  name: "layout-header",
  data() {
    return {};
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 45px;
  background-color: #e30073;
  color: #f8f8fb;
  padding: 5px 15px;
  text-align: left;
}
.header img {
  height: 35px;
}
.nevr {
  text-align: left;
  padding: 10px 15px;
  background-color: #f8f8fb;
}
.nevr a{
  color: black;
}
.header i {
  font-size: 30px;
  float: right;
  margin-top: 2px;
}
</style>
