import { Button as MuiButton, ButtonProps } from '@mui/material';
import React from 'react';

const Button = (props: ButtonProps) => {
  return (
    <div>
      <MuiButton {...props}>{props.children}</MuiButton>
    </div>
  );
};

export default Button;
