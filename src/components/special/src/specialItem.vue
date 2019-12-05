<template>
  <div v-show="spe.show">
    <yd-cell-item v-if="spe.inputType == 'input' || !spe.inputType">
      <span slot="left">
        <span v-if="spe.required" style="color:red">*</span>
        {{ spe.label }}</span
      >
      <yd-input
        :show-clear-icon="spe.readonly == false || spe.readonly == undefined"
        :readonly="spe.readonly"
        :onBlur="spe.onBlur"
        :ref="spe.key"
        slot="right"
        :id="spe.key"
        v-if="spe.inputType == 'input' || !spe.inputType"
        inputType="input"
        v-model="spe.value"
        :max="spe.length ? spe.length : '64'"
        :name="spe.key + index"
        :placeholder="
          spe.placeholder ? spe.placeholder : '请输入' + module + spe.label
        "
        :data-rule="spe.rule"
        :showSuccessIcon="false"
      ></yd-input>
      <span
        slot="suffix"
        v-if="spe.suffix"
        style="width:15%"
        v-text="spe.suffix"
      ></span>
    </yd-cell-item>
    <yd-cell-item v-else-if="spe.inputType == 'list'" :arrow="true">
      <span slot="left">
        <span v-if="spe.required" style="color:red">*</span>
        {{ spe.label }}</span
      >
      <select
        :ref="spe.key"
        :id="spe.key"
        :name="spe.key + index"
        v-model="spe.value"
        slot="right"
      >
        <option
          :value="item0.value"
          v-text="item0.text"
          v-for="(item0, index0) of spe.list"
          :key="index0"
        ></option>
      </select>
      <span
        slot="suffix"
        v-if="spe.suffix"
        style="width:15%"
        v-text="spe.suffix"
      ></span>
    </yd-cell-item>
    <yd-cell-item v-else-if="spe.inputType == 'select'" :arrow="true">
      <span slot="left">
        <span v-if="spe.required" style="color:red">*</span>
        {{ spe.label }}</span
      >
      <select
        :ref="spe.key"
        :id="spe.key"
        :name="spe.key + index"
        v-model="spe.value"
        slot="right"
      >
        <option
          :value="item0.factorValue"
          v-text="item0.factorName"
          v-for="(item0, index0) of spe.selectList"
          :key="index0"
        ></option>
      </select>
      <span
        slot="suffix"
        v-if="spe.suffix"
        style="width:15%"
        v-text="spe.suffix"
      ></span>
    </yd-cell-item>
    <yd-cell-item v-else-if="spe.inputType == 'yz-select'" :arrow="true">
      <span slot="left">
        <span v-if="spe.required" style="color:red">*</span>
        {{ spe.label }}</span
      >
      <select
        :ref="spe.key"
        :id="spe.key"
        :name="spe.key + index"
        v-model="spe.value"
        slot="right"
      >
        <option
          :value="item0.factorValue"
          v-text="item0.factorName"
          v-for="(item0, index0) of spe.selectList"
          :key="index0"
        ></option>
      </select>
      <span
        slot="suffix"
        v-if="spe.suffix"
        style="width:15%"
        v-text="spe.suffix"
      ></span>
    </yd-cell-item>
    <yd-flexbox
      style="padding-left: 0.24rem;padding-right: 0.24rem"
      v-else-if="spe.inputType == 'search-select'"
      :arrow="true"
    >
      <yd-flexbox-item class="select-left" v-text="spe.label"></yd-flexbox-item>
      <yd-flexbox-item class="select-right">
        <vue-multiselect
          :id="spe.key"
          :name="spe.key + index"
          :preserve-search="true"
          :show-labels="false"
          :track-by="selectTrack(spe).track"
          :label="selectTrack(spe).label"
          :clear-on-select="true"
          v-model="spe.value"
          :options="spe.options"
          :placeholder="'请选择' + spe.label"
        ></vue-multiselect>
        <input
          :ref="spe.key"
          type="hidden"
          :id="spe.key"
          :name="spe.key + index"
          v-model="spe.value"
          :data-rule="spe.rule"
        />
      </yd-flexbox-item>
      <span
        slot="suffix"
        v-if="spe.suffix"
        style="width:15%"
        v-text="spe.suffix"
      ></span>
    </yd-flexbox>
    <yd-cell-item v-else-if="spe.inputType == 'datetime'" :arrow="true">
      <span slot="left">
        <span v-if="spe.required" style="color:red">*</span>
        {{ spe.label }}</span
      >
      <yd-datetime
        :id="spe.key"
        slot="right"
        :startDate="spe.start ? spe.start : spe.startDate"
        :endDate="spe.end ? spe.end : spe.endDate"
        v-model="spe.value"
        :type="spe.type"
      ></yd-datetime>
      <span
        slot="suffix"
        v-if="spe.suffix"
        style="width:15%"
        v-text="spe.suffix"
      ></span>
    </yd-cell-item>
    <yd-city-input
      :id="spe.key"
      v-else-if="spe.inputType == 'addressInput'"
      :name="spe.key + index"
      :label="spe.label"
      :data-rule="spe.rule"
      :placeholder="'请输入' + spe.label"
      :district="spe.district"
      v-model="spe.value"
      :max="spe.length ? spe.length : '64'"
      :city-label="spe.cityLabel || '所在地区'"
    ></yd-city-input>
    <div class="err-msg"></div>
  </div>
</template>

<script>
import CityInput from "../../cityinput/index.js";
import Multiselect from "vue-multiselect";
import { FlexBox, FlexBoxItem } from "../../flexbox/index";

export default {
  name: "msb-special-item",
  components: {
    CityInput,
    Multiselect,
    FlexBox,
    FlexBoxItem
  },
  data() {
    return {
      spe: this.special
    };
  },
  methods: {
    selectTrack(spe) {
      if (spe.track) {
        return spe.track;
      } else {
        return {
          track: "value",
          label: "text"
        };
      }
    }
  },
  props: {
    index: [Number, String],
    special: {},
    objkey: {
      default: ""
    },
    module: {
      type: String,
      default: ""
    }
  }
};
</script>
<style scoped>
.select-left {
  flex: none;
  min-width: 2rem;
  max-width: 2rem;
  font-size: 0.3rem;
}
.select-right {
}
</style>
