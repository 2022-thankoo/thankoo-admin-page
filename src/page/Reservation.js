import Header from "../component/header/Header";
import {searchOptions} from "../data/searchOption";

function ReservationPage() {
  return (
    <>
      <Header searchOption={searchOptions.reservation}/>
    </>
  );
}

export default ReservationPage;
