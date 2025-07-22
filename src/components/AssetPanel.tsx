import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

const assets = [
  { name: 'WIN-01', type: 'Host', status: 'Online', risk: 8 },
  { name: 'Firewall', type: 'Device', status: 'Online', risk: 3 },
  { name: 'Workstation-02', type: 'Host', status: 'Offline', risk: 5 },
  { name: 'admin', type: 'User', status: 'Active', risk: 7 },
  { name: 'john.doe', type: 'User', status: 'Active', risk: 2 },
];

const riskColor = (risk: number) => {
  if (risk >= 8) return 'error';
  if (risk >= 5) return 'warning';
  return 'success';
};

const AssetPanel: React.FC = () => (
  <Card sx={{ width: '100%', mb: 3 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Assets / Hosts / Users
      </Typography>
      <List>
        {assets.map((asset) => (
          <ListItem key={asset.name} sx={{ px: 0 }}>
            <ListItemText
              primary={<Box display="flex" alignItems="center" gap={1}>
                <Typography variant="subtitle1" fontWeight={600}>{asset.name}</Typography>
                <Chip label={asset.type} size="small" sx={{ ml: 1 }} />
                <Chip label={asset.status} size="small" color={asset.status === 'Online' || asset.status === 'Active' ? 'success' : 'default'} sx={{ ml: 1 }} />
                <Chip label={`Risk: ${asset.risk}`} size="small" color={riskColor(asset.risk)} sx={{ ml: 1 }} />
              </Box>}
            />
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default AssetPanel; 