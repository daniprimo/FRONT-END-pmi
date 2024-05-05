import { BarChart } from '@mui/x-charts/BarChart';

export default function GraficosDaOs() {
    const valueFormatter = (value) => `${value}%`;

   
   return (<>
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['Projeto 1', 'Projeto 2', 'Projeto 3', 'Projeto 4', 'Projeto 5', 'Projeto 6'] }]}
      series={[{ data: [100, 30, 80, 40, 95, 100], valueFormatter }]}
      width={500}
      height={300}
    />

    </>);
}