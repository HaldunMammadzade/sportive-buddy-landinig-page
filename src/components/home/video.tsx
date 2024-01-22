import React, {
  FC,
  useRef,
} from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


const HomeVideo: FC =
  () => {
    return (
      <Box
        sx={{
          textAlign:
            {
              xs: 'center',
              md: 'left',
            },
          height:
            '100%',
          display:
            'flex',
          flexDirection:
            'column',
          justifyContent:
            'center',
        }}
        className="circual-text"
      >
        <Box
          sx={{
            mb: 3,
          }}
        >
          <Typography
            component="h2"
            sx={{
              position:
                'relative',
              fontSize:
                {
                  xs: 40,
                  md: 72,
                },
              letterSpacing: 1.5,
              fontWeight:
                'bold',
              lineHeight: 1.3,
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
              Turn{' '}
              <Box
                sx={{
                  position:
                    'absolute',
                  top: {
                    xs: 24,
                    md: 34,
                  },
                  left: 2,
                  transform:
                    'rotate(3deg)',
                  '& img':
                    {
                      width:
                        {
                          xs: 146,
                          md: 210,
                        },
                      height:
                        'auto',
                    },
                }}
              >
                {/* eslint-disable-next-line */}
                <img
                  src="/images/headline-curve.svg"
                  alt="Headline curve"
                />
              </Box>
            </Typography>
            solo{' '}
            <Typography
              component="span"
              sx={{
                fontSize:
                  'inherit',
                fontWeight:
                  'inherit',
                position:
                  'relative',
                '& svg':
                  {
                    position:
                      'absolute',
                    top: -16,
                    right:
                      -21,
                    width:
                      {
                        xs: 22,
                        md: 30,
                      },
                    height:
                      'auto',
                  },
              }}
            >
              workouts
              <svg
                version="1.1"
                viewBox="0 0 3183 3072"
              >
                <g id="Layer_x0020_1">
                  <path
                    fill="#C6DD7D"
                    d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                  />
                  <path
                    fill="#C6DD7D"
                    d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                  />
                  <path
                    fill="#C6DD7D"
                    d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                  />
                </g>
              </svg>
            </Typography>{' '}
            <br />
            into
            shared
            victories
          </Typography>
        </Box>
      </Box>
    )
  }

export default HomeVideo
