import Header from "../component/header/Header";
import {searchOptions} from "../data/searchOption";

function MeetingPage() {
  return (
    <>
      <Header searchOption={searchOptions.meeting}/>
    </>
  );
}

export default MeetingPage;
