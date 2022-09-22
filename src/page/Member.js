import Header from "../component/header/Header";
import {searchOptions} from "../data/searchOption";

function MemberPage() {
  return <Header searchOption={searchOptions.member}/>
}

export default MemberPage;