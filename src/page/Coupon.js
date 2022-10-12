import {useState} from "react";

import Header from "../component/header/Header";
import DataList from "../component/dataList/DataList";
import {searchOptions} from "../data/searchOption";
import {PageWrapper} from "../component/commonStyle/PageWrapper";
import AuthorizationWrapper from "../component/AuthorizationWrapper";
import {authenticatedRequest} from "../util/axiosIntance";
import {generateDataId, generateTableHeaders, getCouponResponseParser} from "../data/dataGenerator";

function CouponPage() {

  const [coupon, setCoupon] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [idList, setIdList] = useState([]);

  const handleCoupon = (startDate, endDate, status) => {

    authenticatedRequest({
      method: 'GET',
      url: `${process.env.REACT_APP_SERVER_ORIGIN}/admin/coupons`,
      params: {status, startDate, endDate}
    })
      .then(({data}) => {
        if (data.length > 50) {
          data = data.slice(0, 51);
        }
        console.log(data);
        setTableHeaders(generateTableHeaders(data));
        setIdList(generateDataId(data, "couponId"));
        setCoupon(getCouponResponseParser(data));
      })
      .catch(err => console.log(err));
  }

  console.log(coupon);

  return (
    <AuthorizationWrapper>
      <PageWrapper>
        <Header
          handleSubmit={handleCoupon}
          searchOption={searchOptions.coupon}
        />
        <DataList
          idList={idList}
          tableHeaders={tableHeaders}
          tableRows={coupon}
        />
      </PageWrapper>
    </AuthorizationWrapper>
  )
}

export default CouponPage;
