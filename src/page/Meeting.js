import Header from "../component/header/Header";
import {Status} from "../data/searchOption";

function MeetingPage() {
  return <Header searchOption={Status.meeting}/>
}

export default MeetingPage;