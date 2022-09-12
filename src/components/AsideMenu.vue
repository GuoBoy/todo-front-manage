<template>
  <!-- <img src="../assets/logo.png" alt="" width="50" style="text-align: center;"> -->
  <div class="aside-container">
    <div class="title">ToDo MS</div>
    <el-menu :default-active="activeMenu" router v-for="menu in menus" :key="menu.path"
      @select="(e:string) => activeMenu = e">
      <el-menu-item :index="menu.path">
        <template #title>
          <!-- <i :class="'bi-' + menu.icon" size="100"></i> -->
          <span style="padding-left: 1vw;">{{ menu.title }}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>

</template>

<script lang="ts" setup>;
import { menus } from "@/model/menus";
import { ref } from "vue";

const activeMenu = ref(menus[0].path);
</script>

<style lang="scss" scoped>
.aside-container {
  background-color: burlywood;
  height: 100%;

  .el-menu {
    background-color: burlywood;

  }

  .title {
    text-align: center;
  }
}
</style>