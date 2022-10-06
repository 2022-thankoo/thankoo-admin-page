import Header from "../component/header/Header";
import DataList from "../component/dataList/DataList";
import {searchOptions} from "../data/searchOption";
import {PageWrapper} from "../component/commonStyle/PageWrapper";
import AuthorizationWrapper from "../component/AuthorizationWrapper";

function CouponPage() {
  return (
    <AuthorizationWrapper>
      <PageWrapper>
        <Header searchOption={searchOptions.coupon}/>
        <DataList/>
      </PageWrapper>
    </AuthorizationWrapper>
  )
}

export default CouponPage;
