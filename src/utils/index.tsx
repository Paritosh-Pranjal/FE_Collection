import { GridColDef } from '@mui/x-data-grid';

export const vegOptions = ['veg-bin', 'pasta', 'burger', 'veg', 'pizza'];

export const nonVegOptions = [
  'Non-veg-bin',
  'Non-veg-pasta',
  'Non-veg-burger',
  'Non-veg-veg',
  'Non-veg-pizza',
];

export const BASE_URL = 'https://reqres.in/api';

export const emailRegexPattern = /\S+@\S+\.\S+/;
export const passwordRegexPattern =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const signUpData = {
  signUp: 'Sign Up',
  fullName: 'Full Name',
  email: 'Email id',
  password: 'Password',
  namePlaceholder: 'John doe',
  emailPlaceholder: 'orders@supertodo.me',
  passwordPlaceholder: 'orders@supertodo.me',
  continue: 'Continue',
  or: 'OR',
  googleText: 'Sign up with Google',
  alreadyHave: 'Already have an account? ',
  signIn: 'Sign in',
};

export const studentColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'first_name', headerName: 'First name', width: 130 },
  { field: 'last_name', headerName: 'Last name', width: 130 },
  {
    field: 'email',
    headerName: 'Email',
    width: 160,
  },
  {
    field: 'avatar',
    headerName: 'Avatar',
    sortable: false,
    width: 160,
  },
];

export const studentRows = [
  {
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    id: 1,
    last_name: 'Bluth',
  },
  {
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    id: 2,
    last_name: 'Weaver',
  },
  {
    avatar: 'https://reqres.in/img/faces/3-image.jpg',
    email: 'emma.wong@reqres.in',
    first_name: 'Emma',
    id: 3,
    last_name: 'Wong',
  },
  {
    avatar: 'https://reqres.in/img/faces/4-image.jpg',
    email: 'eve.holt@reqres.in',
    first_name: 'Eve',
    id: 4,
    last_name: 'Holt',
  },
  {
    avatar: 'https://reqres.in/img/faces/5-image.jpg',
    email: 'charles.morris@reqres.in',
    first_name: 'Charles',
    id: 5,
    last_name: 'Morris',
  },
  {
    avatar: 'https://reqres.in/img/faces/6-image.jpg',
    email: 'tracey.ramos@reqres.in',
    first_name: 'Tracey',
    id: 6,
    last_name: 'Ramos',
  },
];

export const foodItems = [
  {
    id: 1,
    name: 'item 1',
    price: 151,
  },
  {
    id: 2,
    name: 'item 2',
    price: 121,
  },
  {
    id: 3,
    name: 'item 3',
    price: 251,
  },
];
