import React, {
  FC, useState
} from 'react'
import Image from 'next/image'
import Button from '@mui/material/Button'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Logo } from '@/components/logo'
import {
  FooterNavigation,
  FooterSocialLinks,
} from '@/components/footer'



const Footer: FC =
  () => {
    const [
      visibleMenu,
      setVisibleMenu,
    ] =
      useState<boolean>(
        false
      )
    const handleChildData = (data: boolean) => {
      setVisibleMenu(
        !visibleMenu
      )
    };
    return (
      <Box
        component="footer"
        sx={{
          backgroundColor:
            'primary.main',
          py: {
            xs: 6,
            md: 10,
          },
          color:
            'primary.contrastText',
        }}
      >
        <Container>
          <Grid
            container
            spacing={
              1
            }
          >
            <Grid
              item
              xs={
                12
              }
              md={
                5
              }
            >
              <Box
                color={
                  'black'
                }
                sx={{
                  width:
                  {
                    xs: '100%',
                    md: 360,
                  },
                  mb: {
                    xs: 3,
                    md: 0,
                  },
                }}
              >
                <Logo />
                <Typography
                  variant="subtitle1"
                  sx={{
                    letterSpacing: 1,
                    my: 2,
                  }}
                >
                  SportiveBuddy stands as the world's safest and most enjoyable sports community application, seamlessly connecting enthusiasts across a diverse range of sports
                </Typography>
                <FooterSocialLinks />
                <div className="term"><Link href="/privacy"> Privacy and Policy</Link></div>
                <div className="term"><Link href="/terms">Terms and Conditions</Link></div>
              </Box>
            </Grid>

            <Grid
              item
              xs={
                12
              }
              md={
                4
              }
            >
              <FooterNavigation onData={handleChildData} />
            </Grid>

            <Grid
              item
              xs={
                12
              }
              md={
                3
              }
            >
              <Box
                display={
                  'flex'
                }

              >
                <Link href="/">
                  <Image
                    objectFit="cover"
                    src="/images/icons/apple.png"
                    width={
                      150
                    }
                    height={
                      50
                    }
                    alt="img"
                  />
                </Link>
                <Link href="/">
                  <Image
                    objectFit="cover"
                    src="/images/icons/android.png"
                    width={
                      170
                    }
                    height={
                      60
                    }
                    alt="img"
                  />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    )
  }

export default Footer
