const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./base.conf");
const pkg = require("../package.json");
const dayjs = require("dayjs");
var LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

var buildTime = dayjs().format("YYYY-MM-DD HH:mm:ss");
module.exports = merge(baseWebpackConfig, {
    output: {
        path: path.join(__dirname, "../dist"),
        publicPath: "/dist/",
        filename: "[name].js",
        chunkFilename: "[name].js",
        library: "ydui",
        libraryTarget: "umd"
    },
    externals: {
        vue: {
            commonjs: "vue",
            commonjs2: "vue",
            amd: "vue",
            root: "Vue"
        }
    },
    plugins: [
        new webpack.BannerPlugin(
            `${pkg.name}
            v:${pkg.version}
            build:${buildTime}
            by YDCSS (c)  Licensed ${pkg.license}
            由于原作者已经基本不维护此组件库，所以我在此基础上又新增几个组件
            msb-special 组件为新建递归组件(组件支持排序，字段为order)
            inputType:枚举值;
            input:输入框
            list:下拉列表,options [{value,text}]
            select,yz-select:下拉列表,options [{factorValue,factorName}]
            search-select:带搜索的下拉列表
            datetime:日期控件
            addressInput:地址选择控件
            `
        ),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new LodashModuleReplacementPlugin()
    ]
});