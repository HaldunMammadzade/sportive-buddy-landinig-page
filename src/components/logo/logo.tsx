import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick}
    sx={{
      '& img': { width: { xs: 145, md: 160 }, height: 'auto' },
    }}
  >
    <img src="/images/logo-sportive.svg" alt="Logo" />
  </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
