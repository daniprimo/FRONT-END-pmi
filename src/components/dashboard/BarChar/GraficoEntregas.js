import { LineChart } from '@mui/x-charts/LineChart';

const uData = [15, 23, 9];
const xLabels = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Maio',
  'Abril',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export default function GraficoEntregas() {
  return (
    <LineChart
      width={500}
      height={300}
      series={[{ data: uData, label: 'Entregas UC', area: true, showMark: false }]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        '.MuiLineElement-root': {
          display: 'none',
        },
      }}
    />
  );
}