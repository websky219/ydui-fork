<template>
<div>
    <div class="yd-input-item">
        <div class="yd-cell-item">
            <div class="yd-cell-left">
                <span class="yd-cell-icon"><slot name="icon"></slot></span>
                <slot name="left"></slot>
            </div>
            <div class="yd-cell-right" :class="classes">
                <slot name="right"></slot>
            </div>
        </div>
    </div>
    <div class="yd-cell-input-msg" style="color:red">
            <slot name="msg"></slot>
    </div>
</div>
</template>

<script type="text/babel">
    export default {
        name: 'yd-cell-input-item',
        props: {
            type: {
                validator (value) {
                    return ['link', 'a', 'label', 'div', 'checkbox', 'radio','hasMsg'].indexOf(value) > -1;
                },
                default: 'div'
            },
            arrow: {
                type: Boolean,
                default: false
            },
            href: {
                type: [String, Object]
            }
        },
        computed: {
            checkLeft() {
                return !!this.$slots.left || !!this.$slots.icon;
            },
            classes() {
                return this.arrow ? 'yd-cell-arrow' : '';
            }
        }
    }
</script>

<style lang="less">
    @import '../../../styles/components/cell.less';
</style>
