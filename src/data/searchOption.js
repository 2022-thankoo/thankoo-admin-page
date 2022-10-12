import {makeOption, makeSearchOption} from "./dataGenerator";
import {coaches} from "./couponCreation";

export const blankOption = makeOption("all", "상태 선택");

export const searchOptions = {
  member: makeSearchOption(true, false),
  coupon: makeSearchOption(true, true, [
    blankOption,
    makeOption("not_used", "not used"),
    makeOption("reserving", "reserving"),
    makeOption("reserved", "reserved"),
    makeOption("used", "used"),
    makeOption("expired", "expired")
  ]),
  meeting: makeSearchOption(true, true, [
    blankOption,
    makeOption("on progress", "on progress"),
    makeOption("finished", "finished")
  ]),
  reservation: makeSearchOption(true, true, [
    blankOption,
    makeOption("waiting", "waiting"),
    makeOption("deny", "deny"),
    makeOption("accept", "accept"),
    makeOption("canceled", "canceled")
  ]),
  couponSerial: makeSearchOption(false, true, coaches),
};
