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
import ReactCurvedText from 'react-curved-text'
import HomeVideo from './video'
import Slider, { Settings } from 'react-slick'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme, styled } from '@mui/material/styles'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'

interface Exp {
    label: string
    value: string
}

interface ExpItemProps {
    item: Exp
}
interface SliderArrowArrow {
    onClick?: () => void
    type: 'next' | 'prev'
    className?: 'string'
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
    const { onClick, type, className } = props
    return (
        <IconButton
            sx={{
                backgroundColor: 'background.paper',
                color: 'primary.main',
                '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
                bottom: '-28px !important',
                left: 'unset !important',
                right: type === 'prev' ? '60px !important' : '0 !important',
                zIndex: 10,
                boxShadow: 1,
            }}
            disableRipple
            color="inherit"
            onClick={onClick}
            className={className}
        >
            {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
        </IconButton>
    )
}

const svgMarkup = `
    <svg viewBox="0 0 500 500">
      <path
        id="curve"
        fill="transparent"
        d="M73.2,148.6c4-6.1,10.5-99.8,160.6-80.6c111.3,1.2,140.8,90.3,140.1,97"
      />
      <text width="500"  >
        <textPath xlink:href="#curve">
          Discover your Sportive Buddy
        </textPath>
      </text>
    </svg>
  `

const StyledDots = styled('ul')(({ theme }) => ({
    '&.slick-dots': {
        position: 'absolute',
        left: 0,
        bottom: -20,
        paddingLeft: theme.spacing(1),
        textAlign: 'left',
        '& li': {
            marginRight: theme.spacing(2),
            '&.slick-active>div': {
                backgroundColor: theme.palette.primary.main,
            },
        },
    },
}))


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
        const handleVideoClick = () => {
            if (!isVideoPlaying) {
                setVideoPlaying(true);
                if (videoRef.current) {
                    videoRef.current.play();
                }
            }
        };
        const { breakpoints } = useTheme()
        const matchMobileView = useMediaQuery(breakpoints.down('md'))
        const isMobile = useMediaQuery(breakpoints.down('sm'));
        const sliderConfig: Settings = {
            infinite: true,
            // autoplay: true,
            speed: 300,
            slidesToShow: matchMobileView ? 1 : 4,
            slidesToScroll: 1,
            prevArrow: <SliderArrow type="prev" />,
            nextArrow: <SliderArrow type="next" />,
            dots: true,
            appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
            customPaging: () => (
                <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
            ),
        }

        return (
            <Box
                id="hero"
                sx={{
                    backgroundColor:
                        'background.paper',
                    overflow:
                        'hidden',
                    position:
                        'relative',
                    // pt: 4,
                    pb: {
                        xs: 8,
                        md: 10,
                    },
                }}
            >

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
                        backgroundColor: "white"
                    }}

                    className='sc'
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
                            src="/images/home-screen.png"
                            width={
                                500
                            }
                            height={
                                550
                            }
                            alt="img"

                        />
                    </Box>
                    <Box
                        position={
                            'absolute'
                        }
                        bottom={
                            '-42rem'
                        }
                        right={
                            '-400px'
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
                {!isMobile && (
                    <video
                        ref={videoRef}
                        width="100%"
                        height="750px"
                        style={{ objectFit: 'cover' }}
                        preload="auto"
                        autoPlay
                        muted
                        loop
                    >
                        <source src="/video/v.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}

                <Box
                    color={
                        'white'
                    }
                    fontWeight={
                        '900'
                    }
                    fontSize={{
                        md: '55px',
                        base: '30px',
                    }}
                    position={
                        'absolute'
                    }
                    top={
                        '100px'
                    }
                    left={
                        '70px'
                    }
                    className="main-text main-slogan"
                >
                    {' '}
                    Turn
                    Solo
                    Workouts{' '}
                    <br />
                    Into
                    Shared
                    Victories
                </Box>

                <Container maxWidth="xl">
                    <Slider {...sliderConfig}>

                        <Box
                            marginY={
                                '50px'
                            }
                            textAlign={
                                'center'
                            }
                            className="sc-main"
                        >
                            <Box>
                                {' '}
                                <Image
                                    src="/images/icons/img1.png"
                                    objectFit="cover"
                                    width={
                                        325
                                    }
                                    height={
                                        650
                                    }
                                    alt="img"
                                />
                            </Box>

                            <Box
                                fontSize={
                                    '19px'
                                }
                                marginTop={
                                    '20px'
                                }
                                fontWeight={
                                    'bold'
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
                                '50px'
                            }
                            textAlign={
                                'center'
                            }
                            className="sc-main"
                        >
                            <Box>
                                {' '}
                                <Image
                                    src="/images/icons/img2.png"
                                    objectFit="cover"
                                    width={
                                        330
                                    }
                                    height={
                                        650
                                    }
                                    alt="img"
                                />
                            </Box>

                            <Box
                                fontSize={
                                    '19px'
                                }
                                marginTop={
                                    '20px'
                                }
                                fontWeight={
                                    'bold'
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
                                '50px'
                            }
                            textAlign={
                                'center'
                            }
                            className="sc-main"
                        >
                            <Box>
                                {' '}
                                <Image
                                    src="/images/icons/img3.png"
                                    objectFit="cover"
                                    width={
                                        330
                                    }
                                    height={
                                        650
                                    }
                                    alt="img"
                                />
                            </Box>

                            <Box
                                fontSize={
                                    '19px'
                                }
                                marginTop={
                                    '20px'
                                }
                                fontWeight={
                                    'bold'
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
                                '50px'
                            }
                            textAlign={
                                'center'
                            }
                            className="sc-main"
                        >
                            <Box>
                                {' '}
                                <Image
                                    src="/images/icons/img4.png"
                                    objectFit="cover"
                                    width={
                                        330
                                    }
                                    height={
                                        650
                                    }
                                    alt="img"
                                />
                            </Box>

                            <Box
                                fontSize={
                                    '19px'
                                }
                                marginTop={
                                    '20px'
                                }
                                fontWeight={
                                    'bold'
                                }
                            >
                                Your
                                go-to
                                for
                                sports
                                discussions
                            </Box>
                        </Box>
                    </Slider>

                    {/* Experience */}

                </Container>
            </Box>
        )
    }

export default HomeHero
