<template>
  <div id="app">
    <Header/>
    <div class="content-wrap">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import '~@/assets/css/main.scss';

// 固定底栏
#app {
	display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.content-wrap {
  flex: 1;
}

/* 自定义滚动条样式 */
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #39557a;
  border-radius: 25px;
}

// element 全局样式
// input 背景色
.el-input__inner {
  background-color: #192330 !important;
  color: #fff !important;
  border-color: #27313e !important;
  &::-webkit-input-placeholder {
    color: #686c6f !important;
  }
}
// 下拉选择样式
.el-select-dropdown {
  background-color: #212b36 !important;
  border: solid 1px #212b36 !important;
}
.el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
  background-color: #192330 !important;
}
.el-select-dropdown__item {
  color: #ccc !important;
  font-size: 12px !important;
}
.popper__arrow {
  border-bottom-color: #212b36 !important;
}
.popper__arrow::after {
  border-bottom-color: #212b36 !important;
}
.el-popover {
  background-color: #212b36 !important;
  border-color: #212b36 !important;
  color: #fff !important;
}
</style>
