'use strict';

const mock = require('egg-mock');
const assert = require('power-assert');

describe('test/pagination.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/pagination-default',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should throw error without pageSizes', () => {
    const ctx = app.mockContext();
    assert.throws(() => ctx.request.pagination(), /got: undefined$/);
  });

  it('should throw error with invalid page and pageSize', () => {
    const ctx = app.mockContext();
    ctx.query = { page: '-2' };
    assert.throws(() => ctx.request.pagination(), /page\s.*?got: -2$/);

    ctx.query = { page: '1.23' };
    assert.throws(() => ctx.request.pagination(), /page\s.*?got: 1.23$/);

    ctx.query = { pageSize: '-2' };
    assert.throws(() => ctx.request.pagination(), /pageSize\s.*?got: -2$/);

    ctx.query = { pageSize: '1.23' };
    assert.throws(() => ctx.request.pagination(), /pageSize\s.*?got: 1.23$/);
  });

  it('should using default page and pageSize in options', () => {
    const ctx = app.mockContext();
    const pagination = ctx.request.pagination({ pageSize: 10 });
    assert(pagination.page === 1);
    assert(pagination.pageSize === 10);
  });

  it('should using page and pageSize in query parameters', () => {
    const ctx = app.mockContext();
    ctx.query = { page: '2', pageSize: '15' };
    const pagination = ctx.request.pagination({ pageSize: 10 });
    assert(pagination.page === 2);
    assert(pagination.pageSize === 15);
  });

  it('should using maxPageSize as pageSize if pageSize is over limit', () => {
    const ctx = app.mockContext();
    ctx.query = { pageSize: '15' };
    const pagination = ctx.request.pagination({ maxPageSize: 10 });
    assert(pagination.pageSize === 10);
  });

  it('should computing offset correctly', () => {
    const ctx = app.mockContext();
    ctx.query = { page: '2', pageSize: '15' };
    const pagination = ctx.request.pagination();
    assert(pagination.offset === 15);
  });
});

describe('test/pagination.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/pagination-configured',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should using default pageSize in config file', () => {
    const ctx = app.mockContext();
    const pagination = ctx.request.pagination();
    assert(pagination.pageSize === 20);
  });

  it('should using default maxPageSize in config file', () => {
    const ctx = app.mockContext();
    ctx.query = { pageSize: '50' };
    const pagination = ctx.request.pagination();
    assert(pagination.pageSize === 30);
  });
});
