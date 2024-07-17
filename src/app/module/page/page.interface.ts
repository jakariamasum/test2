export type TPage = {
  name: string;
  tag: string;
  description?: string;
  layout_type: string;
  rows: number;
  columns_per_row: Record<string, any>[];
};
