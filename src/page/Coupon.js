import Header from "../component/header/Header";
import DataList from "../component/dataList/DataList";
import PageWrapper from "../component/commonStyle/PageWrapper";
import {searchOptions} from "../data/searchOption";

function CouponPage() {
  return (
    <PageWrapper>
      <Header searchOption={searchOptions.coupon}/>
      <DataList/>
    </PageWrapper>
  )
}

export default CouponPage;
