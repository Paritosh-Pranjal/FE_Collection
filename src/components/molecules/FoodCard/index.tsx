import { Box, styled } from '@mui/material';
import Button from 'components/atoms/Button';
import Typography from 'components/atoms/Typography';
import React from 'react';

export interface FoodCardProps {
  foodName: string;
  foodPrice: number;
  handleButtonClick: () => void;
}

const StyledInfoTypography = styled(Typography)({
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '24px',
  color: '#404452',
});

const StyledAddButton = styled(Button)({
  width: '100%',
  backgroundColor: 'blueviolet',
  ':hover': {
    backgroundColor: 'blueviolet',
  },
  marginTop: '20px',
});

const StyledMainBox = styled(Box)({
  width: '301px',
  height: '100px',
  border: '1px solid grey',
});

const FoodCard = ({
  foodName,
  foodPrice,
  handleButtonClick,
}: FoodCardProps) => {
  return (
    <StyledMainBox>
      <StyledInfoTypography variant="body1">
        Name:- {foodName}
      </StyledInfoTypography>
      <StyledInfoTypography variant="body1">
        Price:- {foodPrice}
      </StyledInfoTypography>
      <StyledAddButton onClick={handleButtonClick}>
        <Typography variant="body1" color={'white'}>
          Add
        </Typography>
      </StyledAddButton>
    </StyledMainBox>
  );
};

export default FoodCard;
