<template>
  <div class="register-wrap">
    <div class="register-con">
      <div class="register-btn u-flex u-row-around u-font-16 u-p-t-10 u-p-b-30">
        <!-- 手机注册 -->
        <el-link
          :underline="false"
          :class="{'on' : changeActive === 'phoneForm'}"
          @click.native="handleTab('phoneForm')">{{$t("uc.regist.telregist")}}</el-link>
        <!-- 邮箱注册 -->
        <el-link
          class="u-m-l-40"
          :underline="false"
          :class="{'on' : changeActive === 'emailForm'}"
          @click.native="handleTab('emailForm')">{{$t("uc.regist.emailregist")}}</el-link>
      </div>
      <div class="register-form">
        <!-- 手机注册 -->
        <el-form ref="phoneForm" :model="phoneForm" :rules="rules" v-if="changeActive === 'phoneForm'">
          <div class="phone-num u-flex u-col-top">
            <el-select v-model="area" placeholder="+1" class="area u-m-r-10"
              filterable
              @change="areaChange">
              <el-option value="+1">
                <div class="u-flex u-row-between">
                  <span>+1</span>
                  <span>{{ $t('uc.regist.American') }}</span>
                </div>
              </el-option>
              <el-option value="+86">
                <div class="u-flex u-row-between">
                  <span>+86</span>
                  <span>{{ $t('uc.regist.china') }}</span>
                </div>
              </el-option>
              <el-option value="+65">
                <div class="u-flex u-row-between">
                  <span>+65</span>
                  <span>{{ $t('uc.regist.singapore') }}</span>
                </div>
              </el-option>
              <el-option value="+82">
                <div class="u-flex u-row-between">
                  <span>+82</span>
                  <span>{{ $t('uc.regist.korea') }}</span>
                </div>
              </el-option>
              <el-option value="+81">
                <div class="u-flex u-row-between">
                  <span>+81</span>
                  <span>{{ $t('uc.regist.japan') }}</span>
                </div>
              </el-option>
              <el-option value="+66">
                <div class="u-flex u-row-between">
                  <span>+66</span>
                  <span>{{ $t('uc.regist.thailand') }}</span>
                </div>
              </el-option>
              <el-option value="+7">
                <div class="u-flex u-row-between">
                  <span>+7</span>
                  <span>{{ $t('uc.regist.russia') }}</span>
                </div>
              </el-option>
            </el-select>
            
            <el-form-item class="phone" prop="phoneNum">
              <el-input v-model="phoneForm.phoneNum" placeholder="手机号码"></el-input>
            </el-form-item>
          </div>
          <el-form-item prop="phoneCode">
            <el-input v-model="phoneForm.phoneCode" placeholder="短信验证码">
              <template slot="suffix">
                <el-button class="send-code" @click="sendPhoneCode" :disabled="disPhoneCodeBtn">{{codeText}}</el-button>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="phonePs">
            <el-input type="password" show-password v-model="phoneForm.phonePs" placeholder="登录密码"></el-input>
          </el-form-item>
          <el-form-item prop="phonePs2">
            <el-input type="password" show-password v-model="phoneForm.phonePs2" placeholder="确认密码"></el-input>
          </el-form-item>
          <el-form-item label="邀请码(选填)">
            <el-input v-model="phoneForm.name" placeholder="邀请码" style="width: 100%"></el-input>
          </el-form-item>
          <div class="u-text-center u-p-b-20">
            <el-checkbox v-model="agree">{{$t('uc.regist.agreement')}}</el-checkbox>
          </div>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('phoneForm')" style="width: 100%">{{$t('uc.regist.regist')}}</el-button>
          </el-form-item>
        </el-form>
        <!-- 邮箱注册 -->
        <el-form ref="emailForm" :model="emailForm" :rules="rules" v-if="changeActive === 'emailForm'">
          <div class="phone-num u-flex u-col-top">
            <el-form-item class="phone" prop="emailNum">
              <el-input v-model="emailForm.emailNum" placeholder="邮箱地址"></el-input>
            </el-form-item>
          </div>
          <el-form-item prop="emailCode">
            <el-input v-model="emailForm.emailCode" placeholder="邮箱验证码">
              <template slot="suffix">
                <el-button class="send-code">{{codeText}}</el-button>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="emailPs">
            <el-input type="password" show-password v-model="emailForm.emailPs" placeholder="登录密码"></el-input>
          </el-form-item>
          <el-form-item prop="emailPs2">
            <el-input type="password" show-password v-model="emailForm.emailPs2" placeholder="确认密码"></el-input>
          </el-form-item>
          <el-form-item label="邀请码(选填)">
            <el-input v-model="emailForm.name" placeholder="邀请码" style="width: 100%"></el-input>
          </el-form-item>
          <div class="u-text-center u-p-b-20">
            <el-checkbox v-model="agree">{{$t('uc.regist.agreement')}}
            </el-checkbox>
          </div>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('emailForm')" style="width: 100%">{{$t('uc.regist.regist')}}</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    // 验证确认密码
    const validateRepassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t("uc.regist.confirmpwdtip")))
      } else if (value !== this.phoneForm.phonePs) {
        callback(new Error(this.$t("uc.regist.confirmpwderr")))
      } else {
        callback()
      }
    }
    const validateRepassword2 = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t("uc.regist.confirmpwdtip")))
      } else if (value !== this.emailForm.phonePs) {
        callback(new Error(this.$t("uc.regist.confirmpwderr")))
      } else {
        callback()
      }
    }
    // 邮箱号验证
    const validateEmail = (rule, value, callback) => {
      if (value == "") {
        callback(new Error(this.$t("uc.regist.emailtip")));
      } else if (!this.$yjl.test.email(this.emailForm.emailNum)) {
        callback(new Error(this.$t("uc.regist.emailerr")));
      } else {
        callback();
      }
    }
    return {
      codeText: '发送验证码',
      disPhoneCodeBtn: false,
      changeActive: 'phoneForm',
      phoneForm: {
        phoneNum: '',
        phoneCode: '',
        phonePs: '',
        phonePs2: ''
      },
      emailForm: {
        emailNum: '',
        emailCode: '',
        emailPs: '',
        emailPs2: ''
      },
      rules: {
        phoneNum: [ { required: true, message: '请输入手机号', trigger: 'blur' }],
        phoneCode: [ { required: true, message: '请输入短信验证码', trigger: 'blur' }],
        phonePs: [ { required: true, message: '请输入登录密码', trigger: 'blur' }],
        phonePs2: [ { validator: validateRepassword, trigger: 'blur' }],

        emailNum: [ { validator: validateEmail, trigger: 'blur' }],
        emailCode: [ { required: true, message: '请输入邮箱验证码', trigger: 'blur' }],
        emailPs: [ { required: true, message: '请输入登录密码', trigger: 'blur' }],
        emailPs2: [ { validator: validateRepassword2, trigger: 'blur' }],
      },
      agree: true,
      area: '',
      areas: [
        { value: '+1',  label: this.$t('uc.regist.American') },
        { value: '+86', label: this.$t('uc.regist.china') },
        { value: '+65', label: this.$t('uc.regist.singapore') },
        { value: '+82', label: this.$t('uc.regist.korea') },
        { value: '+81', label: this.$t('uc.regist.japan') },
        { value: '+66', label: this.$t('uc.regist.thailand') },
        { value: '+7',  label: this.$t('uc.regist.russia') },
        { value: '+82', label: this.$t('uc.regist.uk') },
        { value: '+82', label: this.$t('uc.regist.vietnam') },
        { value: '+82', label: this.$t('uc.regist.india') },
        { value: '+82', label: this.$t('uc.regist.italy') },
        { value: '+82', label: this.$t('uc.regist.hk') },
        { value: '+82', label: this.$t('uc.regist.malaysia') },
        { value: '+82', label: this.$t('uc.regist.taiwan') },
        { value: '+82', label: this.$t('uc.regist.turkey') },
        { value: '+82', label: this.$t('uc.regist.germany') },
        { value: '+82', label: this.$t('uc.regist.france') },
        { value: '+82', label: this.$t('uc.regist.spain') },
      ]
    }
  },
  methods: {
    /* tab */
    handleTab(formName) {
      // console.log(formName)
      this.changeActive = formName
      // 切换时，表单重置
      this.$refs.phoneForm && this.$refs.phoneForm.resetFields()
      this.$refs.emailForm && this.$refs.emailForm.resetFields()
    },
    /* 选择国际区号 */
    areaChange(val) {
      console.log(val)
    },
    /* 发送手机验证码 */
    sendPhoneCode() {
      if (this.phoneForm.phoneNum == '') {
        this.$notify.error({
          title: '请输入手机号',
          duration: '3000'
        })
        return
      }
      // 手机号不做效验
      // if (!this.$yjl.test.mobile(this.phoneForm.phoneNum)) {
      //   this.$notify.error({
      //     title: '手机号不正确，请重新输入',
      //     duration: '3000'
      //   })
      //   return
      // }
      this.countDown(60)
    },
    /* 倒计时 */
    countDown(time) {
      if (time == 0) {
        this.disPhoneCodeBtn = false
        this.codeText = '发送验证码'
        return
      } else {
        this.disPhoneCodeBtn = true
        this.codeText = `重新发送(${time})`
        time--
      }
      setTimeout(() => {
        this.countDown(time)
      }, 1000)
    },
    /* 提交注册 */
    onSubmit(formName) {
      console.log(formName)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          // 手机注册
          if (formName == 'phoneForm') {
            console.log(JSON.parse(JSON.stringify(this.phoneForm)))
          }
          // 邮箱注册
          else {
            console.log(this.emailForm)
          }
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
.register-wrap {
  background: #0b1520 url(../../assets/images/login_bg.png) no-repeat 50%;
  position: relative;
  height: 720px;
  .register-con {
    padding: 20px 30px;
    position: absolute;
    background: #17212e;
    width: 350px;
    height: 485px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-top: 4px solid #f0ac19;
    border-radius: 5px;
    .register-btn {
      ::v-deep .el-link--inner {
        font-size: 16px;
        color: #828ea1;
        &:hover {
          color: #f0ac19;
        }
      }
      .on {
        ::v-deep .el-link--inner {
          color: #f0ac19;
          &:hover {
            color: #f0ac19;
          }
        }
      }
    }
    .register-form {
      .phone-num {
        .area {
          flex: 1;
        }
        .phone {
          flex: 2;
        }
      }
      .send-code {
        color: #f0ac19 !important;
        border-color: #f0ac19 !important;
        background-color: transparent !important;
      }
      ::v-deep .el-input__suffix {
        right: 0 !important;
      }
    }
  }
}
</style>