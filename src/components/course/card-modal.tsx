import React, { FC, useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Course } from '@/interfaces/course';

interface ModalComponentProps {
    isOpen: boolean;
    onClose: () => void;
    item: Course;
}

const ModalComponent: FC<ModalComponentProps> = ({ isOpen, onClose, item }) => {
    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                <Button onClick={onClose} sx={{ position: 'absolute', top: "-10px", right: '-20px', mt: 1, mr: 1 }}>
                    X
                </Button>
                <Typography variant="h6" component="div">
                    {item.title} Details
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
            </Box>
        </Modal>
    );
};

export default ModalComponent;