'use strict';

const assert = require('assert');

module.exports = {
  pagination(options) {
    const opts = {
      ...this.app.config.pagination,
      ...options,
    };
    const { page: rawPage, pageSize: rawPageSize } = this.query;

    const page = Number(rawPage) || 1;
    let pageSize = Number(rawPageSize) || opts.pageSize;
    if (opts.maxPageSize && pageSize > opts.maxPageSize) {
      pageSize = opts.maxPageSize;
    }

    assert(Number.isInteger(page) && page > 0, `page must be an integer and greater than 0, got: ${page}`);
    assert(Number.isInteger(pageSize) && pageSize > 0, `pageSize must be an integer and greater than 0, got: ${pageSize}`);

    return {
      page,
      pageSize,
      offset: (page - 1) * pageSize,
    };
  },
};
