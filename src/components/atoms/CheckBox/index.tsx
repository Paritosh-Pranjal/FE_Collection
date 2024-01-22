import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@mui/material';
import React from 'react';

const CheckBox = (props: MuiCheckboxProps) => {
  return (
    <div>
      <MuiCheckbox {...props} />
    </div>
  );
};

export default CheckBox;
