import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Icon, Stack, styled } from '@mui/material';
import Button from 'components/atoms/Button';
import TextField from 'components/atoms/TextField';
import Typography from 'components/atoms/Typography';
import React, { useState } from 'react';
import { emailRegexPattern, passwordRegexPattern, signUpData } from 'utils';

const StyledHeader = styled(Typography)({
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '40px',
  color: '#1A1B25',
});

const StyledLabelTypography = styled(Typography)({
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '24px',
  color: '#404452',
});

const StyledButtonTypography = styled(Typography)({
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '24px',
});

const StyledTextField = styled(TextField)({
  width: '100%',
  '& .MuiInputBase-root': {
    height: '44px',
    borderRadius: '8px',
  },
  //   '& input': {
  //     height: '101px',
  //   },
  '& .MuiFormHelperText-root': {
    color: 'red',
  },
});

const StyledContinueButton = styled(Button)({
  width: '100%',
  height: '32px',
  borderRadius: '4px',
  padding: '5px 8px 5px 8px',
  border: '1px solid #C0C8D2',
  backgroundColor: '#625AFA',
  ':disabled': {
    backgroundColor: 'grey',
  },
  ':hover': {
    backgroundColor: '#625AFA',
  },
});

const StyledGoogleButton = styled(Button)({
  width: '100%',
  height: '32px',
  borderRadius: '4px',
  padding: '5px 8px 5px 8px',
  border: '1px solid #C0C8D2',
  backgroundColor: 'white',
  ':hover': {
    backgroundColor: 'white',
  },
});

const SignUpOrganisms = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [isEyeButtonClick, setIsEyeButtonClick] = useState<boolean>(true);

  const isNameValid = (value: string) => {
    return value.trim() === '';
  };

  const isEmailValid = (value: string) => {
    return emailRegexPattern.test(value);
  };
  const isPasswordValid = (value: string) => {
    return passwordRegexPattern.test(value);
  };

  const handleNameChange = (e: any) => {
    const nameValue = e.target.value;
    if (isNameValid(nameValue)) {
      setIsButtonDisabled(true);
      setName(nameValue);
      setNameError('Enter valid name');
    } else {
      setName(nameValue);
      setIsButtonDisabled(
        !(
          !isNameValid(nameValue) &&
          isEmailValid(email) &&
          isPasswordValid(password)
        )
      );
      setNameError('');
    }
  };

  const handleEmailChange = (e: any) => {
    const emailValue = e.target.value;
    if (!isEmailValid(emailValue)) {
      setIsButtonDisabled(true);
      setEmail(emailValue);
      setEmailError('Enter valid email id');
    } else {
      setEmail(emailValue);
      setIsButtonDisabled(
        !(
          !isNameValid(name) &&
          isEmailValid(emailValue) &&
          isPasswordValid(password)
        )
      );
      setEmailError('');
    }
  };

  const handlePasswordChange = (e: any) => {
    const passwordValue = e.target.value;
    if (!isPasswordValid(passwordValue)) {
      setIsButtonDisabled(true);
      setPassword(passwordValue);
      setPasswordError('Enter valid password');
    } else {
      setPassword(passwordValue);
      setIsButtonDisabled(
        !(
          !isNameValid(name) &&
          isEmailValid(email) &&
          isPasswordValid(passwordValue)
        )
      );
      setPasswordError('');
    }
  };

  const handleEyeClick = () => {
    setIsEyeButtonClick(!isEyeButtonClick);
  };

  return (
    <Stack direction={'column'}>
      <StyledHeader variant="h2">{signUpData.signUp}</StyledHeader>

      <StyledLabelTypography variant="body2">
        {signUpData.fullName}
      </StyledLabelTypography>
      <StyledTextField
        placeholder={signUpData.namePlaceholder}
        onChange={handleNameChange}
        helperText={nameError}
      />

      <StyledLabelTypography variant="body2">
        {signUpData.email}
      </StyledLabelTypography>
      <StyledTextField
        placeholder={signUpData.emailPlaceholder}
        onChange={handleEmailChange}
        helperText={emailError}
      />

      <StyledLabelTypography variant="body2">
        {signUpData.password}
      </StyledLabelTypography>
      <StyledTextField
        type={isEyeButtonClick ? 'password' : 'text'}
        placeholder={signUpData.passwordPlaceholder}
        onChange={handlePasswordChange}
        helperText={passwordError}
        InputProps={{
          endAdornment: (
            <>
              {isEyeButtonClick ? (
                <Icon onClick={handleEyeClick} style={{ cursor: 'pointer' }}>
                  <VisibilityOff />
                </Icon>
              ) : (
                <Icon onClick={handleEyeClick} style={{ cursor: 'pointer' }}>
                  <Visibility />
                </Icon>
              )}
            </>
          ),
        }}
      />

      <StyledContinueButton disabled={isButtonDisabled}>
        <StyledButtonTypography color={'white'}>
          {signUpData.continue}
        </StyledButtonTypography>
      </StyledContinueButton>

      <StyledGoogleButton>
        <StyledButtonTypography color={'#404452'}>
          {signUpData.googleText}
        </StyledButtonTypography>
      </StyledGoogleButton>
    </Stack>
  );
};

export default SignUpOrganisms;
