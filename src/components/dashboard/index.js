import { Box, Stack, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import ResumoUc from './BarChar/GraficoCasosDeUso';
import GraficosDaOs from './BarChar/GraficoOsGeral';
import GraficoEntregas from './BarChar/GraficoEntregas';
import EntregasTechLead from './BarChar/GraficoEntregasTechLead';
import Resumo from './BarChar/QuadroResumo';


const data = [
    { value: 5, label: 'A' },
    { value: 10, label: 'B' },
    { value: 15, label: 'C' },
    { value: 20, label: 'D' },
  ];
const size = {
  width: 400,
  height: 200,
};  

export default function DashboardOperacional() {
    
const pieParams = { height: 200, margin: { right: 5 } };
const palette = ['red', 'blue', 'green'];

    return (
     <>
      <br/>
     <Resumo />

    <Stack  direction="row" width="100%" textAlign="center" spacing={2} sx={{marginBottom: 4}}>
        <GraficosDaOs />
        <ResumoUc />
    </Stack>

    <Stack  direction="row" width="100%" textAlign="center" spacing={2} sx={{marginBottom: 4}}>
        <GraficoEntregas />
        <EntregasTechLead />
    </Stack>

    

    <Stack direction="row" width="100%" textAlign="center" spacing={2} sx={{marginBottom: 4}}>
      <Box flexGrow={1}>
        <Typography>Default</Typography>
        <PieChart
          series={[{ data: [{ value: 10 }, { value: 15 }, { value: 20 }] }]}
          {...pieParams}
        />
      </Box>
      <Box flexGrow={1}>
        <Typography>Palette</Typography>
        <PieChart
          colors={palette}
          series={[{ data: [{ value: 10 }, { value: 15 }, { value: 20 }] }]}
          {...pieParams}
        />
      </Box>
      <Box flexGrow={1}>
        <Typography>Item</Typography>
        <PieChart
          series={[
            { data: [{ value: 10, color: 'orange' }, { value: 15 }, { value: 20 }] },
          ]}
          {...pieParams}
        />
      </Box>
    </Stack>


      <Stack  spacing={2} direction="row" sx={{marginBottom: 4}}>
      <PieChart
                series={[
                {
                data: [
                    { id: 0, value: 25, label: 'series A' },
                    { id: 1, value: 25, label: 'series B' },
                    { id: 2, value: 25, label: 'series C' },
                    { id: 3, value: 25, label: 'series D' },
                ],
                innerRadius: 30,
                outerRadius: 100,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -90,
                endAngle: 180,
                cx: 150,
                cy: 150,
                },
            ]}
            width={400}
            height={500}
            />


<BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    />
      </Stack>
     </>
    );
}