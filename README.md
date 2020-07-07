# vue-admin-template

## 项目介绍
```
本项目是采用vue-cli4搭建的一个模版。
项目使用了ant-design-vue UI组件库，axios进行http请求管理封装等。
```

### 项目npm管理工具
```
yarn
```
### 项目目录
```bash

├── dist                        // 打包生成的目录
├── node_modules                // 项目依赖文件
├── public                      // 公共文件
│   ├── favicon.ico             // 项目ico图标
│   ├── index.html
├── src                         // 源码目录
│   ├── api                     // 配置api接口
│   ├── assets                  // 资源文件, 存放图片之类的
│   ├── components              // 组件文件夹, 用于存放全局公共组件
│   ├── utils
│       └── auth                // 登录认证文件
│       └── request             // 定义api配置
│       └── utils               // 全局公共方法 (可自义公共方法在utils.js文件中)
│   ├── views                   // 模块文件
│   ├── App.vue                 // 应用组件, 所有组件都在此基础上运行
│   ├── main.js                 // 入口文件
│   ├── router                  // 配置项目路由
│   └── store                   // vuex全局状态管理
├── test                        // 自动化测试
│   └── unit                    // unit testing (单元测试)
├── .env.dev                    // 开发环境的配置文件
├── .env.sit                    // 测试环境的配置文件
├── .env.prod                   // 生产环境的配置文件
├── .gitignore                  // 配置不提交到git仓库的文件
├── babel.config.js             // 参见(https://cli.vuejs.org/zh/config/#babel)
├── README.md                   // 项目说明
├── .eslintrc.js                // eslint配置
├── package.json                // npm配置
└── vue.config.js               // 项目配置文件 (一般需要手动创建该文件)
```

### 项目依赖
```
yarn install
```

### 项目启动
```
yarn serve
```

### 项目生产环境打包
```
yarn build:prod
```

### 项目单测
```
yarn test:unit
```

### 项目eslint自动修复
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
