import React, {
  FC,
} from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import IconButton, {
  iconButtonClasses,
} from '@mui/material/IconButton'
import ArrowForward from '@mui/icons-material/ArrowForward'
import { Course } from '@/interfaces/course'

interface Props {
  item: Course
}

const CourseCardItem: FC<
  Props
> = ({
  item,
}) => {
  // const imageUrl =
  //   item.banner
  return (
    <Box
      sx={{
        px: 1,
        py: 4,
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
              [`& .${iconButtonClasses.root}`]:
                {
                  backgroundColor:
                    'primary.main',
                  color:
                    'primary.contrastText',
                  boxShadow: 2,
                },
            },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow:
              'hidden',
            borderRadius: 3,
            mb: 2,
          }}
        >
          <img
            src={
              item?.banner
            }
            style={{
              width:
                '250px',
              height:
                '250px',
            }}
          />
        </Box>
        <Box
          sx={{
            mb: 2,
          }}
        >
          <Typography
            component="h2"
            variant="h5"
            sx={{
              mb: 1,
              height: 40,
              overflow:
                'hidden',
              fontSize:
                '1.2rem',
            }}
          >
            {
              item.title
            }
          </Typography>
          <Typography
            component="h5"
            variant="h6"
            sx={{
              height: 56,
              overflow:
                'hidden',
              fontSize:
                '1rem',
            }}
          >
            {
              item.desc
            }
          </Typography>
        </Box>
        <Box
          sx={{
            display:
              'flex',
            alignItems:
              'center',
            justifyContent:
              'space-between',
          }}
        >
          <IconButton
            color="primary"
            sx={{
              '&:hover':
                {
                  backgroundColor:
                    'primary.main',
                  color:
                    'primary.contrastText',
                },
            }}
          >
            <ArrowForward />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default CourseCardItem
