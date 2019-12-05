<template>
  <yd-cell-group>
    <msb-special-item
      ref="item"
      v-for="(obj, index) of dataArr"
      :special="obj"
      :key="index + obj.key"
      :objkey="obj.key"
      :index="index"
    ></msb-special-item>
  </yd-cell-group>
</template>

<script type="text/babel">
import { CellGroup } from "../../cell/index.js";
import specialItem from "./specialItem.vue";
import { sortBy } from "../../../utils/assist";
export default {
  name: "msb-special",
  components: {
    specialItem,
    CellGroup
  },
  data() {
    return {
      dataArr: [],
      keyList: {},
      spe: this.special
    };
  },
  props: {
    special: {},
    objkey: {
      default: ""
    },
    randomKey: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: "extend"
    }
  },
  created() {
    console.log("createdspecial" + this.objkey);
    this.updateData();
  },
  watch: {
    special(val) {
      console.log("wacspecial" + this.objkey, val);
      this.spe = val;
      this.updateData();
    }
  },
  beforeUpdate() {
    console.log("beforeUpdate", this.dataArr);
    console.log("beforeUpdate", this.special);
  },
  updated() {
    console.log("updated", this.dataArr);
    console.log("updated", this.special);
  },
  methods: {
    updateData() {
      this.dataArr = [];
      this.spe = this.special;
      this.coverData(this.spe);
      this.dataArr = sortBy(this.dataArr, "order", "asc");
    },
    hasVuale(obj) {
      return obj.hasOwnProperty("value");
    },
    coverData(data, key) {
      if (this.hasVuale(data)) {
        if (data.order === undefined) {
          data.order = 0;
        }
        if (this.keyList[key] >= 0) {
          this.keyList[key] += 1;
          key = key + this.keyList[key];
        } else {
          this.keyList[key] = 0;
          key = key + 0;
        }
        data["key"] = this.name + "_" + key;
        this.dataArr.push(data);
      } else {
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const element = data[key];
            this.coverData(element, key);
          }
        }
      }
    }
  }
};
</script>

<style scoped></style>
