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
            <Box sx={{ position: 'absolute', top: '50%', textAlign: 'center', left: '50%', transform: 'translate(-50%, -50%)', width: '90%', bgcolor: 'background.paper', height: "90vh", overflowX: "hidden", overflowY: "scroll", boxShadow: 24, p: 3 }}>
                <Button onClick={onClose} sx={{ position: 'absolute', minWidth: "44px !important", top: "-10px", right: '-20px', mt: 1, mr: 1, color: "black" }}>
                    X
                </Button>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        src={
                            item?.banner
                        }
                        style={{
                            minWidth: '250px',
                            width:
                                '100%',
                            height:
                                '350px',
                            objectFit: "cover"
                        }}
                    />
                </Box>

                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: '20px', marginTop: '15px', marginBottom: '15px' }}>
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', justifyContent: 'center', whiteSpace: 'pre-wrap' }}>
                    {item.content}
                </Typography>
            </Box>
        </Modal>
    );
};

export default ModalComponent;
