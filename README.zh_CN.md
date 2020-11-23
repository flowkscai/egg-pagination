# egg-pagination

[![NPM version][npm-image]][npm-url]
[![Test coverage][codecov-image]][codecov-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/egg-pagination.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-pagination
[codecov-image]: https://img.shields.io/codecov/c/github/flowkscai/egg-pagination.svg?style=flat-square
[codecov-url]: https://codecov.io/github/flowkscai/egg-pagination?branch=master
[snyk-image]: https://snyk.io/test/npm/egg-pagination/badge.svg
[snyk-url]: https://snyk.io/test/npm/egg-pagination

从 URL 请求参数中解析分页数据。

### 依赖的 egg 版本

egg-pagination 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

## 开启插件

```js
// config/plugin.js
exports.pagination = {
  enable: true,
  package: 'egg-pagination',
};
```

## 配置

```js
// {app_root}/config/config.default.js
exports.pagination = {
  pageSize: 10,
  maxPageSize: 50,
};
```

## 提问交流

请到 [issues](https://github.com/flowkscai/egg-pagination/issues) 移步交流。

## License

[MIT](LICENSE)
