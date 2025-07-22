import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const events = [
  {
    id: 1,
    time: '14:23',
    type: 'Malware Detected',
    description: 'Malware detected on host WIN-01.',
    severity: 'Critical',
    color: '#e63946',
  },
  {
    id: 2,
    time: '13:55',
    type: 'Login Failure',
    description: 'Multiple failed login attempts for user admin.',
    severity: 'High',
    color: '#f77f00',
  },
  {
    id: 3,
    time: '13:30',
    type: 'Policy Violation',
    description: 'USB device connected to secure workstation.',
    severity: 'Medium',
    color: '#fcbf49',
  },
  {
    id: 4,
    time: '12:45',
    type: 'Suspicious Traffic',
    description: 'Unusual outbound traffic detected.',
    severity: 'High',
    color: '#f77f00',
  },
  {
    id: 5,
    time: '12:10',
    type: 'User Login',
    description: 'User john.doe logged in from new location.',
    severity: 'Low',
    color: '#43aa8b',
  },
];

const EventTimeline: React.FC = () => (
  <Card sx={{ width: '100%', mb: 3 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Event Timeline
      </Typography>
      <List>
        {events.map(event => (
          <ListItem key={event.id} alignItems="flex-start" sx={{ px: 0 }}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: event.color, width: 32, height: 32, fontSize: 14 }}>
                {event.severity[0]}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box display="flex" alignItems="center" gap={1}>
                  <Typography variant="subtitle2" color="text.secondary">
                    {event.time}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {event.type}
                  </Typography>
                  <Typography variant="caption" sx={{ color: event.color, fontWeight: 700, ml: 1 }}>
                    {event.severity}
                  </Typography>
                </Box>
              }
              secondary={event.description}
            />
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default EventTimeline; 