<template>
  <div>
    <yd-cell-item arrow>
      <span slot="left">{{cityLabel}}</span>
      <input
        slot="right"
        type="text"
        :name="name+'_picker'"
        @click.stop="show = true"
        v-model="model"
        readonly
        :placeholder="'请选择'+cityLabel"
      >
    </yd-cell-item>
    <yd-cell-item>
      <span slot="left">{{label}}</span>
      <yd-input
        slot="right"
        type="text"
        v-model="address"
        :name="name+'_input'"
        :data-rule="dataRule"
        :showClearIcon="true"
        :show-success-icon="false"
        :placeholder="placeholder"
        :max="max"
      ></yd-input>
    </yd-cell-item>
    <div class="err-msg"></div>
    <yd-cityselect columns="3" v-model="show" :callback="result" :items="district"></yd-cityselect>
  </div>
</template>

<script>
import { CitySelect } from "../../cityselect/index.js";
import { CellItem, CellItemInput } from "../../cell/index.js";
import { Input } from "../../input/index.js";

export default {
  name: "yd-city-input",
  components: {
    CitySelect,
    Input
  },
  data() {
    return {
      model: "",
      address: "",
      show: false,
      cityStr: "",
      city: null
    };
  },
  watch: {
    address(val) {
      this.emitData();
    }
  },
  methods: {
    result(ret) {
      console.log("res", ret);
      this.model = ret.itemName1 + " " + ret.itemName2 + " " + ret.itemName3;
      this.city = ret;
      this.callback && this.callback(ret);
      this.emitData();
    },
    emitData() {
      this.$emit("input", this.model + " " + this.address);
      this.$emit("cityData", this.city);
    }
  },
  props: {
    callback: {
      type: Function
    },
    dataRule: "",
    cityLabel: "",
    max: "",
    label: "",
    placeholder: "",
    district: {
      type: Array
    },
    name: {
      type: String
    }
  }
};
</script>

<style scoped>
</style>