import { useState, useEffect } from 'react';
import { FilterItem, Transaction } from '../../types';
import Filter from '../Filter';

const TransactionTable = ({ data }: { data: Transaction[] }) => {
  // Initialize with all data visible
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>(data);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterItem>({
    type: 'all',
    status: 'all',
    dateStart: new Date().toDateString(),
    dateEnd: new Date().toDateString()
  });

  // -- filter transactions
  const applyFilters = () => {
    let filtered = [...data];

    console.log('filters', filters);

    // -- filter by transaction type (deposit/withdrawal)
    if (filters.type !== 'all') {
      filtered = filtered.filter((t) => t?.type === filters.type);
    }

    // -- filter by status
    if (filters.status !== 'all') {
      filtered = filtered.filter((t) => t?.status === filters.status);
    }

    setFilteredTransactions(filtered);
  };

  // -- handle filter changes without immediately closing the filter modal
  const handleFilterChange = (newFilters: FilterItem) => {
    setFilters(newFilters);
  };

  // -- apply filters and close modal
  const submitFilters = () => {
    applyFilters();
    setFilterOpen(false);
  };

  // -- reset filters
  const resetFilters = () => {
    const defaultFilters = {
      type: 'all',
      status: 'all',
      dateStart: 'all',
      dateEnd: 'all'
    };

    setFilters(defaultFilters);
    setFilterOpen(false);
  };

  // -- export to CSV
  const exportCSV = () => {
    const headers = ['Title', 'Name', 'Amount', 'Date', 'Type'];
    const csvData = filteredTransactions.map((t) => [
      t.metadata?.product_name || 'N/A',
      t.metadata?.name || 'N/A',
      `USD ${t.amount}`,
      formatDate(t.date),
      t.type
    ]);

    // -- create CSV string
    const csvContent = [headers.join(','), ...csvData.map((row) => row.join(','))].join('\n');

    // -- create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'transactions.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // -- format date
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options).replace(/\s/g, ' ');
  };

  // Apply filters whenever filter state changes
  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  useEffect(() => {
    setFilteredTransactions(data);
  }, [data]);

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center pb-6 border-b border-gray-300">
        <div>
          <h1 className="text-2xl font-bold">{filteredTransactions.length} Transactions</h1>
          <p className="text-gray-500 text-sm">Your transactions for all time</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2"
            >
              Filter
              <img src="/chevron-down.svg" alt="chevron down" />
            </button>

            {filterOpen && (
              <Filter
                setFilterOpen={setFilterOpen}
                setFilters={handleFilterChange}
                resetFilters={resetFilters}
                applyFilters={submitFilters}
                filters={filters}
              />
            )}
          </div>

          <button
            onClick={exportCSV}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer"
          >
            Export list
            <img src="/export-icon.svg" alt="export icon" />
          </button>
        </div>
      </div>

      <div className="mt-6">
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((transaction, index) => (
            <div
              key={index}
              className={`flex justify-between items-center py-4 ${
                transaction.type === 'deposit' ? 'hover:bg-[#E3FCF2]' : 'hover:bg-[#F9E3E0]'
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${
                    transaction.type === 'deposit' ? 'bg-green-100' : 'bg-red-100'
                  }`}
                >
                  {transaction.type === 'deposit' ? (
                    <img src="/credit-icon.svg" alt="credit icon" />
                  ) : (
                    <img src="/debit-icon.svg" alt="debit icon" />
                  )}
                </div>
                <div>
                  <h3 className="font-medium">
                    {transaction?.metadata?.product_name ||
                      transaction?.metadata?.type ||
                      transaction?.type}
                  </h3>
                  <p className="text-gray-500 text-sm">{transaction?.status}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">USD {transaction?.amount}</p>
                <p className="text-gray-500 text-sm">{formatDate(transaction?.date)}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-4 flex flex-col items-center">
            <img src="/receipt-icon.svg" alt="receipt-icon" className="w-10" />
            <h1 className="text-2xl font-bold mt-4">
              No matching transactions found for the selected filter
            </h1>
            <p className="text-gray-500">
              Change your filters to see more results, or add new product.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionTable;
