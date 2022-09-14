import Header from "../component/header/Header";
import DataList from "../component/dataList/DataList";
import PageWrapper from "../component/commonStyle/PageWrapper";
import {Status} from "../data/searchOption";

function CouponPage() {
  return (
    <PageWrapper>
      <Header searchOption={Status.coupon}/>
      <DataList/>
    </PageWrapper>
  )
}

export default CouponPage;