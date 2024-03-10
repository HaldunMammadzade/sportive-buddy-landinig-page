import React, { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import axios from 'axios';



const HomeNewsLetter: FC =
  () => {
    const [turkeyLocation, setTurkeyLocation] = useState<string | null>(null);
    const [email, setEmail] = useState('');
    const [cong, setCong] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');


    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };



    const handleSnackbarClose = () => {
      setSnackbarOpen(false);
    };

    const handleSendClick = async () => {
      const data = {
        email: email,
      };

      try {
        const response = await axios.post('https://sportivebuddy.com/api/notify', data);

        if (response.status === 200) {
          setCong("Your email sent !");
          setSnackbarMessage("We received your email!");
          setSnackbarOpen(true);
          console.log(response.data);
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        console.error('Error:', error);
        setSnackbarMessage("An error occurred while sending your message.");
        setSnackbarOpen(true);
      }
    };


    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios('https://sportivebuddy.com/api/location');
          if (response) {
            console.log('Success');
            setTurkeyLocation(response.data.location.name)
          } else {
            console.error('Error');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

      fetchData();
    }, []);

    return (
      <Box
        sx={{
          backgroundColor:
            'background.paper',
          py: {
            xs: 8,
            md: 10,
          },
        }}
      >
        <Container>
          <Box
            sx={{
              backgroundColor:
                'secondary.main',
              borderRadius: 10,
              py: {
                xs: 4,
                md: 10,
              },
              px: {
                xs: 4,
                md: 4,
              },
              textAlign:
                'center',
            }}
          >
            <Typography
              variant="h1"
              component="h2"
              sx={{
                mb: 1,
                fontSize:
                {
                  xs: 32,
                  md: 42,
                },
              }}
            >
              {
                cong.length ? cong : 'Notify me'}

            </Typography>
            <Typography
              sx={{
                mb: 6,
              }}
            >

              {turkeyLocation && `Want
              our
              app
              in
              ${turkeyLocation}
              Share
              with
              friends,
              sign
              up
              for
              the
              wish
              list.
              Your
              support
              could
              make
              it
              a
              reality!`}

            </Typography>


            <Box
              sx={{
                display:
                  'flex',
                alignItems:
                  'center',
                flexDirection:
                {
                  xs: 'column',
                  md: 'row',
                },
                justifyContent:
                  'space-around',
                width:
                {
                  xs: '100%',
                },
                mx: 'auto',
              }}
            >
              <InputBase
                sx={{
                  backgroundColor:
                    'background.paper',
                  borderRadius: 3,
                  width:
                    '100%',
                  height: 48,
                  px: 2,
                  mr: {
                    xs: 0,
                    md: 3,
                  },
                  mb: {
                    xs: 2,
                    md: 0,
                  },
                }}
                placeholder="Enter your Email Address"
                onChange={handleEmailChange}
              />
              <Box>
                <StyledButton
                  disableHoverEffect
                  size="large"
                  onClick={handleSendClick}
                >
                  Send
                </StyledButton>
              </Box>
            </Box>
          </Box>
        </Container>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity={snackbarMessage.includes('Error') ? 'error' : 'success'}
            sx={{ width: '100%' }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    )
  }

export default HomeNewsLetter
