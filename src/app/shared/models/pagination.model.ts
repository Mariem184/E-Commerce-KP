export interface TableColumn<T = any> {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  align?: 'left' | 'center' | 'right';
}

export interface PaginationParams {
  page: number;
  pageSize: number;
  searchTerm?: string;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}
