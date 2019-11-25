<template>
    <yd-layout title="Popup">

        <div>{{selectValue}}</div>
        <yd-button-group>
            <yd-button size="large" type="primary" @click.native="popupData1.open = true">中间弹出</yd-button>
        </yd-button-group>
        <yd-popup-city  :city-data="cityData" v-model="popupData1" :popup-data="popupData1" height="80%"></yd-popup-city>

    </yd-layout>
</template>

<script type="text/babel">

    export default {
        data() {
            return {
                selectValue:"",
                height: document.body.getBoundingClientRect().height - 300 + 'px',
                checklist1: [],
                show1: false,
                show2: false,
                show3: false,
                show4: false,
                popupData1: {
                    open: false,
                    value: '',
                    def:"sdfdsf"
                },
                cityData: [{
                    region: '欧洲',
                    cityList: ['美国', '英国', '美国2', '英国3', '美国4', '英国5', '美国6', '英国7'],
                    select: []
                },
                    {
                        region: '非洲',
                        cityList: ['美国', '英国', '美国2', '英国3', '美国4', '英国5', '美国6', '英国7'],
                        select: []
                    },
                    {
                        region: '亚洲',
                        cityList: ['美国', '英国', '美国2', '英国3', '美国4', '英国5', '美国6', '英国7'],
                        select: []
                    },
                    {
                        region: '试试',
                        cityList: ['美国', '英国', '美国2', '英国3', '美国4', '英国5', '美国6', '英国7'],
                        select: []
                    }]
            }
        },
        watch:{
            'popupData1.value'(val){
                console.log(this.popupData1)
            }
        }
    }
</script>

