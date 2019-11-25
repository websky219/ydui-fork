<template>
  <yd-layout title="Input">
    <msb-special :special="spec"></msb-special>

    <multiselect
      :random-key="false"
      v-model="spec.search.value"
      :options="spec.search.options"
      :show-labels="false"
      :clear-on-select="true"
      :preserve-search="true"
      placeholder="Pick some"
    >
    </multiselect>

    <yd-cell-item>
      <span slot="left">用户名：</span>
      <yd-input
        slot="right"
        required
        v-model="input1"
        max="20"
        placeholder="请输入用户名"
      ></yd-input>
    </yd-cell-item>

    <yd-cell-group class="demo-small-pitch">
      <label class="typo__label">Single select</label>
      <multiselect
        v-model="spec.search.value"
        :options="spec.search.options"
        :show-labels="false"
        :clear-on-select="true"
        :preserve-search="true"
        placeholder="Pick some"
      >
      </multiselect>
      <yd-cell-item>
        <span slot="left">用户名：</span>
        <yd-input
          slot="right"
          required
          v-model="input1"
          max="20"
          placeholder="请输入用户名"
        ></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">密码：</span>
        <yd-input
          slot="right"
          type="password"
          v-model="input2"
          placeholder="请输入密码"
        ></yd-input>
      </yd-cell-item>
    </yd-cell-group>

    <yd-cell-group title="验证 - 内置正则">
      <yd-cell-item>
        <span slot="left">邮箱：</span>
        <yd-input
          slot="right"
          v-model="input3"
          data-rule="sdf"
          autocomplete="on"
          regex="email"
          placeholder="请输入邮箱地址"
        ></yd-input>
      </yd-cell-item>

      <yd-cell-item>
        <span slot="left">手机号：</span>
        <yd-input
          slot="right"
          v-model="input4"
          regex="mobile"
          placeholder="请输入手机号码"
        ></yd-input>
      </yd-cell-item>

      <yd-cell-item>
        <span slot="left">银行卡号：</span>
        <yd-input
          slot="right"
          v-model="input5"
          regex="bankcard"
          placeholder="请输入银行卡号"
        ></yd-input>
      </yd-cell-item>
    </yd-cell-group>

    <yd-cell-group title="验证 - 自定义正则">
      <yd-cell-item>
        <span slot="left">QQ：</span>
        <yd-input
          slot="right"
          v-model="input6"
          regex="^\d{5,12}$"
          placeholder="请输入您的QQ号码"
        ></yd-input>
      </yd-cell-item>
    </yd-cell-group>

    <yd-cell-group title="不显示清空图标">
      <yd-cell-item>
        <span slot="left">姓名：</span>
        <yd-input
          slot="right"
          v-model="input7"
          required
          :showClearIcon="false"
          placeholder="请输入您的姓名"
        ></yd-input>
      </yd-cell-item>
    </yd-cell-group>

    <yd-cell-group title="不显示正确或错误图标">
      <yd-cell-item>
        <span slot="left">手机号：</span>
        <yd-input
          slot="right"
          v-model="input8"
          required
          :showSuccessIcon="false"
          :showErrorIcon="false"
          regex="mobile"
          placeholder="请输入手机号码"
        ></yd-input>
      </yd-cell-item>
    </yd-cell-group>

    <yd-cell-group title="不显示正确或错误图标22222">
      <yd-cell-item :type="'hasMsg'">
        <span slot="left">手机号：</span>
        <yd-input
          slot="right"
          v-model="input8"
          required
          :showSuccessIcon="false"
          :showErrorIcon="false"
          regex="mobile"
          placeholder="请输入手机号码"
        ></yd-input>
        <div slot="msg">斯蒂芬森分</div>
      </yd-cell-item>
    </yd-cell-group>

    <yd-cell-group title="不显示正确或错误图标222222222">
      <yd-cell-input-item>
        <span slot="left">手机号：</span>
        <yd-input
          slot="right"
          v-model="input8"
          required
          :showSuccessIcon="false"
          :showErrorIcon="false"
          regex="mobile"
          placeholder="请输入手机号码"
        ></yd-input>
      </yd-cell-input-item>
      <yd-cell-input-item>
        <span slot="left">手机号：</span>
        <yd-input
          slot="right"
          v-model="input8"
          required
          :showSuccessIcon="false"
          :showErrorIcon="false"
          regex="mobile"
          placeholder="请输入手机号码"
        ></yd-input>
        <div slot="msg"></div>
      </yd-cell-input-item>
    </yd-cell-group>
    <div>
      <yd-switch></yd-switch>
      <p></p>
    </div>
    <yd-cell-group title="获取验证结果">
      <yd-cell-item>
        <span slot="left">手机号：</span>
        <yd-input
          slot="right"
          v-model="input9"
          ref="input9"
          required
          regex="mobile"
          placeholder="请输入手机号码"
          suffixText="24时止"
        ></yd-input>
      </yd-cell-item>
      <p slot="bottom" style="color:#F00;padding: 0 .3rem;" v-html="result"></p>
    </yd-cell-group>

    <yd-button-group>
      <yd-button size="large" @click.native="clickHander"
        >显示上方手机号验证结果</yd-button
      >
    </yd-button-group>
  </yd-layout>
