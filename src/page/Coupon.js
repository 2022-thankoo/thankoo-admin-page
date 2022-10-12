import {useState} from "react";

import Header from "../component/header/Header";
import DataList from "../component/dataList/DataList";
import {searchOptions} from "../data/searchOption";
import {PageWrapper} from "../component/commonStyle/PageWrapper";
import AuthorizationWrapper from "../component/AuthorizationWrapper";
import {authenticatedRequest} from "../util/axiosIntance";
import {generateDataId, generateTableHeaders, getCouponResponseParser} from "../data/dataGenerator";
import {useRecoilValue} from "recoil";
import selectedDataId from "../globalState/selectedDataId";

function CouponPage() {

  const selectedCouponId = useRecoilValue(selectedDataId);
  const [coupons, setCoupons] = useState([]);
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
        setTableHeaders(generateTableHeaders(data));
        setIdList(generateDataId(data, "couponId"));
        setCoupons(getCouponResponseParser(data));
      })
      .catch(err => console.log(err));
  }

  const handleExpireCoupon = () => {
    const selectedCouponsId = coupons.filter(coupon => selectedCouponId.includes(coupon.id))
      .map(coupon => coupon.id);

    authenticatedRequest({
      method: 'PUT',
      url: `${process.env.REACT_APP_SERVER_ORIGIN}/admin/coupons/expire`,
      data: {couponIds: selectedCouponsId}
    })
      .then(res => alert('쿠폰 만료처리 완료'))
      .catch(err => console.log(err));
  }

  return (
    <AuthorizationWrapper>
      <PageWrapper>
        <Header
          handleSubmit={handleCoupon}
          searchOption={searchOptions.coupon}
        />
        <DataList
          dropDownList={["Expire coupon"]}
          handleSelectData={handleExpireCoupon}
          idList={idList}
          tableHeaders={tableHeaders}
          tableRows={coupons}
        />
      </PageWrapper>
    </AuthorizationWrapper>
  )
}

export default CouponPage;
