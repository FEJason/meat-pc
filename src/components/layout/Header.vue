<template>
  <div class="header-wrap">
    <header>
      <div class="u-flex u-row-between">
        <div class="u-flex">
          <!-- logo -->
          <h1 class="header-logo">
            <router-link to="/" class="u-flex u-col-center">
              <img src="@/assets/img/logo.png" alt="logo">
            </router-link>
          </h1>
          <!-- 导航 -->
          <nav class="header-nav">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="transparent"
              text-color="#828ea1"
              active-text-color="#f0a70a">
              <el-menu-item index="1">
                <router-link to="/">{{$t("header.index")}}</router-link>
              </el-menu-item>
              <el-menu-item index="2">
                <router-link to="/">{{$t("header.exchange")}}</router-link>
              </el-menu-item>
              <el-menu-item index="3">
                <router-link to="/">{{$t("header.ctc")}}</router-link>
              </el-menu-item>
              <el-menu-item index="4">
                <router-link to="/">{{$t("header.invite")}}</router-link>
              </el-menu-item>
              <el-menu-item index="5">
                <router-link to="/">{{$t("header.helpcenter")}}</router-link>
              </el-menu-item>
            </el-menu>
          </nav>
        </div>
        <!-- 右侧 -->
        <div class="u-flex u-font-14">
          <div v-if="!isLogin">
            <router-link to="/login">
              <el-link type="info" :underline="false">登录</el-link>
            </router-link>
            <router-link to="/register">
              <el-link type="info" :underline="false" class="u-m-l-24">注册</el-link>
            </router-link>
          </div>
          <div v-else>
            <el-link type="info" :underline="false">个人中心</el-link>
            <el-dropdown @command="handleCommand" class="u-m-l-24">
              <div class="el-dropdown-link u-flex" style="color: 828ea1">
                <span class="u-line-1" style="display: block; width: 50px;">1833589489</span>
                <i class="el-icon-caret-bottom el-icon--right"></i>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>资金管理</el-dropdown-item>
                <el-dropdown-item>交易管理</el-dropdown-item>
                <el-dropdown-item>创新管理</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <el-popover
            class="u-m-l-20"
            placement="top-start"
            trigger="hover">
            <div class="u-text-center">
              <div class="down-app">
                <img src="@/assets/images/biyongqrcode.png" alt="下载APP">
              </div>
              <div>扫一扫下载APP</div>
            </div>
            <el-button slot="reference">App下载</el-button>
          </el-popover>
          <!-- 选择语言 -->
          <el-dropdown @command="handleCommand" class="u-m-l-24">
            <el-link type="info" :underline="false" class="el-dropdown-link">
              {{langValue}}<i class="el-icon-arrow-down el-icon--right"></i>
            </el-link>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="en_US">English</el-dropdown-item>
              <el-dropdown-item command="ja_JP">日本語</el-dropdown-item>
              <el-dropdown-item command="ko_KR">한국어</el-dropdown-item>
              <el-dropdown-item command="de_DE">Deutsche</el-dropdown-item>
              <el-dropdown-item command="fr_FR">français</el-dropdown-item>
              <el-dropdown-item command="it_IT">italiano</el-dropdown-item>
              <el-dropdown-item command="es_ES">Español</el-dropdown-item>
              <el-dropdown-item command="zh_HK">繁體中文</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </header> 
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex"
let locales = {
  'en_US': 'English',
  'ja_JP': '日本語',
  'ko_KR': '한국어',
  'de_DE': 'Deutsche',
  'fr_FR': 'français',
  'it_IT': 'italiano',
  'es_ES': 'Español',
  'zh_HK': '繁體中文',
}
export default {
  props: {
    activeIndex: {
      type: String,
      default: '1'
    }
  },
  data() {
    return {
    }
  },
  computed: {
		...mapState('user', ['isLogin', 'lang']),
    langValue() {
      this.$i18n.locale = this.lang;
      return locales[this.lang]
    }
  },
  methods: {
    ...mapMutations('user', ['SET_LANG']),
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    /* 选择语言 */
    handleCommand(command) {
      this.SET_LANG(command)
      this.$i18n.locale = command
    }
  }
}
</script>

<style lang="scss" scoped>
.header-wrap {
  background: #172636;
  padding: 5px 20px;
  
}
.down-app {
  img {
    width: 116px;
    height: 116px;
    border-radius: 3px;
  }
}
// 导航
.el-menu--horizontal>.el-menu-item {
  height: 50px !important;
  line-height: 50px !important;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu-item {
  padding: 0;
  margin-left: 24px !important;
}
::v-deep .el-menu--horizontal>.el-menu-item:hover {
  color: #f0a70a !important;
  background-color: transparent !important;
}
</style>