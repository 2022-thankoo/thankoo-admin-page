import Header from "../component/header/Header";
import {searchOptions} from "../data/searchOption";
import AuthorizationWrapper from "../component/AuthorizationWrapper";

function MeetingPage() {
  return (
    <AuthorizationWrapper>
      <Header searchOption={searchOptions.meeting}/>
    </AuthorizationWrapper>
  );
}

export default MeetingPage;
