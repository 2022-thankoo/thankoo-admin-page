import Header from "../component/header/Header";
import Status from "../data/SearchOption";

function MemberPage() {
  return <Header searchOption={Status.member}/>
}

export default MemberPage;