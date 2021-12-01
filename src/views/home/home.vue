<template>
  <div class="home">
    <div class="section">
      <!-- banner -->
      <div class="banner">
        <img style="height: 100%;" src="@/assets/images/bannerbg.png"/>
        <p style="text-align:center;font-size:40px;color:#fff;position:absolute;top: 70px;width:100%;letter-spacing:5px;text-shadow: 0px 0px 10px #000000;">{{$t("common.slogan")}}</p>
        <p style="text-align:center;font-size:20px;color:#828ea1;position:absolute;top: 130px;width:100%;letter-spacing:2px;">{{$t("common.subslogan")}}</p>
      </div>
      <!-- 行情图表 -->
      <div style="padding: 0px 14%;padding-top:50px;background: #141e2c;">
        <div ref="trendPanel" style="width:100%;border-top:1px solid #1e2834;border-left:1px solid #1e2834;border-right:1px solid #1e2834;text-align: center;padding: 50px 0 0 0;position: relative;">
          <div style="position: absolute;top: 20px;left:20px;font-size: 20px;font-weight: bold;color:#828ea1;">BTC/USDT Trend</div>
          <SvgIndex ref="svgIndexRef" style="margin-bottom: -5px;" :width="800" :height="150" :values="lineValues"></SvgIndex>
          <!-- <div style="position:absolute;top:50px;left:20px;color:#828ea1;"><span class="lastest-price" style="font-size:40px;font-weight: normal;">{{trendData.close | fixed2}}</span><span style="font-weight: bold;">/USDT</span></div>

          <div style="position: absolute;bottom: 10px;left:20px;color:#828ea1;">
            <span>Highest price: {{trendData.highest}}</span>
            <span style="margin-left:15px;">Lowest price: {{trendData.lowest}}</span>
            <span style="margin-left:15px;">Change(24H): {{trendData.rose}}</span>
            <span style="margin-left:15px;">Volume(24H): {{trendData.volume}}</span>
          </div> -->
        </div>
      </div>
      <!-- 行情 -->
      <div class="market">
        <div class="tab-head u-flex u-row-between">
          <ul class="btn-wrap u-flex">
            <li class="btn" :class="{'active': activeIndex == 0}" @click="handleTab(0)">USDT</li>
            <li class="btn" :class="{'active': activeIndex == 1}" @click="handleTab(1)">BCH</li>
            <li class="btn" :class="{'active': activeIndex == 2}" @click="handleTab(2)">ETH</li>
          </ul>
          <el-input
            placeholder="输入币种名称搜索"
            style="width: 250px;"
            v-model="searchKey"
            @input="seachInputChange">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
        <div class="table-wrap">
          <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort = "{prop: 'date', order: 'descending'}"
            >
            <el-table-column
              align="center"
              prop="date"
              label="收藏"
              width="80">
              <template slot-scope="scope">
                <i class="el-icon-star-off" style="font-size: 18px; cursor: pointer;"></i>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="name"
              label="币种"
              width="180">
              <template slot-scope="scope">
                BTC/USDT
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="address"
              label="最新价"
              sortable>
              <template slot-scope="scope">
                <span>56779.8</span>
                <span class="u-m-l-10" style="color: #828ea1">≈ ￥397095.3</span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="address"
              label="24h涨跌"
              sortable>
              <template slot-scope="scope">
                <div style="color: #00b275">+0.52%</div>
                <!-- <div style="color: #f15057"></div> -->
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="address"
              label="24h最高价">
              <template slot-scope="scope">
                58908.113412
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="address"
              label="24h最低价">
              <template slot-scope="scope">
                58908.113412
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="address"
              label="交易数量"
              sortable>
              <template slot-scope="scope">
                20438.0763
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="address"
              label="价格趋势">
              <template slot-scope="scope">
                <SvgLine :width="100" :height="25" :values="lineValues2" :rose="'123'"></SvgLine>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop=""
              label="操作">
              <template slot-scope="scope">
                <el-link type="primary" :underline="false">立即交易</el-link>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTrend } from '@/api/home.js'
