## xx页面
> URI: /xx/xxx
> 用于copy后修改

## 路径参数描述
- attr: String!
> 表示 attr 接收一个 String 并且不能为 NULL

## 使用方式
```js
// 方式一，通过JS跳转
router.push({
  pathname: '/Index/Rider', 
  query: {
    attr: '666'
  }
});
```

## 注意点
> 暂无