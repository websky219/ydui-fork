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
import { CellGroup, CellItem } from "../../cell/index.js";
import { Input } from "../../input/index.js";
import { DateTime } from "../../datetime/index.js";
import specialItem from "./specialItem.vue";

const sortBy = (arr, prop, desc) => {
  if (!(arr instanceof Array)) {
    console.error("sortBy Error:", "arr is not an array");
  }
  let newArr = [];
  let props = [];
  let sortNumber = false;

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    let propData = (item && item[prop]) || "";
    (props[i] = new String(propData))._obj = item;
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i][prop] === "number") {
      sortNumber = true;
      break;
    } else {
      if (typeof arr[i][prop] === "string") {
        sortNumber = false;
        break;
      }
    }
  }
  if (sortNumber) {
    props.sort((a, b) => a - b);
  } else {
    props.sort();
  }

  for (let i = 0; i < arr.length; i++) {
    newArr[i] = props[i]._obj;
  }
  if (desc === "desc") newArr.reverse();
  return newArr;
};

export default {
  name: "msb-special",
  components: {
    specialItem,
    CellGroup,
    CellItem,
    Input,
    DateTime
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
  },
  mounted() {}
};
</script>

<style scoped></style>
