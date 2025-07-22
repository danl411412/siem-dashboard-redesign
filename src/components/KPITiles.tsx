import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const kpis = [
  { label: 'Total Events', value: 12456, color: '#1976d2' },
  { label: 'Notable Events', value: 342, color: '#e63946' },
  { label: 'Alerts', value: 87, color: '#f77f00' },
  { label: 'Hosts', value: 56, color: '#43aa8b' },
  { label: 'Users', value: 18, color: '#4f8cff' },
];

const KPITiles: React.FC = () => (
  <Grid spacing={2} sx={{ mb: 3, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(5, 1fr)' }, gap: 2 }}>
    {kpis.map((kpi) => (
      <Card key={kpi.label} sx={{ borderBottom: `4px solid ${kpi.color}` }}>
        <CardContent>
          <Typography variant="h5" sx={{ color: kpi.color, fontWeight: 700 }}>
            {kpi.value}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {kpi.label}
          </Typography>
        </CardContent>
      </Card>
    ))}
  </Grid>
);

export default KPITiles; 