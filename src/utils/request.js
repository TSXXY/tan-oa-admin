import axios from "axios"
import { ElMessage } from "element-plus"

// 请求拦截器，每次请求都会携带token
axios.interceptors.request.use(config => {
    // TODO 从pinia中获取token,后面写到登录再追加

    return config;
}, error => {
    console.log(error);
})

// 响应拦截器
axios.interceptors.response.use(success => {
    // 当状态码纯在，且状态码为200时，表示请求成功
    if (success.status && success.status == 200) {
        // 对服务器响应的状态码进行判断
        if (success.data.code == 500 || success.data.code == 401 || success.data.code == 403) {
            ElMessage.error({ message: success.data.message });
            // 错误直接return，不再往下执行
            return;
        }
        // 这里表示请求成功后，服务器也成功响应，如果有返回信息，则打印成功的信息
        if (success.data.message) {
            ElMessage.success({ message: success.data.message });
        }
        // 返回响应的数据
        return success.data;
    }
}, error => {
    // 服务器响应失败，打印错误信息
    if (error.response.code == 504 || error.res.code == 404) {
        ElMessage({ message: '服务器好像坏掉了，待会再试试吧 (～￣▽￣)～', type: 'error', center: true });
    } else if (error.response.code == 403) {
        ElMessage({ message: '权限不足，请联系管理员', type: 'error', center: true });
    } else if (error.response.code == 401) {
        ElMessage({ message: '尚未登录，请登录再试', type: 'error', center: true });
        router.replace('/login').then(() => 'to login');
    } else {
        // 当不是上面的错误时，如果有返回信息，则打印返回的信息
        if (error.response.message) {
            ElMessage({ message: error.response.message, type: 'error', center: true });
        } else {
            ElMessage({ message: '出现未知错误，请联系管理员!', type: 'error', center: true });
        }
    }
})

const baseUrl = '';
// 传送JSON格式的POST请求
export const postRequest = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        })
    })
}
// GET请求
export const getRequest = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

// 传送json格式的put请求
export const putRequest = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.put(`${baseUrl}${url}`, params).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}

// delete请求
export const deleteRequest = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.delete(`${baseUrl}${url}`, {
            params
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
