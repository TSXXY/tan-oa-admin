<template>
  <div>
    <el-button @click="getData">
      点击我
    </el-button>
    <div v-for="(item,index) in data.list " :key="index">
      {{ item }}
    </div>
  </div>
</template>

<script setup>
import {reactive} from "vue";
import {getRequest} from "@/utils/request.js";
import {onMounted} from "vue";

const data = reactive({
  list: [],
  page: 1,
  limit: 10,
  total: '',
  current: 0,
  roleName: null

});

const getData = () => {
  getRequest(`/admin/system/sysRole/${data.page}/${data.limit}`, {
    roleName: data.roleName
  }).then(res => {
    data.list = res.data.records;
  }).catch(err => {
    console.log(err);
  });
}
onMounted(() => {
  getData()
})


</script>

<style scoped>

</style>