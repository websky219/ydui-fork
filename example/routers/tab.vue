<template>
    <yd-layout>
        <yd-navbar slot="navbar" title="Tab">
            <router-link to="/tabs" slot="left">
                <yd-navbar-back-icon></yd-navbar-back-icon>
            </router-link>
        </yd-navbar>

        <yd-tab class="demo-small-pitch" :horizontal-scroll="false" theme="theme1" :fold="false">
            <yd-tab-panel v-for="obj of tab1" :label="obj.label">{{obj.panel}}</yd-tab-panel>
        </yd-tab>

        <yd-tab class="demo-small-pitch" :horizontal-scroll="false" :fold="true">
            <yd-tab-panel label="选项二" active>222222设置初始激活项</yd-tab-panel>
        </yd-tab>

        <yd-tab class="demo-small-pitch" theme="theme1" :fold="false">
            <yd-tab-panel label="选项一">111111</yd-tab-panel>
            <yd-tab-panel label="选项二" active>222222设置初始激活项</yd-tab-panel>
            <yd-tab-panel label="选项三">333333</yd-tab-panel>
            <yd-tab-panel label="选项四">444444</yd-tab-panel>
            <yd-tab-panel label="选项四">444444</yd-tab-panel>
            <yd-tab-panel label="选项四">444444</yd-tab-panel>
            <yd-tab-panel label="选项四">444444</yd-tab-panel>
            <yd-tab-panel label="选项四">444444</yd-tab-panel>
            <yd-tab-panel label="选项四">444444</yd-tab-panel>            <yd-tab-panel label="选项四">444444</yd-tab-panel>
            <yd-tab-panel label="选项四">444444</yd-tab-panel>
        </yd-tab>
<h1>sdfdsfdfsfd</h1>
        <yd-tab class="demo-small-pitch" :fold="true">
            <yd-tab-panel label="选项四啊是大阿达">111111</yd-tab-panel>
            <yd-tab-panel label="选项二" active>222222设置初始激活项</yd-tab-panel>
        </yd-tab>

        <yd-tab class="demo-small-pitch" :fold="true">
            <yd-tab-panel label="选项四啊是大">111111</yd-tab-panel>
            <yd-tab-panel label="选项二" active>222222设置初始激活项</yd-tab-panel>
        </yd-tab>
    </yd-layout>
</template>
<script>
    export default {
        data(){
            return {
                tab1:[],
                tab2:[],
                tab3:[]
            }
        },
        created(){
            setTimeout(()=>{
                this.tab1=[{label:"选项色发射点十分士大",panel:"沙发沙发"},
                    {label:"选项色发射点十分士大",panel:"沙发沙发"},
                    {label:"选项色发射点十分士大",panel:"沙发沙发"},
                    {label:"选项色发射点十分士大",panel:"沙发沙发"},
                    {label:"选项色发射点十分士大",panel:"沙发沙发"},
                    {label:"选项色发射点十分士大",panel:"沙发沙发"},
                    {label:"选项色发射点十分士大",panel:"沙发沙发"},
                    {label:"选项色发射点十分士大",panel:"沙发沙发"},
                    {label:"选项色发射点十分士大",panel:"沙发沙发"},
                    {label:"选项色发射点十分士大",panel:"沙发沙发"},
                    {label:"选项色发射点十分士大",panel:"沙发沙发"},
                    {label:"选项色发射点十分士大",panel:"沙发沙发"},
                    {label:"选项色发射点十分士大",panel:"沙发沙发"}]
            },2000)
        }
    }
</script>
