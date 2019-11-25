<template>
    <div>
        <yd-mask v-model="show"></yd-mask>
        <div :class="classes" :style="styles" ref="box">
            <div ref="top">
                <div style="padding:4px">
                    <div class="popup-head ">已选择的城市</div>
                    <div v-if="selectCity.length>0" class="popup-head-content" style="border-bottom: 1px solid #D9D9D9;border-top: 1px solid #D9D9D9;">
                        <div> <span class="popup-city-item" v-for="item,index of selectCity" :key="index" v-text="item"></span> </div>
                    </div>
                </div>
            </div>
            <div class="yd-popup-content">
                <div ref="content">
                    <yd-accordion accordion>
                        <yd-accordion-item v-for="obj,key of cityList" :key="key">
                            <span class="yd-popup-accordion-title" slot="title" v-text="obj.region"></span>
                            <yd-checklist v-model="obj.select">
                                <yd-checklist-item :val="item" v-for="item,index of obj.cityList" :key="index">
                                    <div style="height: 48px;line-height: 50px;font-size: 0.26rem" v-text="item"></div>
                                </yd-checklist-item>
                            </yd-checklist>
                        </yd-accordion-item>
                    </yd-accordion>
                </div>
            </div>
            <div ref="bottom">
                <yd-button bgcolor="#005bac" color="#fff" @click.native="close" style="width:100%" type="primary">确认</yd-button>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">

    import {preventScroll} from '../../../utils/assist';
    import Mask from '../../mask/src/mask.vue';
    import {Accordion, AccordionItem} from '../../accordion/index';
    import {CheckList, CheckListItem} from '../../checklist/index';
    import {Button} from '../../button/index'

    export default {
        name: 'yd-popup-city',
        components: {
            'yd-mask': Mask,
            'yd-accordion': Accordion,
            'yd-accordion-item': AccordionItem,
            'yd-checklist': CheckList,
            'yd-checklist-item': CheckListItem,
            'yd-button': Button
        },
        data() {
            return {
                show: this.popupData.open,
                cityList: this.cityData,
                select: []
            }
        },
        props: {
            popupData: {
                type: Object,
                default: {
                    open: false,
                    value: ''
                }
            },
            position: {
                validator(value) {
                    return ['bottom', 'center', 'left', 'right'].indexOf(value) > -1;
                },
                default: 'bottom'
            },
            cityData: {
                type: Array
            },
            height: {
                type: String,
                default: 'auto'
            },
            width: {
                type: String,
                default: 'auto'
            },
            closeOnMasker: {
                type: Boolean,
                default: true
            },
            maxCity: {
                type: Number,
                default: 13
            }
        },
        watch: {
            'popupData.open'(val) {
                val ? preventScroll.lock() : preventScroll.unlock();
                this.show = val;
            }
        },
        computed: {
            classes() {
                return (this.position === 'center' ? 'yd-popup-center ' : 'yd-popup yd-popup-' + this.position) +
                        (this.show ? ' yd-popup-show ' : '');
            },
            styles() {
                if (this.position === 'left' || this.position === 'right') {
                    return {width: this.width};
                } else if (this.position === 'bottom') {
                    return {width: '100%', height: this.height};
                } else {
                    return {width: this.width, height: this.height};
                }
            },
            selectCity() {
                let this_ = this;
                this_.select = [];
                this.cityList.forEach(e => {
                    this_.select = this_.select.concat(e.select)
                });
                if (this_.select.length > this_.maxCity) {
                    this.$dialog.notify({
                        mes: '最多只能选择' + this_.maxCity + '个城市,多选无效',
                        timeout: 5000
                    });
                    return this_.select.slice(0,this_.maxCity-1)
                }
                return this_.select
            }
        },
        methods: {
            close() {
                if (this.closeOnMasker) {
                    this.show = false;
                    let emitData = this.popupData;
                    let city = '';
                    this.select.forEach(e=>{
                        city += e+';'
                    });
                    if (city.length>0){
                        city = city.substring(0,city.length-1)
                    }
                    emitData.open = false;
                    emitData.value= city;
                    this.$emit('input', emitData);
                    this.$emit('select-city', city);
                }
            }
        },
        destroyed() {
            preventScroll.unlock();
        }
    }
</script>

<style lang="less">
    @import '../../../styles/components/popup.less';
    .yd-notify{
        background-color: #F23030;
        line-height: 0.24rem;
    }
    .popup-head{
        margin: 8px;
        font-size: 0.28rem;
    }
    .popup-city-item{
        margin: 4px;
    }
    .popup-head-content{
        padding: 8px;
    }
    .yd-accordion-title{
     min-height: 0.8rem;
    }
    .yd-checklist-item-icon{
        padding: 8px 13px;
    }
    .yd-popup-accordion-title{
        font-size: 0.32rem;
    }
</style>
