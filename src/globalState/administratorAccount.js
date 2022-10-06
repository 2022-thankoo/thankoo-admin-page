import {atom} from "recoil";

import {getItem} from "../data/sessionStorage";

const administratorAccount = atom({
  key: 'administrator',
  default: {
    id: getItem('administratorId') || '',
    accessToken: getItem('accessToken') || '',
  }
});

export default administratorAccount;