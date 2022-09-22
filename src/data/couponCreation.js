import {makeOption} from "./dataGenerator";

const makeCoachOption = (id, actualValue, showedValue) => {
  return {id, ...makeOption(actualValue, showedValue)};
}

const coachBlankOption = makeOption("", "코치를 선택해 주세요");
const couponBlankOption = makeOption("", "쿠폰 종류를 선택해 주세요");

export const coaches = [
  coachBlankOption,
  makeOption("107", "토미"),
  makeOption("-2", "포비"),
  makeOption("-3", "제이슨"),
  makeOption("103", "브라운"),
  makeOption("49", "구구"),
  makeOption("82", "브리"),
  makeOption("95", "네오"),
  makeOption("105", "공원"),
  makeOption("106", "준"),
  makeOption("108", "워니"),
  makeOption("109", "포코")
];

export const getCoaches = () => coaches.map(coach => coach.actualValue)
  .filter(coach => coach !== coachBlankOption.actualValue);

export const couponTypes = [
  couponBlankOption,
  makeOption("COFFEE", "커피"),
  makeOption("MEAL", "식사"),
];

export const getCouponTypes = () => couponTypes.map(couponType => couponType.actualValue)
  .filter(couponType => couponType !== couponBlankOption.actualValue);
