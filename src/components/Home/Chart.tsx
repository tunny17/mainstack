import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Transaction } from '../../types';

const TransactionChart = ({ data }: { data: Transaction[] | undefined }) => {
  const [chartData, setChartData] = useState(
    (data || []).map((transaction) => ({
      date: transaction.date,
      value: transaction.amount
    }))
  );

  const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  useEffect(() => {
    if (Array.isArray(data)) {
      setChartData(
        data.map((transaction) => ({
          date: transaction.date,
          value: transaction.amount
        }))
      );
    } else {
      setChartData([]);
    }
  }, [data]);

  return (
    <div className="w-full">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <Line
              type="natural"
              dataKey="value"
              stroke="#ff5722"
              strokeWidth={2}
              dot={false}
              activeDot={false}
              isAnimationActive={false}
            />
            <XAxis hide={true} />
            <YAxis hide={true} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <img src="/line.svg" alt="line" className="w-full" />
      <div className="flex justify-between mt-2 text-gray-400 text-sm">
        <div>{formatDate('2022-04-01')}</div>
        <div>{formatDate('2022-04-30')}</div>
      </div>
    </div>
  );
};

export default TransactionChart;
