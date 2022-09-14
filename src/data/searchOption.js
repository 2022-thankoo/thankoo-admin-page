import {makeOption, makeStatus} from "./dataGenerator";

export const blankOption = makeOption("all", "상태 선택");

export const Status = {
  member: makeStatus(false, [blankOption]),
  coupon: makeStatus(true, [
    blankOption,
    makeOption("not used", "not used"),
    makeOption("reserving", "reserving"),
    makeOption("reserved", "reserved"),
    makeOption("used", "used"),
    makeOption("expired", "expired")
  ]),
  meeting: makeStatus(true, [
    blankOption,
    makeOption("on progress", "on progress"),
    makeOption("finished", "finished")
  ]),
  reservation: makeStatus(true, [
    blankOption,
    makeOption("waiting", "waiting"),
    makeOption("deny", "deny"),
    makeOption("accept", "accept"),
    makeOption("canceled", "canceled")
  ])
};
