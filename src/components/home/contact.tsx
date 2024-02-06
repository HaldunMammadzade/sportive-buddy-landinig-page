import React, {
  FC, useState
} from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import { TextareaAutosize } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeContact: FC =
  () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setMessage(event.target.value);
    };

    const handleSendClick = () => {
      const data = {
        email: email,
        message: message,
      };

      fetch('https://sportivebuddy.com/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(responseData => {
          toast.success('Your message sent', { position: toast.POSITION.TOP_CENTER });

          console.log(responseData);
        })
        .catch(error => {

          console.error('Error:', error);
        });
    };


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
                md: 8,
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
              Contact
              Us
            </Typography>
            <Typography
              sx={{
                mb: 6,
              }}
            ></Typography>

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
                  md: 560,
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
                    md: 3,
                  },
                }}
                type="email"
                placeholder="Enter your Email Address"
                onChange={handleEmailChange}
              />
            </Box>

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
                  md: 560,
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
                    md: 3,
                  },
                }}
                placeholder="Enter your Message"
                onChange={handleMessageChange}
              />
            </Box>

            <Box>
              <StyledButton
                disableHoverEffect
                size="large"
                onClick={handleSendClick}
              >
                Send
              </StyledButton>
            </Box>

            <ToastContainer position={toast.POSITION.TOP_CENTER} />
          </Box>
        </Container>
      </Box>
    )
  }

export default HomeContact
