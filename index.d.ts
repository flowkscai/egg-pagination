import 'egg';

interface PaginationOptions {
  pageSize?: number;
  maxPageSize?: number;
}

interface PaginationResult {
  page: number;
  pageSize: number;
  offset: number;
}

declare module 'egg' {
  interface Request {
    pagination(options?: PaginationOptions): PaginationResult;
  }

  interface EggAppConfig {
    pagination: PaginationOptions;
  }
}
