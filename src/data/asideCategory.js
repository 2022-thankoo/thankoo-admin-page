import {createCategoryElement} from "./dataGenerator";
import {ClientPath} from "./path";

const category = [
  {
    mainCategory: "Domain",
    categoryElement: [
      createCategoryElement(ClientPath.member, 'Member'),
      createCategoryElement(ClientPath.coupon, 'Coupon'),
      createCategoryElement(ClientPath.couponSerial, 'Coupon Serial'),
    ]
  },
  {
    mainCategory: "Utility",
    categoryElement: [
      createCategoryElement(ClientPath.couponCreation, 'Create Coupon'),
      createCategoryElement(ClientPath.organizationCreation, 'Create Organization'),
      createCategoryElement(ClientPath.signOut, 'Sign Out'),
    ]
  }
];

export default category;
