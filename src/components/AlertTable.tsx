import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const alerts = [
  { id: 1, time: '14:23', severity: 'Critical', source: 'WIN-01', status: 'Unresolved' },
  { id: 2, time: '13:55', severity: 'High', source: 'admin', status: 'Unresolved' },
  { id: 3, time: '13:30', severity: 'Medium', source: 'Workstation-02', status: 'Resolved' },
  { id: 4, time: '12:45', severity: 'High', source: 'Firewall', status: 'Resolved' },
  { id: 5, time: '12:10', severity: 'Low', source: 'john.doe', status: 'Resolved' },
];

const severityColor: Record<string, 'error' | 'warning' | 'info' | 'success'> = {
  Critical: 'error',
  High: 'warning',
  Medium: 'info',
  Low: 'success',
};

const AlertTable: React.FC = () => (
  <Card sx={{ width: '100%', mb: 3 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Alert Feed
      </Typography>
      <TableContainer component={Paper} elevation={0} sx={{ boxShadow: 'none' }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>Severity</TableCell>
              <TableCell>Source</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {alerts.map((alert) => (
              <TableRow key={alert.id}>
                <TableCell>{alert.time}</TableCell>
                <TableCell>
                  <Chip label={alert.severity} color={severityColor[alert.severity]} size="small" />
                </TableCell>
                <TableCell>{alert.source}</TableCell>
                <TableCell>{alert.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardContent>
  </Card>
);

export default AlertTable; 