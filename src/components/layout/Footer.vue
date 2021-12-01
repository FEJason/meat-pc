<template>
  <div class="footer-wrap">
    <div class="footer_content">
      <div class="footer_left">
        <img  src="@/assets/images/logo-bottom.png" style="margin:0" ></img>
        <!-- <h3>Caymanex.Pro</h3> -->
        <p style="letter-spacing:2px;">{{$t("footer.gsmc")}}</p>
        <p>Copyright © 2012-2021 WWW.BTXCHAIN.COM All rights reserved.&nbsp;&nbsp;</p>
        <div class="social-list">
          <ul>
            <!-- <Tooltip content="Wechat" theme="dark" placement="top">
              <li>
                <Icon custom="i-icon iconfont iconweixin" />
              </li>
              <div slot="content">
                  <img style="width: 130px;border-radius: 5px;" src="./assets/images/wechatqrcode.jpg"></img>
              </div>
            </Tooltip>
            <Tooltip content="Biyong" theme="dark" placement="top">
              <li>
                <Icon custom="i-icon iconfont iconbiyonglogo" />
              </li>
              <div slot="content">
                  <img style="width: 130px;border-radius: 5px;" src="./assets/images/biyongqrcode.png"></img>
              </div>
            </Tooltip>
            <Tooltip content="Telegram" theme="dark" placement="top">
              <li>
                <Icon custom="i-icon iconfont icontelegram1" />
              </li>
              <div slot="content">
                  <img style="width: 130px;border-radius: 5px;" src="./assets/images/telegramqrcode.jpg"></img>
              </div>
            </Tooltip>
            <Tooltip content="https://weibo.com/BTXCHAIN" theme="dark" placement="top">
              <li>
                <Icon custom="i-icon iconfont iconweibo" />
              </li>
            </Tooltip>
            <Tooltip content="https://twitter.com/BTXCHAINGlobal" theme="dark" placement="top">
              <li>
                <Icon type="logo-twitter" />
              </li>
            </Tooltip>
            <Tooltip content="https://medium.com/@BTXCHAIN" theme="dark" placement="top">
              <li>
                <Icon custom="i-icon iconfont iconmedium" />
              </li>
            </Tooltip>
            <Tooltip content="https://www.reddit.com/u/BTXCHAINglobal" theme="dark" placement="top">
              <li>
                <Icon custom="i-icon iconfont iconreddit" />
              </li>
            </Tooltip>
            <Tooltip content="coming" theme="dark" placement="top" style="display:none;">
              <li>
                <Icon type="logo-facebook" />
              </li>
            </Tooltip> -->

          </ul>
        </div>
      </div>
      <div class="footer_right">
        <ul>
          <li class="footer_title">
            <span>{{$t("footer.gsjj")}}</span>
          </li>
          <li>
            <router-link target="_blank" to="/about-us">{{$t("footer.gywm")}}</router-link>
          </li>
          <li>
            <router-link target="_blank" :to="getUrl(1)">{{$t("footer.jrwm")}}</router-link>
          </li>
          <li>
            <router-link target="_blank" to="/announcement/0">{{$t("footer.notice")}}</router-link>
          </li>
          <!-- <li class="wechatclick">
            <poptip width="80" trigger="hover" placement="right">
              <a href="javascript:;" class="wechat">{{$t("footer.apidoc")}}</a>
              <div slot="content">
                <p style="text-align:center;">{{$t("footer.zwkf")}}</p>
              </div>
            </poptip>
          </li> -->
        </ul>
        <ul>
          <li class="footer_title">
            <span>{{$t("footer.bzzx")}}</span>
          </li>
          <li>
            <router-link target="_blank" :to="getUrl(2)" >{{$t("footer.xszn")}}</router-link>
          </li>
          <li>
            <router-link target="_blank" :to="getUrl(3)" >{{$t("footer.cjwt")}}</router-link>
          </li>
          <li>
            <router-link target="_blank" :to="getUrl(4)" >{{$t("footer.jyzn")}}</router-link>
          </li>
          <li>
            <router-link target="_blank" :to="getUrl(5)" >{{$t("footer.bzzl")}}</router-link>
          </li>
        </ul>
        <ul>
          <li class="footer_title">
            <span>{{$t("footer.tkxy")}}</span>
          </li>
          <li>
            <router-link target="_blank" :to="getUrl(6)" >{{$t("footer.mztk")}}</router-link>
          </li>
          <li>
            <router-link target="_blank" :to="getUrl(7)" >{{$t("footer.ystk")}}</router-link>
          </li>
          <li>
            <router-link target="_blank" :to="getUrl(8)" >{{$t("footer.fwtk")}}</router-link>
          </li>
          <li>
            <router-link target="_blank" :to="getUrl(9)">{{$t("footer.fltk")}}</router-link>
          </li>
        </ul>
        <ul>
          <!-- <li class="footer_title">
            <span>{{$t("footer.lxwm")}}</span>
          </li>
          <li class="wechatclick">
            <poptip width="200" trigger="hover" placement="right">
              <a href="javascript:;" class="wechat">{{$t("footer.kfyx")}}</a>
              <div slot="content">
                <p style="text-align:center;">service@BTXCHAIN.com</p>
              </div>
            </poptip>
          </li>
          <li class="wechatclick">
            <poptip width="200" trigger="hover" placement="right">
              <a href="javascript:;" class="wechat">{{$t("footer.swhz")}}</a>
              <div slot="content">
                <p style="text-align:center;">support@BTXCHAIN.com</p>
              </div>
            </poptip>
          </li>
          <li class="wechatclick">
            <poptip width="200" trigger="hover" placement="right">
              <a href="javascript:;" class="wechat">{{$t("footer.sbsq")}}</a>
              <div slot="content">
                <p style="text-align:center;">list@BTXCHAIN.com</p>
              </div>
            </poptip>
          </li>
          <li class="wechatclick">
            <poptip width="200" trigger="hover" placement="right">
              <a href="javascript:;" class="wechat">{{$t("footer.tsjb")}}</a>
              <div slot="content">
                <p style="text-align:center;">ceo@BTXCHAIN.com</p>
              </div>
            </poptip>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    getUrl(type){
      if(type==1){
        return "/helpdetail?cate=6&id=39&cateTitle="+this.$t("footer.jrwm");
      }else if(type==2){
        return "/helplist?cate=0&cateTitle="+this.$t("footer.xszn");
      }else if(type==3){
        return "/helplist?cate=1&cateTitle="+this.$t("footer.cjwt");
      }else if(type==4){
        return "/helplist?cate=2&cateTitle="+this.$t("footer.jyzn");
      }else if(type==5){
        return "/helplist?cate=3&cateTitle="+this.$t("footer.bzzl");
      }else if(type==6){
        return "/helpdetail?cate=5&id=19&cateTitle="+this.$t("footer.mztk");
      }else if(type==7){
        return "/helpdetail?cate=5&id=28&cateTitle="+this.$t("footer.ystk");
      }else if(type==8){
        return "/helpdetail?cate=5&id=36&cateTitle="+this.$t("footer.fwtk");
      }else if(type==9){
        return "/helpdetail?cate=5&id=45&cateTitle="+this.$t("footer.fltk");
      }
      
    },
  }
}
</script>

<style lang="scss" scoped>
.footer-wrap {
  width: 100%;
  overflow: hidden;
}
.footer_content {
  height: 300px;
  padding: 80px 10%;
  color: #53575c;
  color: hsla(0, 0%, 100%, .8);
  background: #192330
}

.footer_left {
  float: left;
  font-size: 14px;
}

.footer_left img {
  margin: 15px 0;
  width: 300px;
}

.footer_left p {
  margin: 10px 0;
  color: #828ea1;
}

.footer_right {
  float: right;
  /*margin-top: 15px;*/
  text-align: left;
  /* margin-right: 20px; */
}

.footer_right ul {
  float: left;
  margin: 0 30px;
}
.footer_right ul li{
  list-style-type:none;
}
.footer_right ul li a {
  color: #828ea1;
  line-height: 30px;
  display: block;
  font-size: 12px;
}
.footer_right ul li a:hover{
  color: #FFFFFF;
}
.footer_title {
  font-size: 13px;
  height: 40px;
}

.ivu-select-selected-value {
  color: #bbbec4;
}

</style>