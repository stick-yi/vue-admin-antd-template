import Axios from 'axios';
import { message, notification } from 'ant-design-vue';
import store from '@/store';
import { getToken } from '@/utils/auth';
import getEnv from '@/utils/env';
import errorCode from '@/utils/errorCode';
import NProgress from 'nprogress';

Axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
// 创建通用axios实例
const service = Axios.create({
  baseURL: getEnv('VUE_APP_API') || process.env.VUE_APP_API,
  // withCredentials: true,
  timeout: 10000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  config => {
    NProgress.start();
    if (getToken()) {
      config.headers['Authorization'] = 'Bearer ' + getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  res => {
    NProgress.done();
    console.log('请求', res);
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode['default'];
    if (code === 401) {
      message.error('权限失效，跳转到登录页面', () => {
        store.dispatch('Logout').then(() => {
          location.reload(); // 为了重新实例化vue-router对象 避免bug
        });
      });
    } else if (code === 500) {
      notification.error(msg);
      return Promise.reject(new Error(msg));
    } else if (code !== 200) {
      notification.error(msg);
      return Promise.reject('error');
    } else {
      return res.data;
    }
  },
  err => {
    NProgress.done();
    switch (err.message) {
      case 'Network Error':
        err.message = '网络请求错误';
        break;
    }
    return Promise.reject(err);
  }
);

export default service;
