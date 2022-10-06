import Header from "../component/header/Header";
import DataList from "../component/dataList/DataList";
import {searchOptions} from "../data/searchOption";
import {PageWrapper} from "../component/commonStyle/PageWrapper";

function CouponPage() {
  return (
    <PageWrapper>
      <Header searchOption={searchOptions.coupon}/>
      <DataList/>
    </PageWrapper>
  )
}

export default CouponPage;
