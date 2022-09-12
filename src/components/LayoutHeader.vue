<template>
  <div class="header-container">
    <!-- <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb> -->
    <div></div>
    <el-dropdown>
      <span class="el-dropdown-link">
        {{userStore.userInfo.username}}
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>{{userStore.userInfo.token}}</el-dropdown-item>
          <el-dropdown-item @click="onCopy">复制Token</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>

</template>

<script setup lang="ts">
import { useUserStore } from '@/store';

const onCopy = () => {
  window.navigator.clipboard.writeText(userStore.userInfo.token)
}

const userStore = useUserStore()
</script>

<style scoped lang="scss">
.header-container {
  background-color: #f4cbcb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 20px;
}
</style>