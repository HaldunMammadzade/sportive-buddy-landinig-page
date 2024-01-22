import React, {
  FC,
} from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { SocialLink } from '@/interfaces/social-link'

export const socialLinks: SocialLink[] =
  [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/profile.php?id=61553626443725',
      icon: '/images/icons/fb.svg',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/sportivebuddy/',
      icon: '/images/icons/instagram.svg',
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/company/sportivebuddy',
      icon: '/images/icons/linkedin.svg',
    },
  ]

interface SocialLinkItemProps {
  item: SocialLink
}

const SocialLinkItem: FC<
  SocialLinkItemProps
> = ({
  item,
}) => (
  <Box
    component="li"
    sx={{
      display:
        'inline-block',
      color:
        'primary.contrastText',
      mr: 0.5,
    }}
  >
    <Link
      target="_blank"
      sx={{
        lineHeight: 0,
        display:
          'flex',
        alignItems:
          'center',
        justifyContent:
          'center',
        width: 46,
        height: 46,
        borderRadius:
          '50%',
        color:
          'inherit',

        '& img':
          {
            fill: 'currentColor',
            width: 41,
            height:
              'auto',
          },
      }}
      href={
        item.link
      }
    >
      {/* eslint-disable-next-line */}
      <img
        src={
          item.icon
        }
        alt={
          item.name +
          'icon'
        }
      />
    </Link>
  </Box>
)

// default
const SocialLinks: FC =
  () => {
    return (
      <Box
        sx={{
          ml: -1,
        }}
      >
        <Box
          component="ul"
          sx={{
            m: 0,
            p: 0,
            lineHeight: 0,
            borderRadius: 3,
            listStyle:
              'none',
          }}
        >
          {socialLinks.map(
            (
              item
            ) => {
              return (
                <SocialLinkItem
                  key={
                    item.name
                  }
                  item={
                    item
                  }
                />
              )
            }
          )}
        </Box>
      </Box>
    )
  }

export default SocialLinks