import SvgLine from "@/components/exchange/SvgLine.vue"
import SvgIndex from "@/components/exchange/SvgIndex.vue"

export default {
  name: 'Home',
  components: {
    SvgLine,
    SvgIndex
  },
  data() {
    return {
      searchKey: '',
      activeIndex: 0,
      lineValues :[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      lineValues2 :[
            57271.6, 
            56858.53, 
            57188.08, 
            56892.5, 
            56925.1, 
            57334.79, 
            57032.39, 
            57121.45, 
            57448.5, 
            58641.2, 
            58632.37, 
            57840.12, 
            58066.4, 
            58253.4575, 
            58062, 
            57762.6, 
            57679.4, 
            57261.8625, 
            57339.9, 
            57106.325, 
            57195, 
            56359.49, 
            56565.48, 
            56540.44375, 
            56935.49
        ],
      activeName: 'USDT',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  created() {
    // findUserPage()
    this.getTrend()
  },
  methods: {
    /* 搜索币种 */
    seachInputChange(val) {
      console.log(val)
      this.searchKey = this.searchKey.toUpperCase();
      // if(this.activeIndex == 0){
      //     this.dataIndex = this.coins.favor.filter(item => item["symbol"].indexOf(this.searchKey) == 0);
      // }else if(this.activeIndex == 1){
      //     this.dataIndex = this.coins.USDT.filter(item => item["symbol"].indexOf(this.searchKey) == 0);
      // }else if(this.activeIndex == 2){
      //     this.dataIndex = this.coins.BTC.filter(item => item["symbol"].indexOf(this.searchKey) == 0);
      // }else if(this.activeIndex == 3){
      //     this.dataIndex = this.coins.ETH.filter(item => item["symbol"].indexOf(this.searchKey) == 0);
      // }
    },
    /* 获取趋势数据 */
    getTrend() {
      getTrend().then(res => {
        // console.log(res)
        this.lineValues = res
        this.$refs["svgIndexRef"].reload(this.lineValues, this.$refs.trendPanel.offsetWidth, this.$refs.trendPanel.offsetWidth/8);
      })
    },
    /* 切换行情分类 */
    handleTab(val) {
      console.log(val)
      this.activeIndex = val
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  background: #141e2b;
  .banner {
    position: relative;
    height: 400px;
  }
  .market {
    padding: 50px 14% 50px;
    .tab-head {
      line-height: 62px;
      font-size: 20px;
      background: #1e2834;
      min-width: 864px;
      padding-right: 10px;
      .btn-wrap {
        .btn {
          background: #1e2834;
          position: relative;
          padding: 0 40px;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
          &.active {
            color: #f0a70a;
            background: #27313e;
            border-bottom: 2px solid #f0a70a;
          }
        }
      }
    }
    .table-wrap {
      box-shadow: 0 0 4px #27313e;
    }
  }
}
// 重置 tab 样式
::v-deep .el-tabs__header {
  background-color: #1e2834;
  padding: 0 30px;
}
::v-deep .el-tabs__item {
  color: #fff;
}
::v-deep .el-tabs__nav {
  padding: 10px 0;
}
::v-deep .el-tabs__nav-wrap::after {
  height: 0 !important;
}
::v-deep .el-tabs__header {
  margin-bottom: 0 !important;
}
// 重置表格样式
::v-deep .el-table {
  background-color: #141e2c;
}
::v-deep .el-table tr {
  background-color: #141e2c;
}
::v-deep .el-table--enable-row-hover .el-table__body tr:hover>td.el-table__cell {
  background-color: #1e2834;
}
::v-deep .el-table th.el-table__cell {
  background-color: #141e2c;
}
::v-deep .el-table td.el-table__cell, ::v-deep .el-table th.el-table__cell.is-leaf {
  color: #fff !important;
  border-bottom: 1px solid #27313e !important;
}
</style>