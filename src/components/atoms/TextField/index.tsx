import { TextField as MuiTextField, TextFieldProps } from '@mui/material';
import React from 'react';

const TextField = (props: TextFieldProps) => {
  return (
    <div>
      <MuiTextField {...props}>{props.children}</MuiTextField>
    </div>
  );
};

export default TextField;
