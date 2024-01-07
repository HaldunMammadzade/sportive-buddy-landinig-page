import React, { ReactNode } from 'react'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import HandshakeIcon from '@mui/icons-material/Handshake';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DiamondIcon from '@mui/icons-material/Diamond';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Subscription',
    description: 'Discover New Hobbies',
    icon: <NotificationsActiveIcon />,
  },
  {
    title: 'Partnership',
    description: 'Referral for Sport Clubs',
    icon: <HandshakeIcon />,
  },
  {
    title: 'Comunity wide events',
    description: 'Gold, Silver, Bronze',
    icon: <EmojiEventsIcon />,
  },
  {
    title: 'Premium services',
    description: 'Exclusive User Experience',
    icon: <DiamondIcon />,
  },
]
