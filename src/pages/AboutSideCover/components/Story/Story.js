import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Story = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography fontWeight={700} variant={'h5'}>
            facciamo la differenza
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography component={'p'} color={'text.secondary'} fontWeight={400}>
            siamo un team di consulenti creativi che aiutano a colmare il gap
            digitale tra le aziende e i loro clienti con siti web che non solo
            servono come piattaforme di marketing ma forniscono anche soluzioni
            ai problemi aziendali online e strategie di marketing digitale che
            ti mettono in contatto con il cliente ideale e aiutano a creare un
            cliente fedele.
            <br />
            <br />
            usiamo le ultime tecnologie per offrire servizi di consulenza
            personalizzati per aiutare le aziende a raggiungere i loro obiettivi
            aziendali. La nostra esperienza e competenza nel settore ci
            consentono di offrire soluzioni su misura e di alta qualità.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
            {[
              'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
              'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
              'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
              'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
              'https://assets.maccarianagency.com/svg/logos/google-original.svg',
              'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
            ].map((item, i) => (
              <Box maxWidth={90} marginTop={2} marginRight={4} key={i}>
                <Box
                  component="img"
                  height={1}
                  width={1}
                  src={item}
                  alt="..."
                  sx={{
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0) invert(0.7)'
                        : 'none',
                  }}
                />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;
