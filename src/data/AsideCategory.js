import {createCategoryElement} from "./DateGenerator";
import {ClientPath} from "./Path";

const category = [
  {
    mainCategory: "Domain",
    categoryElement: [
      createCategoryElement(ClientPath.member, 'Member'),
      createCategoryElement(ClientPath.coupon, 'Coupon'),
      createCategoryElement(ClientPath.meeting, 'Meeting'),
      createCategoryElement(ClientPath.reservation, 'Reservation')
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