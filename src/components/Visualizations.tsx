import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PublicIcon from '@mui/icons-material/Public';

const eventTypes = [
  { label: 'Login', value: 40, color: '#1976d2' },
  { label: 'Malware', value: 25, color: '#e63946' },
  { label: 'Policy', value: 15, color: '#fcbf49' },
  { label: 'Traffic', value: 20, color: '#43aa8b' },
];

const alertDistribution = [
  { label: 'Critical', value: 10, color: '#e63946' },
  { label: 'High', value: 20, color: '#f77f00' },
  { label: 'Medium', value: 30, color: '#fcbf49' },
  { label: 'Low', value: 40, color: '#43aa8b' },
];

const attackSources = [
  { country: 'USA', value: 12 },
  { country: 'Germany', value: 7 },
  { country: 'China', value: 15 },
  { country: 'Brazil', value: 5 },
];

const Visualizations: React.FC = () => (
  <Box sx={{ mb: 3, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 2 }}>
    {/* Event Types (Bar Chart) */}
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Event Types
        </Typography>
        <Box sx={{ height: 180, display: 'flex', alignItems: 'flex-end', gap: 2, justifyContent: 'center', pb: 2 }}>
          {eventTypes.map((et) => (
            <Box key={et.label} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{ width: 18, height: `${et.value * 3}px`, background: et.color, borderRadius: 1, mb: 1 }} />
              <Typography variant="caption" color="text.secondary">{et.label}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
    {/* Alert Distribution (Pie Chart) */}
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Alert Distribution
        </Typography>
        <Box sx={{ height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width={100} height={100} viewBox="0 0 32 32">
            {(() => {
              let acc = 0;
              const total = alertDistribution.reduce((sum, a) => sum + a.value, 0);
              return alertDistribution.map((a, i) => {
                const start = acc;
                const angle = (a.value / total) * 360;
                acc += angle;
                const large = angle > 180 ? 1 : 0;
                const x1 = 16 + 16 * Math.cos((Math.PI * start) / 180);
                const y1 = 16 + 16 * Math.sin((Math.PI * start) / 180);
                const x2 = 16 + 16 * Math.cos((Math.PI * (start + angle)) / 180);
                const y2 = 16 + 16 * Math.sin((Math.PI * (start + angle)) / 180);
                return (
                  <path
                    key={a.label}
                    d={`M16,16 L${x1},${y1} A16,16 0 ${large} 1 ${x2},${y2} Z`}
                    fill={a.color}
                    opacity={0.8}
                  />
                );
              });
            })()}
          </svg>
          <Box sx={{ ml: 2 }}>
            {alertDistribution.map(a => (
              <Box key={a.label} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                <Box sx={{ width: 12, height: 12, background: a.color, borderRadius: '50%', mr: 1 }} />
                <Typography variant="caption">{a.label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
    {/* Attack Sources (Geo Map) */}
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Attack Sources
        </Typography>
        <Box sx={{ height: 180, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <PublicIcon sx={{ fontSize: 48, color: '#1976d2', mb: 1 }} />
          {attackSources.map(src => (
            <Typography key={src.country} variant="body2" color="text.secondary">
              {src.country}: {src.value} attacks
            </Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  </Box>
);

export default Visualizations; 