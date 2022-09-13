import {makeOption, makeStatus} from "./dateGenerator";

const blankStatus = "상태 선택";

const Status = {
  member: makeStatus(false, [makeOption("", blankStatus)]),
  coupon: makeStatus(true, [
    makeOption("", blankStatus),
    makeOption("not used", "not used"),
    makeOption("reserving", "reserving"),
    makeOption("reserved", "reserved"),
    makeOption("used", "used"),
    makeOption("expired", "expired")
  ]),
  meeting: makeStatus(true, [
    makeOption("", blankStatus),
    makeOption("on progress", "on progress"),
    makeOption("finished", "finished")
  ]),
  reservation: makeStatus(true, [
    makeOption("", blankStatus),
    makeOption("waiting", "waiting"),
    makeOption("deny", "deny"),
    makeOption("accept", "accept"),
    makeOption("canceled", "canceled")
  ])
}

export default Status;