function createCategoryElement(url, element) {
  return {url, element};
}

const category = [
  {
    mainCategory: "Domain",
    categoryElement: [
      createCategoryElement('/member', 'member'),
      createCategoryElement('/coupon', 'coupon'),
      createCategoryElement('/meeting', 'meeting'),
      createCategoryElement('/reservation', 'reservation')
    ]
  },
  {
    mainCategory: "Utility",
    categoryElement: [
      createCategoryElement('/coupon-creation', 'Create Coupon'),
      createCategoryElement('/admin-account', 'Admin Account'),
    ]
  }
];

export default category;