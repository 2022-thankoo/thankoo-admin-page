import {makeStatus} from "./dateGenerator";

const blankStatus = "상태 선택";

const Status = {
  member: makeStatus(false, [blankStatus]),
  coupon: makeStatus(true,
    [blankStatus, "not used", "reserving", "reserved", "used", "expired"]),
  meeting: makeStatus(true, [blankStatus, "on progress", "finished"]),
  reservation: makeStatus(true,
    [blankStatus, "waiting", "deny", "accept", "canceled"])
}

export default Status;