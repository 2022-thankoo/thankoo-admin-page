import Header from "../component/header/Header";
import {searchOptions} from "../data/searchOption";
import AuthorizationWrapper from "../component/AuthorizationWrapper";

function ReservationPage() {
  return (
    <AuthorizationWrapper>
      <Header searchOption={searchOptions.reservation}/>
    </AuthorizationWrapper>
  );
}

export default ReservationPage;
