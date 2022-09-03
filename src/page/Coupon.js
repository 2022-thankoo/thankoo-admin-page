import Header from "../component/header/Header";
import SearchOption from "../data/SearchOption";
import DataList from "../component/dataList/DataList";
import PageWrapper from "../component/commonStyle/PageWrapper";

function CouponPage() {
  return (
    <PageWrapper>
      <Header searchOption={SearchOption.coupon}/>
      <DataList />
    </PageWrapper>
  )
}

export default CouponPage;