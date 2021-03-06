import React from 'react';
import { Box, Container } from '@material-ui/core';
import { JoinExamFormLayout } from 'src/components';

const JoinExam = () => {
    return (
        <>
            <Box sx={{ backgroundColor: 'background.default', minHeight: '100%', py: 3 }} >
                <Container maxWidth={'lg'}><JoinExamFormLayout /></Container>
            </Box>
        </>
    );
}

export default JoinExam;