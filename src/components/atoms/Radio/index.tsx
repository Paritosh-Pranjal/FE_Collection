import { Radio as MuiRadio, RadioProps as MuiRadioProps } from '@mui/material';
import React from 'react';

const Radio = (props: MuiRadioProps) => {
  return (
    <div>
      <MuiRadio {...props} />
    </div>
  );
};

export default Radio;
