import React, {
  ReactNode,
} from 'react'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'
import HandshakeIcon from '@mui/icons-material/Handshake'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import DiamondIcon from '@mui/icons-material/Diamond'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] =
  [
    {
      title:
        'Safe Community',
      description:
        'By prioritizing the safety of users through measures, a SportiveBuddy creates a trustworthy and secure environment, fostering a positive and enjoyable experience for all participants.',
      icon: (
        <NotificationsActiveIcon />
      ),
    },
    {
      title:
        'Positive Competition: ',
      description:
        'Encouraging users to issue friendly challenges to one another, fostering a sense of camaraderie and sportsmanship.',
      icon: (
        <HandshakeIcon />
      ),
    },
    {
      title:
        'Motivation and Goal Setting',
      description:
        'Essential components of SportiveBuddy that can enhance user engagement and satisfaction.',
      icon: (
        <EmojiEventsIcon />
      ),
    },
    {
      title:
        'Fair Play',
      description:
        'Ensuring fair play within a sports community is crucial to maintain a positive and enjoyable experience for all users.',
      icon: (
        <DiamondIcon />
      ),
    },
  ]
