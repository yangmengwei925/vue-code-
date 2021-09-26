<!--
 * @Author: Qun
 * @Date: 2021-09-25 16:09:08
 * @LastEditTime: 2021-09-25 20:02:57
 * @LastEditors: Qun
 * @Description: 
 * @FilePath: \爱玛培训考试系统-前台\src\Mobile\layout\layout-footer.vue
 * 
-->
<template>
  <div class="footer">
    <div class="footer-item">
      地址：xx市xx区xx商务中心xxxx室
    </div>
    <div class="footer-item">
      电话：0000-00000
    </div>
    <div class="footer-item">
      邮箱：00000000@xx.xxx
    </div>
    <div class="footer-item">
      Copyright @ 2021-2022 京ICP备xxxx号
    </div>
  </div>
</template>

<script>
export default {
  name: "layout-footer",
};
</script>

<style scoped>
.footer {
  width: 100%;
  height: 200px;
  opacity: 1;
  background: #333333;
  padding-top: 40px;
  border-top: 3px solid rgb(227, 0, 115);
}

.footer-item {
  color: #b2b2b2;
  text-align: center;
  font-size: 14px;
  font-weight: Normal;
  font-family: Microsoft YaHei, Microsoft YaHei-Normal;
  line-height: 28px;
}
</style>