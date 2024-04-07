import Chart from '../../components/Chart/Chart';
import styles from './StatisticsTab.module.css';
import StatisticsDashboard from '../../components/StatisticsDashboard/StatisticsDashboard';
import StatisticsTable from '../../components/StatisticsTable/StatisticsTable';

const StatisticsTab = () => {
  return (
    <div className={styles.statisticsPageContainer}>
      <Chart />
      <StatisticsDashboard />
      <StatisticsTable />
    </div>
  );
};
export default StatisticsTab;