</template>

<script>
import DistrictNew from "./jd_province_city_area_id.js";

import Multiselect from "vue-multiselect";
export default {
  components: {
    Multiselect
  },
  data() {
    return {
      value: [],
      options: [
        {
          name: "Vue.js",
          language: "JavaScript"
        },
        {
          name: "Adonis",
          language: "JavaScript"
        },
        {
          name: "Rails",
          language: "Ruby"
        },
        {
          name: "Sinatra",
          language: "Ruby"
        },
        {
          name: "Laravel",
          language: "PHP"
        },
        {
          name: "Phoenix",
          language: "Elixir"
        }
      ],
      input1: "",
      input2: "",
      input3: "ydui@qq.com",
      input4: "",
      input5: "",
      input6: "",
      input7: "",
      input8: "",
      input9: "",
      result: "",
      spec: {
        ppublicspec: {
          specBusinesstype: {
            show: true,
            order: -0.2,
            inputType: "yz-select",
            selectList: {
              obj1: {
                factorName: "4234",
                factorValue: 4234423
              }
            },
            value: "",
            label: "业务类型",
            required: true
          }
        },
        search: {
          inputType: "search-select",
          value: "",
          label: "受益人",
          order: 5,
          show: true,
          rule: "requir",
          options: [
            {
              text: "Vue.js",
              value: "JavaScript"
            },
            {
              text: "Adonis",
              value: "JavaScript"
            },
            {
              text: "Rails",
              value: "Ruby"
            },
            {
              text: "Sinatra",
              value: "Ruby"
            },
            {
              text: "Laravel",
              value: "PHP"
            },
            {
              text: "Phoenix",
              value: "Elixir"
            }
          ]
        },
        address: {
          show: true,
          value: "",
          inputType: "addressInput",
          label: "详细地址",
          order: 1,
          rule: "sdfd:requreo;",
          district: DistrictNew,
          length: "100"
        },
        addressList: [
          {
            adsObjectAddress: {
              show: true,
              onBlur: function(v) {
                console.log("onBlur", v);
              },
              value: "",
              order: 2,
              label: "地址323",
              length: "100"
            },
            adsPostCode: {
              show: false,
              value: "",
              order: 3,
              label: "邮编",
              length: "100"
            },
            adsNo: {
              show: false,
              value: "0",
              order: 4,
              label: "序号"
            },
            adsIfMainObjectAddress: {
              show: true,
              value: "1",
              order: -1,
              label: "是否主地址"
            }
          },
          {
            adsObjectAddress: {
              show: true,
              value: "",
              label: "地址",
              length: "100"
            },
            adsPostCode: {
              show: false,
              value: "",
              label: "邮编",
              length: "100"
            },
            adsNo: {
              show: false,
              value: "0",
              label: "序号"
            },
            adsIfMainObjectAddress: {
              show: true,
              value: "1",
              label: "是否主地址"
            }
          }
        ]
      }
    };
  },
  watch: {
    spec: {
      handler(val) {
        console.log("数据监听", val);
      },
      deep: true
    }
  },
  methods: {
    clickHander() {
      const input = this.$refs.input9;
      this.result = `{<br />&nbsp;&nbsp;valid：${input.valid}，<br />&nbsp;&nbsp;errorMes：'${input.errorMsg}'，<br />&nbsp;&nbsp;errorCode：'${input.errorCode}'<br />}`;
    }
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="less">
.yd-cell {
  z-index: initial;
}
</style>
