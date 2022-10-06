import Header from "../component/header/Header";
import {searchOptions} from "../data/searchOption";
import AuthorizationWrapper from "../component/AuthorizationWrapper";

function MemberPage() {
  return (
    <AuthorizationWrapper>
      <Header searchOption={searchOptions.member}/>
    </AuthorizationWrapper>
  );
}

export default MemberPage;
