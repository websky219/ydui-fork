<template>
        <yd-scrollnav3 id="scrollDiv">
            <div slot="banner">
                <img src="grzjzx.jpg" style="width: 100%" alt="">
            </div>
            <yd-scrollnav-panel :label="item.label" v-for="item, key in list" :key="key">
                <p class="demo-scrollnav-title">{{item.label}}</p>

                <yd-list :theme="2">
                    <yd-list-item v-for="i in 3">
                        <img slot="img" src="http://static.shikee.com/common/img/blank.gif" style="background-color:#e6e6e6;">
                        <span slot="title"><span style="color:#909090;">{{item.label}} - {{item.label}}</span></span>
                    </yd-list-item>
                </yd-list>

            </yd-scrollnav-panel>
        </yd-scrollnav3>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    {label: '嵌入式推荐'},
                    {label: '商用电器'},
                    {label: '活动说明'}
                ],
                color2:'blue'
            }
        }
    }
</script>

<style>
    .demo-scrollnav-title {
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        color: #4242ff;
        text-align: center;
        background-color: #e4e4e4;
        padding-left: 4px;
        background-color: #345344
    }
</style>
