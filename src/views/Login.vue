<template>
  <div class="box">
    <el-form
        :model="data.loginForm"
        :rules="data.rules"
        ref="form"
        class="login_form"
    >
      <h1 class="title">用户登录</h1>
      <el-form-item class="form_item" prop="username">
        <el-input
            v-model="data.loginForm.username"
            placeholder="用户名"
            :prefix-icon="User"
            clearable
            size="medium"
        ></el-input>
      </el-form-item>
      <el-form-item class="form_item" prop="password">
        <el-input
            v-model="data.loginForm.password"
            type="password"
            placeholder="密码"
            :prefix-icon="Lock"
            show-password
            clearable
            size="medium"
        >
        </el-input>
      </el-form-item>
      <el-form-item class="form_item">
        <el-button
            type="primary"
            round
            class="submit_button"
            @click="handleSubmit(data.loginForm)"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import {ref, reactive, unref} from "vue";
import {User, Lock} from "@element-plus/icons-vue";
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router";
import {postRequest} from "@/utils/request.js";

const router = useRouter();

const data = reactive({
  loginForm: {
    username: "",
    password: "",
  },
  rules: {
    username: [
      {
        required: true,
        message: "请输入用户名",
        trigger: "blur",
      },
    ],
    password: [
      {
        required: true,
        message: "请输入密码",
        trigger: "blur",
      },
    ],
  },
});
const ruleFrom = ref(null);
let handleSubmit = loginForm => {
  if (loginForm.password !== '' && loginForm.username !== '') {
    postRequest('/admin/system/index/login', loginForm).then(res => {
      if (res.code === 200) {
        router.push('/layout');
      } else {
        ElMessage.error(res.message);
      }
    });
  } else {
    ElMessage.error('请输入用户名或密码');
  }
};
</script>

<style scoped>
.box {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
}

.login_form {
  max-width: 600px;
  width: 400px;
  margin: auto;
  padding: 30px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
  color: #333;
}

.form_item {
  margin-bottom: 20px;
}

.el-input__inner {
  padding: 12px;
  border: none;
  background-color: #f5f5f5;
  color: #666;
}

.el-input__icon {
  color: #bcbcbc;
}

.submit_button {
  display: block;
  width: 100%;
  margin-top: 30px;
  font-size: 16px;
}

@media screen and (max-width: 768px) {
  .login_form {
    max-width: 500px;
    width: 90%;
  }
}

@media screen and (max-width: 480px) {
  .login_form {
    max-width: 90%;
    width: auto;
    padding: 20px;
  }
}
</style>
  