/**
 * 删除数组指定的元素
 * @param {Object} item
 */
Array.prototype.deleteItem = function(item) {
  let index = this.indexOf(item);
  if (index > -1) {
    this.splice(index, 1);
  }
};

const util = {
  /**
   * 解析url字符串返回对象
   * @param {string} url
   */
  getUrlkey: function(url) {
    let params = {},
      urls = url.split('?'),
      arr = urls[1].split('&');
    for (let i = 0, l = arr.length; i < l; i++) {
      let a = arr[i].split('=');
      params[a[0]] = a[1];
    }
    return params;
  },
  /**
   * 图片转base64
   * @param {string} imgUrl 图片路径
   * @param {funtion} cb 回调函数
   * @param {string} url
   */
  getBase64: function(imgUrl, cb, type = 'base64') {
    window.URL = window.URL || window.webkitURL;
    let xhr = new XMLHttpRequest();
    xhr.open('get', imgUrl, true);
    // 至关重要
    xhr.responseType = 'blob';
    xhr.onload = function() {
      if (this.status == 200) {
        //得到一个blob对象
        let blob = this.response;
        //  至关重要
        let oFileReader = new FileReader();
        oFileReader.onloadend = function(e) {
          let base64 = e.target.result;

          if (type === 'base64') cb(base64);
          //作为背景
        };
        oFileReader.readAsDataURL(blob);
        let src = window.URL.createObjectURL(blob);
        if (type === 'blob') cb(src);
      }
    };
    xhr.send();
  },
  /**
   * @description 函数节流
   * @param { Function } fn 需要节流的函数
   * @param { Number } t 节流时间，多久以后执行一次方法 单位ms
   * */
  throttle(fn, t = 1000) {
    if (typeof fn !== 'function') {
      console.log('in throttle,first argument must be Function');
      return;
    }
    let _fn = fn;
    let time = null;
    let first = true;
    return function() {
      let arg = arguments;
      let _this = this;
      if (first) {
        _fn.apply(_this, arg);
        first = false;
        return;
      }
      if (time) return;
      time = setTimeout(function() {
        setTimeout(time);
        time = null;
        _fn.apply(_this, arg);
      }, t);
    };
  },
  /**
   * @description 函数防抖
   * @param { Function } fn 需要防抖的函数
   * @param { Number } t 防抖时间 单位ms
   */
  debounce(fn, t = 1000) {
    if (typeof fn !== 'function') {
      console.log('in debounce,first argument must be Function');
      return;
    }
    let time;

    return function() {
      const arg = arguments;

      if (time) {
        clearTimeout(time);
        time = null;
        return;
      }
      time = setTimeout(() => {
        fn.apply(this, arg);
        time = null;
      }, t);
    };
  },
  /**
   * 验证电话号码
   * @param {string} val
   */
  isPhone(val) {
    var isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/; //手机号码
    var isMob = /^0?1[3|4|5|7|8][0-9]\d{8}$/; // 座机格式
    if (isMob.test(val) || isPhone.test(val)) {
      return true;
    } else {
      return false;
    }
  },
  /**
   * 数组去重
   * @param {Object} array
   */
  dedupe(array) {
    return Array.from(new Set(array));
  },
  /**
   * 判断对象是否为空对象
   * @param {Object} obj
   */
  isEmptyObj(obj) {
    try {
      if (Object.keys(obj).length > 0) {
        return false;
      }
      return true;
    } catch (e) {
      console.log('请传入一个对象');
    }
  }
};

export default util;
