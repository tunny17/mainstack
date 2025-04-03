import { JSX } from 'react';

export interface HomePageData {
  email: string;
  first_name: string;
  last_name: string;
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
}

export interface Transaction {
  amount: number;
  metadata: {
    name: string;
    type: string;
    email: string;
    quantity: number;
    country: string;
    product_name: string;
  };
  payment_reference: string;
  status: string;
  type: string;
  date: string;
}

export interface HeaderItem {
  id: number;
  label: string;
  link: string;
  icon: JSX.Element;
}

export interface UtilityItem {
  id: number;
  img: string;
}

export interface UtilityProps {
  position?: string;
}

export interface SectionItem {
  label: string;
  value: number;
}

export interface TransactionItem {
  id: number;
  type: string;
  amount: number;
  date: string;
  title: string;
  person: string;
}

export interface FilterItem {
  type: string;
  status: string;
  dateStart: string | Date;
  dateEnd: string | Date;
}

export interface FilterProps {
  filters: FilterItem;
  setFilters: (filters: {
    type: string;
    status: string;

    dateStart: string | Date;
    dateEnd: string | Date;
  }) => void;
  setFilterOpen: (open: boolean) => void;
  resetFilters: () => void;
  applyFilters: () => void;
}

export interface Option {
  id: string;
  label: string;
}

export interface CheckboxDropdownProps {
  placeholder?: string;
  options?: { id: string; label: string }[];
  selectedValues?: Record<string, boolean>;
  onChange?: (value: Record<string, boolean>) => void;
  className?: string;
}

export interface TransactionTypes {
  [key: string]: boolean;
  store: boolean;
  tipped: boolean;
  withdrawals: boolean;
  chargebacks: boolean;
  cashbacks: boolean;
  refer: boolean;
}

export interface TransactionOption {
  id: string;
  label: string;
}

export interface TransactionStatus {
  [key: string]: boolean;
  completed: boolean;
  failed: boolean;
  pending: boolean;
}

export interface TransactionOption {
  id: string;
  label: string;
}

export interface DateRangePickerProps {
  setFilter: (filters: FilterItem) => void;
  filters: FilterItem;
}
