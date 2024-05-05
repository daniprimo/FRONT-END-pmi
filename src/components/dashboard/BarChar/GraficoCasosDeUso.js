import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

export default function ResumoUc() {

    const chartSetting = {
        yAxis: [
          {
            label: 'rainfall (%)',
          },
        ],
        width: 500,
        height: 300,
        sx: {
          [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-20px, 0)',
          },
        },
      };
      const dataset = [
        {
          uc001: 100,
          uc005: 100,
          uc002: 100,
          uc003: 100,
          projeto: 'Projeto 1',
        },
        {
            uc001: 20,
            uc005: 35,
            uc002: 60,
            uc003: 85,
            projeto: 'Projeto 2',
          },
        {
            uc001: 59,
            uc005: 95,
            uc002: 86,
            uc003: 85,
            projeto: 'Projeto 3',
          },
        {
          uc001: 59,
          uc005: 95,
          uc002: 42,
          uc003: 35,
          projeto: 'Projeto 4',
        },
        {
            uc001: 100,
            uc005: 100,
            uc002: 100,
            uc003: 100,
            projeto: 'Projeto 5',
  
        },
        {
            uc001: 100,
            uc005: 100,
            uc002: 100,
            uc003: 100,
            projeto: 'Projeto 6',
        }
      ];
      
      const valueFormatter = (value) => `${value}%`;


    return (<>
            <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'projeto' }]}
      series={[
        { dataKey: 'uc001', label: 'uc001', valueFormatter },
        { dataKey: 'uc002', label: 'uc002', valueFormatter },
        { dataKey: 'uc003', label: 'uc003', valueFormatter },
        { dataKey: 'uc005', label: 'uc005', valueFormatter },
      ]}
      {...chartSetting}
    />
    </>);
}