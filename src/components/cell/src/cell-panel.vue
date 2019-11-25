<template>
<div>
    <div class="yd-cell-panel" v-if="list.length>0" v-for="item,index of list" v-show="isShow(index)">
        <div class="yd-cell-panel-space yd-cell-left">
        <span v-text="item[0]"></span>
        </div>
        <div class="cell-panel-space yd-cell-right">
            <span v-text="item[1]"></span>
        </div>
    </div>
    <div class="yd-cell-panel" v-if="list.length > 4">
        <div style="font-size:0.25rem;color:#005bac" class="yd-cell-left yd-cell-panel-space" v-if="showMore" @click="showMore=false">
            <span v-text="'收起'"></span>
        </div>
        <div style="font-size:0.25rem;color:#005bac" class="yd-cell-left yd-cell-panel-space" v-else @click="showMore=true">
            <span v-text="'显示更多'"></span>
        </div>
        <div class="cell-panel-space yd-cell-right">
            <span></span>
        </div>
    </div>
</div>

</template>

<script type="text/babel">
    export default {
        name: 'yd-cell-panel',
        data () {
            return {
                list:this.panelList,
                showMore:false
            }
        },
        mounted(){
            this.init;
        },
        methods:{
            isShow(index){
                if(index<4){
                    return true;
                }else if(this.showMore){
                    return true;
                }else{
                    return false;
                }
            },
            init(){
                if(this.list.length > 4){
                    this.showMore=false;
                }
            }
        },
        props: {
            panelList:{
                validator(value){
                    return Object.prototype.toString.call(value)=='[object Array]'
                }
            }
        }
    }
</script>

<style lang="less">
    @import '../../../styles/components/cell.less';
</style>
