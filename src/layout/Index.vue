<template>
  <el-container>
    <el-aside width="160px">
      <AsideMenu></AsideMenu>
    </el-aside>
    <el-container>
      <el-header>
        <LayoutHeader></LayoutHeader>
      </el-header>
      <el-main>
        <el-card style="height: 99%;">
          <router-view v-slot="{Component}">
            <keep-alive>
              <component :is="Component"></component>
            </keep-alive>
          </router-view>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import AsideMenu from '@/components/AsideMenu.vue';
import LayoutHeader from '../components/LayoutHeader.vue';

</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
}
</style>