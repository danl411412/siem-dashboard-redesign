import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

const severities = ['All', 'Critical', 'High', 'Medium', 'Low'];
const statuses = ['All', 'Resolved', 'Unresolved'];

const SearchFilterPanel: React.FC = () => {
  const [search, setSearch] = React.useState('');
  const [severity, setSeverity] = React.useState('All');
  const [status, setStatus] = React.useState('All');

  return (
    <Card sx={{ width: '100%', mb: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Search & Filter
        </Typography>
        <Grid sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr' }, gap: 2 }}>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            fullWidth
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <TextField
            select
            label="Severity"
            variant="outlined"
            size="small"
            fullWidth
            value={severity}
            onChange={e => setSeverity(e.target.value)}
          >
            {severities.map(option => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Status"
            variant="outlined"
            size="small"
            fullWidth
            value={status}
            onChange={e => setStatus(e.target.value)}
          >
            {statuses.map(option => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </TextField>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SearchFilterPanel; 