import React, {
  FC,
  useState,
  useRef,
} from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import ReactCurvedText from 'react-curved-text'
import HomeVideo from './video'
interface Exp {
  label: string
  value: string
}
interface ExpItemProps {
  item: Exp
}

const exps: Array<Exp> =
  [
    {
      label:
        'Respondents Survey',
      value:
        '142',
    },
    {
      label:
        'Used such apps',
      value:
        '7 %',
    },
    {
      label:
        'Would like to use',
      value:
        '93 %',
    },
  ]

const ExpItem: FC<
  ExpItemProps
> = ({
  item,
}) => {
  const {
    value,
    label,
  } = item
  return (
    <Box
      sx={{
        textAlign:
          'center',
        mb: {
          xs: 1,
          md: 0,
        },
      }}
    >
      <Typography
        sx={{
          color:
            'secondary.main',
          mb: {
            xs: 1,
            md: 2,
          },
          fontSize:
            {
              xs: 34,
              md: 44,
            },
          fontWeight:
            'bold',
        }}
      >
        {
          value
        }
      </Typography>
      <Typography
        color="text.secondary"
        variant="h5"
      >
        {
          label
        }
      </Typography>
    </Box>
  )
}

const HomeHero: FC =
  () => {
    const [
      isVideoPlaying,
      setVideoPlaying,
    ] =
      useState(
        false
      )
    const videoRef =
      useRef<HTMLVideoElement>(
        null
      )

    return (
      <Box
        id="hero"
        sx={{
          backgroundColor:
            'background.paper',
          position:
            'relative',
          // pt: 4,
          pb: {
            xs: 8,
            md: 10,
          },
        }}
      >
        <video
          ref={
            videoRef
          }
          width="100%"
          height="auto"
          preload="auto"
          autoPlay
          muted
        >
          <source
            src="/video/v.mp4"
            type="video/mp4"
          />
          Your
          browser
          does
          not
          support
          the
          video
          tag.
        </video>

        <Box
          position={
            'absolute'
          }
          top={
            '20px'
          }
          left={
            '20px'
          }
          className="circual-text"
        >
          <ReactCurvedText
            width={
              400
            }
            height={
              400
            }
            cx={
              150
            }
            cy={
              150
            }
            rx={
              100
            }
            ry={
              100
            }
            startOffset={
              50
            }
            reversed={
              true
            }
            text="Discover your Sportive Buddy"
            textProps={{
              style:
                {
                  fontSize: 30,
                  color:
                    'red',
                },
            }}
            textPathProps={
              null
            }
            tspanProps={
              null
            }
            ellipseProps={
              null
            }
            svgProps={
              null
            }
          />
        </Box>

        <Container maxWidth="lg">
          <Grid
            item
            xs={
              12
            }
            md={
              5
            }
            sx={{
              position:
                'absolute',
              top: '40px',
              right:
                '250px',
            }}
          >
            <Box>
              <Image
                objectFit="contain"
                src="/images/phone2.png"
                width={
                  250
                }
                height={
                  800
                }
                alt="img"
              />
            </Box>
            <Box
              position={
                'absolute'
              }
              top={
                '-30px'
              }
              right={
                '-190px'
              }
            >
              <Image
                objectFit="contain"
                src="/images/screen.png"
                width={
                  250
                }
                height={
                  500
                }
                alt="img"
              />
            </Box>
          </Grid>

          {/* Experience */}
          <Box
            sx={{
              boxShadow: 2,
              py: 2,
              px: 7,
              borderRadius: 4,
              mt: 4,
            }}
          >
            <Grid
              container
              spacing={
                2
              }
            >
              {exps.map(
                (
                  item
                ) => (
                  <Grid
                    key={
                      item.value
                    }
                    item
                    xs={
                      12
                    }
                    md={
                      4
                    }
                  >
                    <ExpItem
                      item={
                        item
                      }
                    />
                  </Grid>
                )
              )}
            </Grid>
          </Box>
        </Container>
      </Box>
    )
  }

export default HomeHero
