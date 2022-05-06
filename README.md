# antd starter

## Getting Started

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
