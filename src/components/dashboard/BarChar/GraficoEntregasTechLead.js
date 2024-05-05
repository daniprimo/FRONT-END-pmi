import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const dData = [5, 12, 3];
const sData = [3, 7, 4];
const lData = [6, 9, 3];
const pData = [4, 15, 6];
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

export default function EntregasTechLead() {
  return (
    <LineChart
      width={700}
      height={300}
      series={[
        { data: dData, label: 'Daniel Lopes' },
        { data: sData, label: 'Samanta Revelin' },
        { data: lData, label: 'Lucas Rodrigues' },
        { data: pData, label: 'Pedro Cardoso' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}