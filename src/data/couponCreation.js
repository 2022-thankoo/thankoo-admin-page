import {makeOption} from "./dataGenerator";

const coachBlankOption = "코치를 선택해 주세요";
const couponBlankOption = "쿠폰 종류를 선택해 주세요";

export const coaches = [
  makeOption("", coachBlankOption),
  makeOption("tomi", "토미"),
  makeOption("pobi", "포비"),
  makeOption("jason", "제이슨"),
  makeOption("brown", "브라운"),
  makeOption("gugu", "구구"),
  makeOption("bri", "브리"),
  makeOption("neo", "네오"),
  makeOption("poco", "포코"),
  makeOption("gongwon", "공원"),
  makeOption("jun", "준"),
];

export const couponTypes = [
  makeOption("", couponBlankOption),
  makeOption("coffee", "커피"),
  makeOption("meal", "식사"),
];