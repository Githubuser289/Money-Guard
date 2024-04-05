import { Chart as ChartJS, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import styles from './Chart.module.css';
import { selectSummary } from 'redux/selectors';

ChartJS.register(...registerables);

export const coloredCategoriesMap = new Map([
  ['Entertainment', '#ff85d2'],
  ['Car', 'rgb(255, 104, 109)'],
  ['Products', 'rgb(255, 157, 137)'],
  ['Main expenses', 'rgb(254, 208, 87)'],
  ['Leisure', 'rgb(91, 255, 167)'],
  ['Other expenses', 'rgb(0, 173, 95)'],
  ['Education', 'rgb(115, 222, 255)'],
  ['Self care', 'rgb(170, 154, 255)'],
  ['Child care', 'rgb(87, 101, 255)'],
  ['Household products', 'rgb(114, 61, 239)'],
]);
export function Chart() {
  const summary = useSelector(selectSummary);

  const periodSummary = summary.categoriesSummary
    ? summary.categoriesSummary
        .filter(category => category.type === 'EXPENSE')
        .map(category => ({
          ...category,
          color: coloredCategoriesMap[category.name] || '#000000',
        }))
        .sort((a, b) => a.total - b.total)
    : [];
  const data = {
    datasets: [
      {
        data: periodSummary.map(expense => expense.total),
        backgroundColor: periodSummary.map(expense => expense.color),
        boxShadow: '0px 0px 8px 0px #000 inset',
      },
    ],
  };

  const noData = {
    datasets: [
      {
        data: [0.0000000001],
        backgroundColor: ['rgba(200, 200, 200, 0.5)'],
        borderWidth: 0,
      },
    ],
  };
  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  const expenseTotal = summary.expenseSummary || 0;

  return (
    <div>
      <h2 className={styles.statisticsTitle}>Statistics</h2>
      <div className={styles.chart}>
        <Doughnut
          data={periodSummary.length ? data : noData}
          options={options}
        />
        <div className={styles.expenseTotal}>₴ {expenseTotal.toFixed(2)}</div>
      </div>
    </div>
  );
}
