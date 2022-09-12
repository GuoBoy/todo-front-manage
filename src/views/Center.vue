<template>
  <div class="setting-page">
    <el-tag type="success">{{userStore.userInfo?.token}}</el-tag>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store';
const userStore = useUserStore()
</script>

<style scoped lang="scss">
.setting-page {
  .setting-item {
    display: flex;
    align-items: center;
    margin: 5px;

    .el-input {
      width: 80vw;
    }
  }

  .return-btn {
    margin: 10px;
    width: 30%;
  }
}
</style>