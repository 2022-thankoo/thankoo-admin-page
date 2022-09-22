import {createCategoryElement} from "./dataGenerator";
import {ClientPath} from "./path";

const category = [
  {
    mainCategory: "Domain",
    categoryElement: [
      createCategoryElement(ClientPath.member, 'Member'),
      createCategoryElement(ClientPath.coupon, 'Coupon'),
      createCategoryElement(ClientPath.meeting, 'Meeting'),
      createCategoryElement(ClientPath.reservation, 'Reservation'),
      createCategoryElement(ClientPath.couponSerial, 'Coupon Serial'),
    ]
  },
  {
    mainCategory: "Utility",
    categoryElement: [
      createCategoryElement(ClientPath.couponCreation, 'Create Coupon'),
      createCategoryElement(ClientPath.adminAccount, 'Admin Account'),
    ]
  }
];

export default category;