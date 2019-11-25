<template>
    <div>
            <div style="background: #6B6B6B;width: 100%;height: 60px"></div>
            <yd-sticky-nav :offset="10">
                <yd-sticky-panel v-for="obj of tab1" :label="obj.label">
                    <div :style="'width:100%;height: 400px;background:'+obj.panel.color">{{obj.panel.text}}</div>
                </yd-sticky-panel>
            </yd-sticky-nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tab1: [],
                scrollY: 0,
                checkTop: true,
            }
        },
        created() {
            setTimeout(() => {
                this.tab1 = [{label: "选项色1", panel: {color: "#82F7FF", text: "11111111111"}},
                    {label: "选项色2", panel: {color: "#B2FF59", text: "2222222222"}},
                    {label: "选项色3", panel: {color: "#FDD835", text: "3333333333333"}}]
            }, 2000)
        }
    }

</script>

<style>


</style>
