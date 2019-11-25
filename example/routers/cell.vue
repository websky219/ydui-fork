<template>
    <yd-layout title="Cell">

        <yd-cell-group>
            <yd-cell-panel :panelList="list">
            </yd-cell-panel>
        </yd-cell-group>
        <yd-cell-group title="理赔指引">
            <yd-cell-faq>
                <p slot="que">sdfsdffsd</p>
                <yd-icon slot="queIcon-r" name="question" size="0.28rem" color="rgb(0, 158, 253)"></yd-icon>
            </yd-cell-faq>
        </yd-cell-group>
        <yd-cell-group>
            <yd-cell-panel :panelList="list">
            </yd-cell-panel>
        </yd-cell-group>

        <yd-cell-group>
            <yd-cell-item arrow>
                <span slot="left">这里是一个普通DIV</span>
                <yd-datetime type="day" value="2018-01-02" slot="right"></yd-datetime>
                <span slot="suffix">0是</span>
            </yd-cell-item>
            <div class="err-msg" style="dispaly:flex"></div>
            <yd-cell-item arrow>
                <span slot="left">这里是一个普通DIV</span>
                <yd-datetime type="day" value="2018-01-02" slot="right"></yd-datetime>
                <span slot="suffix">0是</span>
            </yd-cell-item>

            <yd-cell-item arrow type="checkbox">
                <span slot="left">这里是一个普通DIV</span>
                <span slot="right">sdfs</span>
                <span slot="suffix">0是</span>
            </yd-cell-item>
        </yd-cell-group>
        
    </yd-layout>
</template>

<script type="text/babel">
export default {
  data() {
    return { checkedNames: ["Han MeiMei"], picked: "Lucy", ydswitch: true ,
    list:[['斯蒂斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬芬','dfsf'],['斯蒂芬','dfsf'],['斯蒂芬','dfsf'],['斯蒂芬','dfsf'],['斯蒂芬','dfsf'],['斯蒂芬','dfsf']]};
  }
};
</script>
