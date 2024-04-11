import Chart from '../../components/Chart/Chart';
import StatisticsDashboard from 'components/StatisticsDashboard/StatisticsDashboard';
import StatisticsTable from '../../components/StatisticsTable/StatisticsTable';
import {
  StatisticsPageContainer,
  StatisticsContainer,
} from './StatisticsTab.styled';

const StatisticsTab = () => {
  return (
    <StatisticsPageContainer>
      <Chart />
      <StatisticsContainer>
        <StatisticsDashboard />
        <StatisticsTable />
      </StatisticsContainer>
    </StatisticsPageContainer>
  );
};
export default StatisticsTab;
