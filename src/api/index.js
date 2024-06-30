import request from './axios.js'

// 这里封装具体的接口请求方法
// 获取第一栏的数据请求方法
export function getReportData(){
    return request.get('/reportdata')
}

// 获取第二栏的数据请求方法
export function getSaleData(){
    return request.get('/saledata')
}