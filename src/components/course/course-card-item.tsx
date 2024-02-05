import React, {
  FC, useState
} from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material'
import IconButton, {
  iconButtonClasses,
} from '@mui/material/IconButton'
import ArrowForward from '@mui/icons-material/ArrowForward'
import { Course } from '@/interfaces/course'
import ModalComponent from './card-modal'

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
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleArrowClick = () => {
      setIsModalOpen(true);
    };

    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

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
          <div>
            <h2>
              {
                item.title
              }
            </h2>
            <h5>
              {
                item.desc
              }
            </h5>
          </div>
          <div
            style={{
              display:
                'flex',
              justifyContent:
                'space-between',
              alignItems:
                'center',
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
              onClick={handleArrowClick}
            >
              <ArrowForward />
            </IconButton>
          </div>
        </Box>
        <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal} item={item} />
      </Box>
    )
  }

export default CourseCardItem
