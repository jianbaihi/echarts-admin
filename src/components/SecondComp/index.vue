<script>
import {getSaleData} from '../../api/index.js'
export default {
    data() {
        return {
            activeIndex: '1',
            radio: '今日',
            value: '',
            pickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            option: {},
            saleData:{},
            list:[],
        }
    },
    methods: {
        handleSelect(index) {
            console.log(index, 'index');
            if (index === '1') {
                this.renderChart(
                    this.saleData.saleFulleYearAxis,
                    this.saleData.saleFulleYear)
                this.list = this.saleData.saleRank
            }else{

                this.renderChart(
                    this.saleData.visitFullYeadAxis,
                    this.saleData.visitFullYear)
                this.list = this.saleData.visitRank
            }
        },
        renderChart(data1,data2) {
            this.option = {
                title: {
                    text: '年度销售额',
                    textStyle: {
                        fontSize: 14,
                        fontWeight: 700,
                    },
                },
                xAxis: {
                    type: 'category',
                    data:data1,
                    axisTick: {
                        alignWithLabel: true,
                    },
                },
                yAxis: {
                    type: 'value',
                    splitLine:{
                        lineStyle:{
                            type:'dotted',
                        }
                    },
                },
                grid:{
                    left:40,
                },
                series: [
                    {
                        data:data2,
                        type: 'bar',
                        barWidth: '40%',
                    }
                ],
                color:"skyblue"
            }
        },
    },
    async mounted() {
       const res = await getSaleData()
       this.saleData = res.data 
    //    console.log(this.saleData,'this.saleData')
       this.renderChart(
        this.saleData.saleFulleYearAxis,
        this.saleData.saleFulleYear)
       this.list = this.saleData.saleRank
    },
   
}
</script>

<template>
    <div class="second-comp">
        <el-card shadow="hover">
            <template slot="header">
                <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">销售额</el-menu-item>
                    <el-menu-item index="2">访问量</el-menu-item>
                </el-menu>
                <div class="right">
                    <el-radio-group v-model="radio">
                        <el-radio-button label="今日"></el-radio-button>
                        <el-radio-button label="本周"></el-radio-button>
                        <el-radio-button label="本月"></el-radio-button>
                        <el-radio-button label="今年"></el-radio-button>
                    </el-radio-group>
                    <el-date-picker v-model="value" type="daterange" unlink-panels range-separator="至"
                        start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions">
                    </el-date-picker>
                </div>
            </template>
            <div class="content">
                <div class="left-chart">
                    <v-chart :option="option"></v-chart>
                </div>
                <div class="right-list">
                    <div class="title">排行榜</div>
                    <div class="list-item" v-for="(item,index) in list" :key="index">
                        <span :class="{'top-3':item.no<=3}">{{ item.no }}</span>
                        <span>{{ item.title }}</span>
                        <span>{{ item.sales }}</span>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<style lang="scss" scoped>
.second-comp {
    margin-top: 20px;

    .el-card {
        :deep(.el-card__header) {
            position: relative;
            padding: 0;
            border-bottom: none;

            .right {
                position: absolute;
                top: 50%;
                right: 2%;
                transform: translateY(-50%);
            }
        }

        .el-menu {
            padding-left: 50px;
        }

        .content {
            display: flex;

            .left-chart {
                flex: 0 0 70%;
                height: 434px;
            }

            .right-list {
                flex: 1;
                flex-direction: column;
                .title{
                    margin-bottom: 10px;
                    font-size: 14px;
                    font-weight: 600;
                }
                .list-item{
                    margin: 20px 0;
                    display: flex;
                    gap: 20px;
                    span:nth-child(1){
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        line-height: 20px;
                        text-align: center;
                    }
                    span:nth-child(2){
                        flex: 1;
                    }
                }
                .top-3{
                    background-color: #09b3f7;
                    color: white;
                }
            }
            
        }
    }
}
</style>