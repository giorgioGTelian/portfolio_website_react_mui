import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Numbers = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        {[
          {
            title: 18,
            subtitle: '18 anni di esperienza',
          },
          {
            title: '200',
            subtitle: '200 siti e applicazioni web realizzati.',
          },
          {
            title: '99%',
            subtitle: '99% di clienti soddisfatti.',
          },
        ].map((item, i) => (
          <Grid key={i} item xs={12} sm={4}>
            <Typography
              variant="h3"
              align={'center'}
              gutterBottom
              sx={{
                fontWeight: 900,
              }}
            >
              {item.title}
            </Typography>
            <Typography color="text.secondary" align={'center'} component="p">
              {item.subtitle}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Numbers;
