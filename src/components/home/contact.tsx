import React, {
  FC,
} from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'

const HomeContact: FC =
  () => {
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
                placeholder="Enter your Full Name"
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
                type="email"
                placeholder="Enter your Email Address"
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
              />
            </Box>

            <Box>
              <StyledButton
                disableHoverEffect
                size="large"
              >
                Send
              </StyledButton>
            </Box>
          </Box>
        </Container>
      </Box>
    )
  }

export default HomeContact
