import React, {
  FC,
} from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { Mentor } from '@/interfaces/mentor'

interface Props {
  item: Mentor
}

const MentorCardItem: FC<
  Props
> = ({
  item,
}) => {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 5,
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor:
            'background.paper',
          borderRadius: 4,

          transition:
            (
              theme
            ) =>
              theme.transitions.create(
                [
                  'box-shadow',
                ]
              ),
          '&:hover':
            {
              boxShadow: 2,
            },
          height:
            '550px',
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow:
              'hidden',
            borderRadius: 3,
            // height: 400,
            mb: 2,
          }}
        >
          <Image
            src={
              item.photo as string
            }
            width={
              570
            }
            objectFit="cover"
            height={
              700
            }
            alt={
              'Member ' +
              item.id
            }
          />
        </Box>
        <Box
          sx={{
            mb: 2,
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            sx={{
              fontSize:
                '1.4rem',
            }}
          >
            {
              item.name
            }
          </Typography>
          <Typography
            sx={{
              mb: 2,
              color:
                'text.secondary',
            }}
          >
            {
              item.category
            }
          </Typography>
          <Typography
            sx={{
              mb: 2,
              color:
                'text.black',
            }}
            variant="subtitle1"
          >
            {
              item.description
            }
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
export default MentorCardItem
