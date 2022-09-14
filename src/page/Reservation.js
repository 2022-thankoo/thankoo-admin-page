import Header from "../component/header/Header";
import {Status} from "../data/searchOption";

function ReservationPage() {
  return <Header searchOption={Status.reservation}/>
}

export default ReservationPage;