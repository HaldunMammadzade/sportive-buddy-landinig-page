import React, {
  FC,
} from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'
import { data } from './feature.data'

interface LinearProgressProps {
  order: number
}

const BorderLinearProgress =
  styled(
    LinearProgress,
    {
      shouldForwardProp:
        (
          prop
        ) =>
          prop !==
          'color',
    }
  )<LinearProgressProps>(
    ({
      theme,
      order,
    }) => ({
      height: 6,
      borderRadius: 5,
      [`&.${linearProgressClasses.colorPrimary}`]:
        {
          backgroundColor:
            theme
              .palette
              .grey[200],
        },
      [`& .${linearProgressClasses.bar}`]:
        {
          borderRadius: 5,
          ...(order ===
            1 && {
            backgroundColor:
              '#f303ff',
          }),
          ...(order ===
            2 && {
            backgroundColor:
              '#26e8bd',
          }),
          ...(order ===
            3 && {
            backgroundColor:
              '#0063ff',
          }),
        },
    })
  )

const HomeFeature: FC =
  () => {
    return (
      <Box
        id="feature"
        sx={{
          py: {
            xs: 10,
            md: 10,
          },
          backgroundColor:
            'background.paper',
        }}
      >
        <Container>
          <Box
            display={
              'flex'
            }
            flexDirection={
              'column'
            }
            justifyContent={
              'center'
            }
          >
            <Box
              sx={{
                position:
                  'relative',
              }}
              textAlign={
                'center'
              }
              fontSize={
                '22px'
              }
              fontWeight={
                'bold'
              }
            >
              "World's
              safest
              sport
              community
              app"
            </Box>

            <Box
              display={
                'flex'
              }
              justifyContent={
                'center'
              }
            >
              <Link href="/">
                <Image
                  objectFit="cover"
                  src="/images/icons/apple.png"
                  width={
                    130
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
                    140
                  }
                  height={
                    50
                  }
                  alt="img"
                />
              </Link>
            </Box>
          </Box>

          <Grid
            container
            marginY={
              '70px'
            }
            spacing={
              3
            }
          >
            <Grid
              item
              xs={
                12
              }
              md={
                6
              }
            >
              <Typography
                component="h2"
                sx={{
                  position:
                    'relative',
                  fontSize:
                    {
                      xs: 40,
                      md: 50,
                    },
                  ml: {
                    xs: 0,
                    md: 4,
                  },
                  mt: 2,
                  mb: 3,
                  lineHeight: 1,
                  fontWeight:
                    'bold',
                }}
              >
                About{' '}
                <Typography
                  component="mark"
                  sx={{
                    position:
                      'relative',
                    color:
                      'primary.main',
                    fontSize:
                      'inherit',
                    fontWeight:
                      'inherit',
                    backgroundColor:
                      'unset',
                  }}
                >
                  Us{' '}
                  <br />
                  <Box
                    sx={{
                      position:
                        'absolute',
                      top: {
                        xs: 20,
                        md: 28,
                      },
                      transform:
                        'rotate(3deg)',
                      left: 2,
                      '& img':
                        {
                          width:
                            {
                              xs: 140,
                              md: 175,
                            },
                          height:
                            'auto',
                        },
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/headline-curve.svg"
                      alt="Headline curve"
                    />
                  </Box>
                </Typography>
              </Typography>

              <Typography
                sx={{
                  color:
                    'text.secondary',
                  mb: 2,
                  ml: {
                    xs: 0,
                    md: 4,
                  },
                  fontSize:
                    '1rem',
                }}
              >
                We
                are
                a
                spirited
                team
                of
                five
                individuals
                who
                share
                a
                common
                vision
                -
                to
                create
                the
                safest
                sport
                community
                for
                everyone,
                and
                that's
                how
                SportiveBuddy
                was
                born.
              </Typography>
            </Grid>

            <Grid
              item
              xs={
                12
              }
              md={
                6
              }
              alignItems={
                'center'
              }
            >
              <Box
                sx={{
                  position:
                    'relative',
                }}
              >
                <Image
                  src="/images/image5.jpeg"
                  width={
                    650
                  }
                  height={
                    450
                  }
                  objectFit="cover"
                  quality={
                    97
                  }
                  alt="Feature img"
                  className="about-img"
                />
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            marginTop={
              '50px'
            }
            spacing={
              3
            }
            alignItems={
              'center'
            }
          >
            <Grid
              item
              xs={
                12
              }
              md={
                6
              }
              alignItems={
                'center'
              }
            >
              <Box
                sx={{
                  position:
                    'relative',
                }}
              >
                <Image
                  src="/images/image6.jpeg"
                  width={
                    650
                  }
                  height={
                    500
                  }
                  quality={
                    97
                  }
                  alt="Feature img"
                  className="about-img"
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={
                12
              }
              md={
                6
              }
            >
              <Typography
                component="h2"
                sx={{
                  position:
                    'relative',
                  fontSize:
                    {
                      xs: 40,
                      md: 50,
                    },
                  ml: {
                    xs: 0,
                    md: 4,
                  },
                  mt: 2,
                  mb: 3,
                  lineHeight: 1,
                  fontWeight:
                    'bold',
                }}
              >
                <Typography
                  component="mark"
                  sx={{
                    position:
                      'relative',
                    color:
                      'primary.main',
                    fontSize:
                      'inherit',
                    fontWeight:
                      'inherit',
                    backgroundColor:
                      'unset',
                  }}
                >
                  Values{' '}
                  <br />
                  <Box
                    sx={{
                      position:
                        'absolute',
                      top: {
                        xs: 20,
                        md: 28,
                      },
                      transform:
                        'rotate(3deg)',
                      left: 2,
                      '& img':
                        {
                          width:
                            {
                              xs: 140,
                              md: 175,
                            },
                          height:
                            'auto',
                        },
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/headline-curve.svg"
                      alt="Headline curve"
                    />
                  </Box>
                </Typography>
              </Typography>

              <Grid
                container
                spacing={
                  2
                }
                sx={{
                  ml: {
                    xs: 0,
                    md: 2,
                  },
                }}
              >
                {data.map(
                  (
                    {
                      title,
                      description,
                      icon,
                    },
                    index
                  ) => (
                    <Grid
                      key={String(
                        index
                      )}
                      item
                      xs={
                        12
                      }
                      md={
                        10
                      }
                    >
                      <Box
                        sx={{
                          px: 2,
                          py: 1.5,
                          boxShadow: 1,
                          borderRadius: 4,
                          display:
                            'flex',
                          alignItems:
                            'center',
                        }}
                      >
                        <Box
                          sx={{
                            mr: 1,
                            backgroundColor:
                              'primary.main',
                            borderRadius:
                              '50%',
                            height: 36,
                            width: 36,
                            display:
                              'flex',
                            alignItems:
                              'center',
                            justifyContent:
                              'center',
                            color:
                              'primary.contrastText',
                            '& svg':
                              {
                                fontSize: 20,
                              },
                          }}
                        >
                          {
                            icon
                          }
                        </Box>
                        <Box
                          sx={{
                            display:
                              'flex',
                            flex: 1,
                            flexDirection:
                              'column',
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize:
                                '1.rem',
                              mb: 1,
                              color:
                                'secondary.main',
                            }}
                          >
                            {
                              title
                            }
                          </Typography>
                          <Typography
                            sx={{
                              lineHeight: 1.3,
                              color:
                                'text.secondary',
                              fontSize:
                                '1rem',
                            }}
                            variant="subtitle1"
                          >
                            {
                              description
                            }
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  )
                )}
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            marginY={
              '70px'
            }
            spacing={
              3
            }
          >
            <Grid
              item
              xs={
                12
              }
              md={
                6
              }
            >
              <Typography
                component="h2"
                sx={{
                  position:
                    'relative',
                  fontSize:
                    {
                      xs: 40,
                      md: 50,
                    },
                  ml: {
                    xs: 0,
                    md: 4,
                  },
                  mt: 2,
                  mb: 3,
                  lineHeight: 1,
                  fontWeight:
                    'bold',
                }}
              >
                Our{' '}
                <Typography
                  component="mark"
                  sx={{
                    position:
                      'relative',
                    color:
                      'primary.main',
                    fontSize:
                      'inherit',
                    fontWeight:
                      'inherit',
                    backgroundColor:
                      'unset',
                  }}
                >
                  Mission{' '}
                  <br />
                  <Box
                    sx={{
                      position:
                        'absolute',
                      top: {
                        xs: 20,
                        md: 28,
                      },
                      transform:
                        'rotate(3deg)',
                      left: 2,
                      '& img':
                        {
                          width:
                            {
                              xs: 140,
                              md: 175,
                            },
                          height:
                            'auto',
                        },
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/headline-curve.svg"
                      alt="Headline curve"
                    />
                  </Box>
                </Typography>
              </Typography>

              <Typography
                sx={{
                  color:
                    'text.secondary',
                  mb: 2,
                  ml: {
                    xs: 0,
                    md: 4,
                  },
                  fontSize:
                    '1rem',
                }}
              >
                At
                SportiveBuddy,
                our
                mission
                is
                to
                cultivate
                a
                thriving
                sports
                community
                that
                transcends
                boundaries,
                uniting
                individuals
                through
                their
                shared
                love
                for
                sports,
                competition,
                and
                personal
                growth.
                We
                are
                driven
                by
                the
                belief
                that
                sports
                have
                the
                power
                to
                inspire,
                connect,
                and
                transform
                lives.
              </Typography>
            </Grid>

            <Grid
              item
              xs={
                12
              }
              md={
                6
              }
              alignItems={
                'center'
              }
            >
              <Box
                sx={{
                  position:
                    'relative',
                }}
              >
                <Image
                  src="/images/image7.jpeg"
                  width={
                    650
                  }
                  height={
                    450
                  }
                  objectFit="cover"
                  quality={
                    97
                  }
                  alt="Feature img"
                  className="about-img"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    )
  }

export default HomeFeature
