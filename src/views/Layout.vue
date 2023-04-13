<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <el-menu
            router
            default-active="/layout/"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            background-color="#0x2E8F1"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
        >
          <el-menu-item index="/layout/home">
            <el-icon>
              <House/>
            </el-icon>
            <template #title>首页</template>
          </el-menu-item>
          <el-sub-menu index="/sysrole">
            <template #title>
              <el-icon>
                <Avatar/>
              </el-icon>
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/sysrole/list">角色管理</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <div>
            <span v-if="!isCollapse">
              <el-icon @click="toggleSidebar" size="30px">
                <Fold/>
              </el-icon>
            </span>
            <span v-else>
                <el-icon @click="toggleSidebar" size="30px">
                  <Expand/>
                </el-icon>
            </span>
          </div>
          <el-avatar class="avatar">user</el-avatar>
        </el-header>
        <el-main class="main">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import {ElContainer, ElHeader, ElAside, ElMain, ElMenu, ElMenuItem, ElMenuItemGroup, ElButton} from 'element-plus';
import {ref, reactive} from "vue";
import {Avatar, House, Fold, Expand} from "@element-plus/icons-vue";

const data = reactive({});
//菜单栏是否折叠
const isCollapse = ref(false);

const handleOpen = (k, p) => {
  console.log(`handleOpen: ${k}, ${p}`);
};

const handleClose = (k, p) => {
  console.log(`handleClose: ${k}, ${p}`);
};
const toggleSidebar = () => {
  isCollapse.value = !isCollapse.value;
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.el-menu-vertical-demo {
  height: 100%;
  background-color: #304159;
  color: #bfcbd9;
}

.el-menu-vertical-demo .el-menu-item,
.el-menu-vertical-demo .el-submenu__title {
  font-size: 16px;
  line-height: 40px;
}

.el-menu-vertical-demo .el-menu-item.is-active,
.el-menu-vertical-demo .el-submenu.is-active > .el-submenu__title {
  background-color: rgba(255, 255, 255, 0.1);
}

.header {
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
}

.header div {
  display: flex;
  align-items: center;
}

.header span {
  cursor: pointer;
}

.header el-avatar {
  background-color: #fff;
  font-size: 18px;
  color: #304159;
  margin-right: 20px;
}

.main {
  height: 100%;
  padding: 0;
}

.el-container {
  height: 100vh;
  display: flex;
}

.el-aside {
  width: auto;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-container.el-row {
  height: calc(100vh - 64px);
}

.common-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.el-container:not(.el-row) {
  flex-grow: 1;
}
.avatar{
  margin-right: 20px;
}
.el-menu{
  border-right-width: 0;
}
</style>