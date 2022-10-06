import {atom} from "recoil";

const administratorAccount = atom({
  key: 'administrator',
  default: {
    id: localStorage.getItem('administratorId') || '',
    accessToken: localStorage.getItem('accessToken') || '',
  }
});

export default administratorAccount;