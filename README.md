## 描述
> Dva + Umi + Antd 的简单脚手架，会结合一些常用工具类。

## 如何运行项目
> 需具备node环境, 自行安装

```shell
# 安装依赖环境
npm install

# 运行项目, 运行后访问 http://localhost:8000/
npm start

# 编译项目, 编译后会在当前项目根目录生成`dist/`文件夹
npm build

```

## 项目整体结构说明
```sbtshell
.
├── docker                          // docker 相关脚本[开发阶段使用]
│   ├── docker-compose.dev.yml
│   ├── docker-compose.yml
│   └── nginx.conf
├── docs                            // 其他相关文件
├── scripts                         // 脚本文件
├── mock                            // mock 相关文件[与API接口一一对应]
│   ├── api.js
│   └── utils
├── src                             // 源码
│   ├── api                         // API 接口
│   ├── assets                      // 图片资源
│   ├── components                  // 组件
│   ├── models                      // dva model
│   ├── pages                       // 页面
│   ├── utils                       // 工具包(主要包含: 请求封装, 常量定义, 格式化工具)
│   ├── global.css                  // 全局css
│   ├── config.js                   // 全局配置(主要包含: 环境配置)
│   ├── layouts                     // 顶层布局
│   └── mixin.less                  // 通用less
├── Dockerfile                      // Docker 构建文件
├── Dockerfile.dev                  // Docker 构建文件(Mock 模式)
├── CHANGELOG.md                    // 更新日志
├── README.md                       // README.md
├── package.json
├── package-lock.json
└── yarn.lock
```

## dva model 文件说明
```sbtshell
.
├── .tpl.js             // 模板文件
└── app.js              // 全局 model
```

## 相关url说明
> - 路径命名全小写，单词之间用"-"分隔。例如: /hello-world
> - 传参统一使用 URL 进行传递。例如: /hello-world?lang=java

- /test: 测试页面


## 更新日志
[更新日志](CHANGELOG.md)