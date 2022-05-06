# antd starter
> 快速构建

## 快速开始

Install dependencies, 

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

## 使用 SSR 模式部署

```shell
# 编译 -> ./dist
npm run build:prod.ssr

# 部署
docker run -it \
 -v ./dist:/usr/web/app/public \
 -v ./dist/manifest.json:/usr/web/config/manifest.json \
 -p 7001:7001 \
 --name test \
 --add-host=host.docker.internal:192.168.1.2 \
 hocgin/docker-ssr:0.0.2
```

## 相关文档
**目录**
- [浏览器插件](docs/浏览器插件开发.md)
