export const ClientPath = {
  root: '/',
  member: '/member',
  coupon: '/coupon',
  meeting: '/meeting',
  reservation: '/reservation',
  organization: '/organization',
  couponSerial: '/coupon-serial',
  couponCreation: '/coupon-creation',
  organizationCreation: '/organization-creation',
  adminAccount: '/admin-account',
  qrCode: '/qrcode',
  signOut: '/sign-out'
};
Object.freeze(ClientPath);

const apiBaseUrl = '/admin';
export const ApiPath = {
  getMembers: `${apiBaseUrl}/members`,
  changeMemberName: (memberId) => `${apiBaseUrl}/members/${memberId}`,
  getCoupons: `${apiBaseUrl}/coupons`,
  expireCoupon: `${apiBaseUrl}/coupons/expire`,
  createCouponSerials: `${apiBaseUrl}/serial`,
  getCouponSerials: `${apiBaseUrl}/serial`,
  createQrUrl: `${apiBaseUrl}/qrcode`,
  administratorSignIn: `${apiBaseUrl}/sign-in`,
  createOrganization: `${apiBaseUrl}/organizations`,
  getOrganizations: `${apiBaseUrl}/organizations`,
}
Object.freeze(ApiPath);

export const makeApiUrl = (path) => `${process.env.REACT_APP_SERVER_ORIGIN}${path}`;