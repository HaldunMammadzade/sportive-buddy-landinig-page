import React, {
  FC, useState
} from 'react'
import Box from '@mui/material/Box'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import { navigations } from '../navigation/navigation.data'
interface NavigationProps {
  onData: (childData: boolean) => void;
}

interface NavigationProps {
  onData: (data: boolean) => void;
}

// @ts-ignore
const FooterNavigation: React.FC<NavigationProps> = ({ onData }) => {

  const [childData, setChildData] = useState<any>(null);

  const sendDataToParent = () => {
    onData(childData);
  };
  return (
    <Box
      sx={{
        display:
          'flex',
        flexDirection:
        {
          xs: 'column',
          md: 'column',
        },
      }}
    >
      {navigations.map(
        ({
          path: destination,
          label,
        }) => (
          <Box
            component={
              ScrollLink
            }
            key={
              destination
            }
            activeClass="current"
            to={
              destination
            }
            spy={
              true
            }
            smooth={
              true
            }
            onClick={
              sendDataToParent
            }
            duration={
              350
            }
            sx={{
              position:
                'relative',
              color:
                'black',
              cursor:
                'pointer',
              fontWeight: 600,
              display:
                'block',
              alignItems:
                'center',
              justifyContent:
                'center',
              px: {
                xs: 0,
                md: 3,
              },
              mb: {
                xs: 3,
                md: 3,
              },
              fontSize:
              {
                xs: '0.9rem',
                md: '1.1rem',
              },
              ...(destination ===
                '/' && {
                color:
                  'primary.main',
              }),

              '& > div':
              {
                display:
                  'none',
              },

              '&.current>div':
              {
                display:
                  'block',
              },

              '&:hover':
              {
                color:
                  'black',
                '&>div':
                {
                  display:
                    'block',
                },
              },
            }}
          >
            <Box
              sx={{
                position:
                  'absolute',
                top: 12,
                transform:
                  'rotate(3deg)',
                '& img':
                {
                  width: 44,
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
            {
              label
            }
          </Box>
        )
      )}
    </Box>
  )
}

export default FooterNavigation


