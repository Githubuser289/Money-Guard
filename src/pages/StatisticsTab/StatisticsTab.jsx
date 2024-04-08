import Chart from '../../components/Chart/Chart';
import StatisticsDashboard from 'components/StatisticsDashboard/StatisticsDashboard';
import StatisticsTable from '../../components/StatisticsTable/StatisticsTable';
import { StatisticsPageContainer } from './StatisticsTab.styled';

const StatisticsTab = () => {
  return (
    <StatisticsPageContainer>
      <Chart />
      <div>
        <StatisticsDashboard />
        <StatisticsTable />
      </div>
    </StatisticsPageContainer>
  );
};
export default StatisticsTab;
