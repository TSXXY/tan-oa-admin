<template>
  <div>
    角色管理
  </div>
</template>

<script setup>
import {reactive} from "vue";
import {getRequest} from "@/utils/request.js";

const data = reactive({
  list: [],
  page: 1,
  limit: 10,
  total: '',
  current: 0,
  roleName: null

});

getRequest(`/admin/system/sysRole/${data.page}/${data.limit}`, {
    roleName: data.roleName
}).then(res => {
  data.list = res.records;
  console.log(data.list);
}).catch(err => {
  console.log(err);
});
</script>

<style scoped>

</style>