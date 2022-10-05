import {atom} from "recoil";

const selectedId = atom({
  key: 'selected Id',
  default: [],
});

export default selectedId;