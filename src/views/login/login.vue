<template>
  <div class="login-wrap">
    <div class="login-con">
      <div class="title">登录</div>
      <el-form ref="form" :model="form" :rules="rules">
          <el-form-item prop="name">
            <el-input v-model="form.name" placeholder="请输入手机号或邮箱"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" show-password v-model="form.password" placeholder="登录密码"></el-input>
          </el-form-item>
          <p style="height:30px;">
            <router-link to="/findPwd" style="color:#979797;float:right;padding-right:10px;font-size:12px;">
              {{$t('uc.login.forget')}}
            </router-link>
          </p>
          <el-form-item>
            <el-button type="primary" :loading="loading" @click="onSubmit('form')" style="width: 100%">{{$t('uc.login.login')}}</el-button>
          </el-form-item>
          <div class='goreg u-flex u-row-between'>
            <span class="u-font-12">{{$t('uc.login.noaccount')}}</span>
            <router-link to="/register" style="color: #f0ac19; font-size: 12px;">{{$t('uc.login.goregister')}}</router-link>
          </div>
        </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      form: {
        name: '',
        password: '',
      },
      rules: {
        name: [ { required: true, message: '请输入您的邮箱或手机号', trigger: 'blur' }],
        password: [ { required: true, message: '请输入密码', trigger: 'blur' }],
      },
    }
  },
  methods: {
    /* 登录 */
    onSubmit(formName) {
      console.log(formName)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(JSON.parse(JSON.stringify(this.form)))
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrap {
  background: #0b1520 url(../../assets/images/login_bg.png) no-repeat 50%;
  position: relative;
  height: 720px;
  .login-con {
    padding: 20px 30px;
    position: absolute;
    background: #17212e;
    width: 350px;
    height: 330px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-top: 4px solid #f0ac19;
    border-radius: 5px;
    .title {
      height: 70px;
      color: #fff;
      text-align: center;
      font-size: 25px;
    }
    .goreg {
      color: #fff;
    }
  }
}
</style>