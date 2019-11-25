<template>
  <yd-layout title="CitySelect">
    <yd-cell-group title="默认调用" class="demo-small-pitch">
      <yd-cell-item arrow>
        <span slot="left">所在地区：</span>
        <input
          slot="right"
          type="text"
          @click.stop="show1 = true"
          v-model="model1"
          readonly
          placeholder="请选择收货地址"
        >
      </yd-cell-item>
    </yd-cell-group>

    <yd-cell-group title="设置默认值">
      <yd-cell-item arrow>
        <span slot="left">所在地区：</span>
        <input
          slot="right"
          type="text"
          @click.stop="show2 = true"
          v-model="model2"
          readonly
          placeholder="请选择收货地址"
        >
      </yd-cell-item>
    </yd-cell-group>

    <yd-cityselect columns="3" v-model="show1" :callback="result1" :items="item1"></yd-cityselect>

    <yd-cityselect
    :data-rule="'address'"
      v-model="show2"
      :callback="result2"
      :items="item2"
      provance="新疆"
      city="乌鲁木齐市"
      area="天山区"
    ></yd-cityselect>

    <yd-cell-group>
      <yd-city-input name="input" :city-data="city" :callback="back"  :data-rule="'require'" :district="DistrictNew" v-model="address"></yd-city-input>
    </yd-cell-group>
      <yd-cell-group>
            <yd-cell-panel :panelList="list">
            </yd-cell-panel>
        </yd-cell-group>
        <yd-cell-group title="理赔指引">
            <yd-cell-faq>
                <p slot="que">sdfsdffsd</p>
                <yd-icon slot="queIcon-r" name="question" size="0.28rem" color="rgb(0, 158, 253)"></yd-icon>
            </yd-cell-faq>
        </yd-cell-group>
        <yd-cell-group>
            <yd-cell-panel :panelList="list">
            </yd-cell-panel>
        </yd-cell-group>

        <yd-cell-group>
            <yd-cell-item arrow>
                <span slot="left">这里是一个普通DIV</span>
                <yd-datetime type="day" value="2018-01-02" slot="right"></yd-datetime>
                <span slot="suffix">0是</span>
            </yd-cell-item>
            <div class="err-msg" style="dispaly:flex"></div>
            <yd-cell-item arrow>
                <span slot="left">这里是一个普通DIV</span>
                <yd-datetime type="day" value="2018-01-02" slot="right"></yd-datetime>
                <span slot="suffix">0是</span>
            </yd-cell-item>

            <yd-cell-item arrow type="checkbox">
                <span slot="left">这里是一个普通DIV</span>
                <span slot="right">sdfs</span>
                <span slot="suffix">0是</span>
            </yd-cell-item>
        </yd-cell-group>
  </yd-layout>
</template>

<script type="text/babel">
import District from "ydui-district/dist/jd_province_city_area_id";
import DistrictNew from "./jd_province_city_area_id.js";
import DistrictNewGOV from "./gov_province_city_area_id.js";

export default {
  data() {
    return {
      city:'',
        checkedNames: ["Han MeiMei"], picked: "Lucy", ydswitch: true ,
    list:[['斯蒂斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬芬','dfsf'],['斯蒂芬','dfsf'],['斯蒂芬','dfsf'],['斯蒂芬','dfsf'],['斯蒂芬','dfsf'],['斯蒂芬','dfsf']],
      DistrictNew: DistrictNew,
      item2:DistrictNewGOV,
      item1: [
        {
          v: "1",
          n: "北京",
          c: [
            {
              v: "2816",
              n: "密云区",
              c: []
            },
            {
              v: "72",
              n: "朝阳区",
              c: [
                { v: "2819", n: "三环到四环之间" },
                { v: "2839", n: "四环到五环之间" },
                { v: "2840", n: "五环到六环之间" }
              ]
            }
          ]
        }
      ],
      show1: false,
      show2: false,
      model1: "",
      model2: "新疆 乌鲁木齐市 天山区",
      district: District,
      address: ""
    };
  },
  watch: {
    address(val) {
      console.log(val);
    }
  },
  methods: {
    back(city){
      console.log('tag', city)
    },
    result1(ret) {
      console.log(ret);
      this.model1 = ret.itemName1 + " " + ret.itemName2 + " " + ret.itemName3;
    },
    result2(ret) {
      console.log(ret);
      this.model2 = ret.itemName1 + " " + ret.itemName2 + " " + ret.itemName3;
    }
  }
};
</script>
