<!--
 * @Author: Qun
 * @Date: 2021-09-23 06:50:38
 * @LastEditTime: 2021-09-25 20:08:15
 * @LastEditors: Qun
 * @Description: 
 * @FilePath: \爱玛培训考试系统-前台\src\Mobile\views\home.vue
 * 
-->
<template>
    <div class="home-page">
        <div class="button-group">
            <span><router-link :to="{name: 'Exam', query: {id: 1}}">考试试题一</router-link></span>
          
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .home-page{
        width: 100%;
    }
    .button-group{
        padding: 15px;
    }
    .button-group span{
        display: block;
        margin-bottom: 15px;
        width: 100%;
        height: 40px;
        border-radius: 6px;
        color: #656b79;
        background-color: #f6f8fa;
        box-shadow: 0 0 1px #b8bbbf;
        padding-left: 10px;
    }
    .button-group span a{
        line-height: 40px;
        color: #656b79;
        display: block;
    }
</style>
