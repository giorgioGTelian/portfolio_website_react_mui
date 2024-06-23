import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import Container from '../../../../components/Container';
import { blue } from '@mui/material/colors';

const mock = [
  {
    title: 'Starter',
    subtitle: 'perfetto per chi inizia',
    price: { monthly: '€22', annual: '€190' },
    features: ['1 utente', '1 applicazione', '1 integrazione', ],
    isHighlighted: false,
  },
  {
    title: 'Pro',
    subtitle: 'per chi vuole un po di più',
    price: { monthly: '€44', annual: '€390' },
    features: [
      'starter plan incluso',
      'fino a 20 utenti',
      'API accesso',
      '24/7 supporto',
    ],
    isHighlighted: true,
  },
  {
    title: 'Enterprise',
    subtitle: 'Ideale per chi sa cosa vuole',
    price: { monthly: '€160', annual: '€2000' },
    features: [
      'tutte le funzionalità',
      'supporto prioritario',
      'Google Ads',
      'applicazione personalizzata',
      'sito web personalizzato',
      'integrazione inclusa',
    ],
    isHighlighted: false,
  },
];

const Main = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [pricingOption, setPricingOption] = useState('annual');

  const handleClick = (event, newPricingOption) => {
    setPricingOption(newPricingOption);
  };
  const navigate = useNavigate();
  const renderToggler = () => (
    <Box display={'flex'} justifyContent={'center'} marginBottom={4}>
      <ToggleButtonGroup value={pricingOption} exclusive onChange={handleClick}>
        <ToggleButton
          value="annual"
          size={isMd ? 'large' : 'small'}
          sx={{
            backgroundColor:
              pricingOption === 'annual'
                ? `blue !important`
                : 'transparent',
            border: `1px solid`,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              color:
                pricingOption === 'annual' ? 'common.white' : 'text.primary',
            }}
          >
            Annuale
          </Typography>
        </ToggleButton>
        <ToggleButton
          value="monthly"
          size={isMd ? 'large' : 'small'}
          sx={{
            backgroundColor:
              pricingOption === 'monthly'
                ? `gray !important`
                : 'transparent',
            border: `1px solid ${theme.palette.primary.main}`,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              color:
                pricingOption !== 'annual' ? 'common.white' : 'text.primary',
            }}
          >
            Mensile
          </Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          marginTop: -13,
          paddingTop: 13,
        }}
      >
        <Container position={'relative'} zIndex={3}>
          <Box>
            <Box marginBottom={4}>
              <Typography
                variant="h3"
                gutterBottom
                align={'center'}
                sx={{
                  fontWeight: 900,
                }}
              >
                Opzioni di prezzo flessibili
              </Typography>
              <Typography
                variant="h6"
                component="p"
                color="text.primary"
                align={'center'}
              >
                Scegli il piano che si adatta meglio alle tue esigenze e 
                <br />
                inizia a crescere il tuo business con noi oggi.
              </Typography>
            </Box>
            {renderToggler()}
          </Box>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box
                component={Card}
                height={1}
                display={'flex'}
                flexDirection={'column'}
                variant={'outlined'}
              >
                <CardContent
                  sx={{
                    padding: 4,
                  }}
                >
                  <Box marginBottom={2}>
                    <Typography variant={'h4'} fontWeight={600} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography color={'text.secondary'}>
                      {item.subtitle}
                    </Typography>
                  </Box>
                  <Box
                    display={'flex'}
                    alignItems={'baseline'}
                    marginBottom={2}
                  >
                    <Typography variant={'h3'} fontWeight={700}>
                      {pricingOption === 'annual'
                        ? item.price.annual
                        : item.price.monthly}
                    </Typography>
                    <Typography
                      variant={'subtitle1'}
                      color={'text.secondary'}
                      fontWeight={700}
                    >
                      {pricingOption === 'annual' ? '/anno' : '/mese'}
                    </Typography>
                  </Box>
                  <Grid container spacing={1}>
                    {item.features.map((feature, j) => (
                      <Grid item xs={12} key={j}>
                        <Box
                          component={ListItem}
                          disableGutters
                          width={'auto'}
                          padding={0}
                        >
                          <Box
                            component={ListItemAvatar}
                            minWidth={'auto !important'}
                            marginRight={2}
                          >
                            <Box
                              component={Avatar}
                              bgcolor={blue[500]}
                              width={20}
                              height={20}
                            >
                              <svg
                                width={12}
                                height={12}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </Box>
                          </Box>
                          <ListItemText primary={feature} />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
                <Box flexGrow={1} />
                <CardActions sx={{ justifyContent: 'flex-end', padding: 4 }}>
                  <Button size={'large'} variant={'contained'} onClick={() => navigate('/contact')}>
                    scopri di più
                  </Button>
                </CardActions>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Main;
