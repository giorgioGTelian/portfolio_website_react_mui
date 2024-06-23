/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const apiEmail = process.env.REACT_APP_FORMSPREE_URL;

const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, 'Inserisci un nome valido')
    .max(50, 'Inserisci un nome valido')
    .required('Per favore specifica il tuo nome'),
  lastName: yup
    .string()
    .trim()
    .min(2, 'Inserisci un cognome valido')
    .max(50, 'Inserisci un cognome valido')
    .required('Per favore specifica il tuo cognome'),
  email: yup
    .string()
    .trim()
    .email('Inserisci un indirizzo email valido')
    .required('Email è richiesta.'),
  message: yup
    .string()
    .trim()
    .required('Per favore specifica il tuo messaggio'),
});

const Contact = () => {
  const theme = useTheme();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  const resetForm = () => {
    formik.resetForm();
  };

  const onSubmit = (values) => {
    fetch(apiEmail, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then(data => {
      console.log(data);
      resetForm();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box maxWidth={600} margin={'0 auto'}>
      <Box marginBottom={4}>
        <Typography
          variant={'h3'}
          sx={{ fontWeight: 700 }}
          align={'center'}
          gutterBottom
        >
          Contattami
        </Typography>
        <Typography color="text.secondary" align={'center'}>
          cerco sempre un confronto costruttivo e sono disponibile a rispondere a tutte le tue domande.
        </Typography>
      </Box>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ height: 54 }}
                label="Nome"
                variant="outlined"
                color="primary"
                size="medium"
                name="firstName"
                fullWidth
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ height: 54 }}
                label="Cognome"
                variant="outlined"
                color="primary"
                size="medium"
                name="lastName"
                fullWidth
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ height: 54 }}
                label="Email"
                type="email"
                variant="outlined"
                color="primary"
                size="medium"
                name="email"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Messaggio"
                multiline
                rows={6}
                variant="outlined"
                color="primary"
                size="medium"
                name="message"
                fullWidth
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
            </Grid>
            <Grid item container justifyContent={'center'} xs={12}>
              <Button
                sx={{ height: 54, minWidth: 150 }}
                variant="contained"
                color="primary"
                size="medium"
                type="submit"
              >
                Invia
              </Button>
            </Grid>
            <Grid item container justifyContent={'center'} xs={12}>
              <Typography color="text.secondary">
                cercherò di risponderti entro 1-2 giorni lavorativi.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item container justifyContent={'center'} xs={12}>
              <Box>
                <Typography component="p" variant="body2" align="left">
                  Cliccando Invia accetti la nostra {' '}
                  <Box
                    component="a"
                    href=""
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Privacy Policy
                  </Box>
                  ,{' '}
                  <Box
                    component="a"
                    href=""
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Data Policy
                  </Box>{' '}
                  e{' '}
                  <Box
                    component="a"
                    href=""
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Cookie Policy
                  </Box>
                  .
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
