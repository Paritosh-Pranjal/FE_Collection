import { Popover, Stack, styled } from '@mui/material';
import Typography from 'components/atoms/Typography';
import FoodCard from 'components/molecules/FoodCard';
import React, { useState } from 'react';
import { foodItems } from 'utils';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledHeaderTypography = styled(Typography)({});

const ResturantApp = () => {
  const [selected, setSelected] = useState<number>(0);
  const [itemsSelected, setItemsSelected] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleAddButtonClick = (item: any) => {
    setItemsSelected((prevSelected) => [...prevSelected, item]);
    setSelected((prevSelected) => prevSelected + 1);
  };

  let totalPrice = 0;
  for (const item of itemsSelected) {
    totalPrice += item.price;
  }
  totalPrice = totalPrice.toFixed(2);

  return (
    <div>
      <StyledHeaderTypography variant="h3">
        Ur Home-made Kitchen
      </StyledHeaderTypography>

      <Badge badgeContent={selected} color="primary" onClick={handleClick}>
        <ShoppingCartIcon color="action" />
      </Badge>

      <Stack direction={'row'} gap={'20px'}>
        {foodItems.map((item) => (
          <FoodCard
            key={item.id}
            foodName={item.name}
            foodPrice={item.price}
            handleButtonClick={() => handleAddButtonClick(item)}
          />
        ))}
      </Stack>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Stack sx={{ p: 2 }}>
          {itemsSelected.map((item) => (
            <Typography>
              Item: {item.name}
              Price: {item.price}
            </Typography>
          ))}

          {itemsSelected.length > 0 && (
            <Typography sx={{ marginTop: 2, fontWeight: 'bold' }}>
              Total Price: ${totalPrice}
            </Typography>
          )}
        </Stack>
      </Popover>
    </div>
  );
};

export default ResturantApp;
