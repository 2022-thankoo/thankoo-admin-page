import {atom} from "recoil";

const administratorAccount = atom({
  key: 'administrator',
  default: {
    id: '',
    accessToken: '',
  }
});

export default administratorAccount;