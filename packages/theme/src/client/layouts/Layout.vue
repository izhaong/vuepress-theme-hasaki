<!--
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-04-10 01:24:51
 * @LastEditTime: 2022-04-10 14:36:35
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description: 
 * @FilePath: /vuepress-theme-hasaki/hasaki/lib/layouts/Layout.vue
-->


<template>
  <div class="my-theme-layout">
    <Navbar />
    <Sidebar />
    <Content />
  </div>
</template>

<script lang="ts" setup>
import Navbar from '@theme/Navbar.vue'
import Sidebar from '@theme/Sidebar.vue'
</script>