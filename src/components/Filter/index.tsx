import { useState } from 'react';
import { FilterProps, TransactionOption, TransactionStatus, TransactionTypes } from '../../types';
import CheckboxDropdown from '../Dropdown';
import DateRangePicker from '../DateRange';

const Filter = ({
  filters,
  setFilters,
  resetFilters,
  applyFilters,
  setFilterOpen
}: FilterProps) => {
  const [transactionTypes, setTransactionTypes] = useState<TransactionTypes>({
    store: false,
    tipped: false,
    withdrawals: false,
    chargebacks: false,
    cashbacks: false,
    refer: false
  });

  const [transactionStatus, setTransactionStatus] = useState<TransactionStatus>({
    completed: false,
    failed: false,
    pending: false
  });

  const transactionOptions: TransactionOption[] = [
    { id: 'digital_product', label: 'Digital Product' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'webinar', label: 'Webinar' }
  ];

  const transactionStatusOptions: TransactionOption[] = [
    { id: 'successful', label: 'Successful' },
    { id: 'failed', label: 'Failed' },
    { id: 'pending', label: 'Pending' }
  ];

  const handleTransactionStatusChange = (newValues: Record<string, boolean>) => {
    setTransactionStatus(newValues as TransactionStatus);

    // Find the key with the value `true`
    const selectedStatus = Object.entries(newValues).find(([, value]) => value)?.[0] || '';

    // Update the filters with the selected status
    setFilters({ ...filters, status: selectedStatus });
  };

  const handleTransactionTypesChange = (newValues: Record<string, boolean>) => {
    setTransactionTypes(newValues as TransactionTypes);

    const selectedStatus = Object.entries(newValues).find(([, value]) => value)?.[0] || '';
    setFilters({ ...filters, type: selectedStatus });
  };

  return (
    <section className="fixed w-full h-[100vh] inset-0 bg-black/20 z-50 flex justify-end">
      <div className="w-full md:w-[32rem] h-fit flex flex-col gap-9 p-6 mt-5 mr-5 rounded-xl shadow-lg z-10 bg-white">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Filter</h1>

          <button type="button" onClick={() => setFilterOpen(false)}>
            <img src="/close-icon.svg" alt="close icon" />
          </button>
        </div>

        {/* --- date range */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            className="px-4 py-2 rounded-full border-gray-200 border text-sm cursor-pointer hover:scale-110 duration-200 transition-all"
            onClick={() => setFilters({ ...filters, dateStart: 'today', dateEnd: Date() })}
          >
            Today
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-full border-gray-200 border text-sm"
            onClick={() => setFilters({ ...filters, dateStart: 'last 7 days', dateEnd: Date() })}
          >
            Last 7 days
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-full border-gray-200 border text-sm"
            onClick={() => setFilters({ ...filters, dateStart: 'this month', dateEnd: Date() })}
          >
            This month
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-full border-gray-200 border text-sm"
            onClick={() => setFilters({ ...filters, dateStart: 'last 3 days', dateEnd: Date() })}
          >
            Last 3 days
          </button>
        </div>

        {/* --- date range */}
        <div>
          <label className="text-sm font-medium">Date Range</label>
          <DateRangePicker setFilter={setFilters} filters={filters} />
        </div>

        {/* --- transaction type */}
        <div>
          <label className="text-sm font-medium">Transaction Type</label>
          <CheckboxDropdown
            placeholder="Store Transactions, Get Tipped, Withdrawals, Chargebacks, Cashbacks, Refer & Earn"
            options={transactionOptions}
            selectedValues={transactionTypes}
            onChange={handleTransactionTypesChange}
          />
        </div>

        {/* --- status */}
        <div>
          <label className="text-sm font-medium">Transaction Status</label>
          <CheckboxDropdown
            placeholder="Successful, Pending, Failed"
            options={transactionStatusOptions}
            selectedValues={transactionStatus}
            onChange={handleTransactionStatusChange}
          />
        </div>

        <div className="flex justify-between">
          <button onClick={resetFilters} className="bg-gray-100 text-gray-800 px-3 py-1 rounded">
            Reset
          </button>
          <button onClick={applyFilters} className="bg-blue-600 text-white px-3 py-1 rounded">
            Apply
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filter;
