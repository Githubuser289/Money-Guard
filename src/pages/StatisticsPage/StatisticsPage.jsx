import { Chart } from 'components/Chart/Chart';
import styles from './StatisticsPage.module.css';
import StatisticsDashboard from 'components/StatisticsDashboard/StatisticsDashboard';
import StatisticsTable from 'components/StatisticsTable/StatisticsTable';

const StatisticsPage = () => {
  return (
    <div className={styles.statisticsPageContainer}>
      <Chart />
      <StatisticsDashboard />
      <StatisticsTable />
    </div>
  );
};
export default StatisticsPage;
