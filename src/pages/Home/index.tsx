import axios from 'axios';

import Chart from '../../components/Home/Chart';
import TransactionTable from '../../components/TransactionTable';

import { HomePageData, SectionItem, Transaction } from '../../types';
import { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState<HomePageData>({
    email: '',
    first_name: '',
    last_name: '',
    balance: 0.0,
    total_payout: 0.0,
    total_revenue: 0.0,
    pending_payout: 0.0,
    ledger_balance: 0.0
  });

  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const sections: SectionItem[] = [
    {
      label: 'Ledger Balance',
      value: data.ledger_balance
    },
    {
      label: 'Total Payout',
      value: data.total_payout
    },
    {
      label: 'Total Revenue',
      value: data.total_revenue
    },
    {
      label: 'Pending Payout',
      value: data.pending_payout
    }
  ];

  const fetchHomeData = async () => {
    const baseUrl = import.meta.env.VITE_PUBLIC_BASEURL;

    try {
      const [userResponse, walletResponse, transactionResponse] = await Promise.all([
        axios.get(`${baseUrl}/user`),
        axios.get(`${baseUrl}/wallet`),
        axios.get(`${baseUrl}/transactions`)
      ]);

      if (userResponse.status === 200) {
        setData(userResponse.data);
      }
      if (walletResponse.status === 200) {
        setData((prev) => ({ ...prev, ...walletResponse.data }));
      }
      if (transactionResponse.status === 200) {
        setTransactions(transactionResponse.data);
      }

      setIsLoading(false);
    } catch (error) {
      alert(error);
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  return (
    <section className="px-28 py-10 w-full">
      {isLoading ? (
        <div className="flex items-center justify-center">
          <img src="/public/animated-logo.svg" alt="animated logo" className="w-[20rem]" />
        </div>
      ) : (
        <>
          {/* --- first section */}
          <section className="flex justify-between items-start w-full">
            <div className="w-[60%]">
              <div className="w-[53%] flex items-center justify-between mb-12 pl-5">
                <div className="flex flex-col gap-3">
                  <p className="text-xs text-gray-400">Available Balance</p>
                  <h1 className="text-2xl font-bold">
                    USD{' '}
                    {data.balance.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}
                  </h1>
                </div>

                <button
                  type="button"
                  className="text-sm bg-black text-white rounded-full px-12 py-3 cursor-pointer hover:scale-90 transition-all duration-200"
                >
                  Withdraw
                </button>
              </div>

              {/*  */}
              <Chart data={transactions} />
            </div>

            <section className="flex flex-col gap-5 w-[30%]">
              {sections.map((section, index) => (
                <div key={index} className="flex flex-col gap-6">
                  <div className="flex items-center justify-between font">
                    <p className="text-xs text-gray-400">{section.label}</p>
                    <img src="/info-icon.svg" alt="info icon" />
                  </div>

                  <span className="font degular-regular font-black text-2xl">
                    USD{' '}
                    {section.value.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}
                  </span>
                </div>
              ))}
            </section>
          </section>

          {/* --- table */}
          <TransactionTable data={transactions} />
        </>
      )}
    </section>
  );
};

export default Home;
