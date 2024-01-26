import React, {
  FC,
  useState,
  useRef,
} from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Link from 'next/link'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
// import ReactCurvedText from 'react-curved-text'
import HomeVideo from './video'
interface Exp {
  label: string
  value: string
}
interface ExpItemProps {
  item: Exp
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
          height="500px"
          style={{
            objectFit:
              'cover',
          }}
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

        <Container maxWidth="xl">
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
            <Box
              position={
                'absolute'
              }
              top={
                '20px'
              }
              right={
                '-300px'
              }
              width={
                '500px'
              }
              height={
                '350px'
              }
            >
              <Image
                objectFit="contain"
                src="/images/screen.png"
                width={
                  500
                }
                height={
                  350
                }
                alt="img"
              />
            </Box>
            <Box
              position={
                'absolute'
              }
              bottom={
                '-27rem'
              }
              right={
                '-420px'
              }
              zIndex={
                10
              }
              display={
                'flex'
              }
              width={
                '500px'
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
          </Grid>

          {/* Experience */}
          <Box
            sx={{
              // boxShadow: 2,
              py: 2,
              px: 2,
              borderRadius: 4,
              mt: 4,
              display:
                'flex',
              flexWrap:
                'wrap',
              justifyContent:
                'space-around',
            }}
          >
            <Box
              marginY={
                '20px'
              }
            >
              <Box>
                {' '}
                <Image
                  src="/images/icons/img1.png"
                  objectFit="contain"
                  width={
                    200
                  }
                  height={
                    300
                  }
                  alt="img"
                />
              </Box>

              <Box
                fontSize={
                  '16px'
                }
                marginTop={
                  '20px'
                }
              >
                Customize
                for
                your
                convenience
              </Box>
            </Box>

            <Box
              marginY={
                '20px'
              }
            >
              <Box>
                {' '}
                <Image
                  src="/images/icons/img2.png"
                  objectFit="contain"
                  width={
                    200
                  }
                  height={
                    300
                  }
                  alt="img"
                />
              </Box>

              <Box
                fontSize={
                  '16px'
                }
                marginTop={
                  '20px'
                }
              >
                Enjoy
                fitness
                with
                your
                ideal
                squad!
              </Box>
            </Box>

            <Box
              marginY={
                '20px'
              }
            >
              <Box>
                {' '}
                <Image
                  src="/images/icons/img3.png"
                  objectFit="contain"
                  width={
                    200
                  }
                  height={
                    300
                  }
                  alt="img"
                />
              </Box>

              <Box
                fontSize={
                  '16px'
                }
                marginTop={
                  '20px'
                }
              >
                Chat,
                Schedule,
                Enjoy
                Sport!
              </Box>
            </Box>

            <Box
              marginY={
                '20px'
              }
            >
              <Box>
                {' '}
                <Image
                  src="/images/icons/img4.png"
                  objectFit="contain"
                  width={
                    200
                  }
                  height={
                    300
                  }
                  alt="img"
                />
              </Box>

              <Box
                fontSize={
                  '16px'
                }
                marginTop={
                  '20px'
                }
              >
                Your
                go-to
                for
                sports
                discussions
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    )
  }

export default HomeHero
