import { AddRounded, CheckCircleOutline } from '@mui/icons-material';
import { IconButton, Typography, Box } from '@mui/material';
import React from 'react';

interface ModalAccordionListProps {
  title?: string;
  duration: number;
  status: 'completed' | 'uncompleted';
}

export const ModalAccordionList: React.FC<ModalAccordionListProps> = ({ title, duration, status }) => {
  const isCompleted = status === 'completed';

  return (
    <Box display="flex" alignItems="center" p={1} gap={2}>
      <Box flexGrow={1}>
        <Typography
          variant="s2"
          component="h4"
          color={isCompleted ? 'textSecondary' : 'textPrimary'}
        >
          {title}
        </Typography>
        <Typography variant="caption" component="p" color="textSecondary">
          {duration} min
        </Typography>
      </Box>

      {isCompleted ? (
        <Box display="flex" flexDirection="column" alignItems="center" className="text-text-secondary">
          <CheckCircleOutline sx={{ width: '16px', height: '16px'}} />
          <Typography variant="caption" fontWeight="500">
            Completato
          </Typography>
        </Box>
      ) : (
        <IconButton color="primary">
          <AddRounded />
        </IconButton>
      )}
    </Box>
  );
};
