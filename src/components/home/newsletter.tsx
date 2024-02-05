import React, {
  FC,
} from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'

const HomeNewsLetter: FC =
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
              Notify
              me
            </Typography>
            <Typography
              sx={{
                mb: 6,
              }}
            >
              "Want
              our
              app
              in
              Turkey?
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
              reality!"
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
              />
              <Box>
                <StyledButton
                  disableHoverEffect
                  size="large"
                >
                  Send
                </StyledButton>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    )
  }

export default HomeNewsLetter
