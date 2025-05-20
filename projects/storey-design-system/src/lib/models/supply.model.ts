export interface Supply {
  id: number;
  associatedSupply: string;
  address: string;
  locality: string;
  alias: string;
  nis: string;
  tags?: string[];
  status: 'active' | 'inactive';
}