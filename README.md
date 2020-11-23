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

Parse pagination data from query parameters.

## Install

```bash
$ npm i egg-pagination --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.pagination = {
  enable: true,
  package: 'egg-pagination',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.pagination = {
  pageSize: 10,
  maxPageSize: 50,
};
```

## Example

```js
  const pagination = this.ctx.request.pagination();
  const { page, pageSize, offset } = pagination;
```

## Questions & Suggestions

Please open an issue [here](https://github.com/flowkscai/egg-pagination/issues).

## License

[MIT](LICENSE)
