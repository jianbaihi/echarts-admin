import axios from 'axios'

// 这里二次封装一下axios，方便统一管理请求地址和超时时间
const request = axios.create({
    baseURL:'http://39.103.151.139:3001/apis',
    timeout: 3000
})

export default request