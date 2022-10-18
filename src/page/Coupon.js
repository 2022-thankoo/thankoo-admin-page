import Header from "../component/header/Header";
import DataList from "../component/dataList/DataList";
import {searchOptions} from "../data/searchOption";
import {PageWrapper} from "../component/commonStyle/PageWrapper";
import {authenticatedRequest} from "../util/axiosIntance";
import {useRecoilValue} from "recoil";
import selectedDataId from "../globalState/selectedDataId";
import useDataList from "../hooks/useDataList";
import {ApiPath, makeApiUrl} from "../data/path";
import httpStatus from "../data/httpStatus";

function CouponPage() {

  const selectedCouponId = useRecoilValue(selectedDataId);
  const {domain: coupons,
    tableHeaders,
    idList,
    handleDomain
  } = useDataList(ApiPath.getCoupons, "couponId");

  const handleExpireCoupon = () => {
    const selectedCouponsId = coupons.filter(coupon => selectedCouponId.includes(coupon.id))
      .map(coupon => coupon.id);

    authenticatedRequest({
      method: 'PUT',
      url: makeApiUrl(ApiPath.expireCoupon),
      data: {couponIds: selectedCouponsId}
    })
      .then(res => {
        if (res.status === httpStatus.noContent) {
          alert('쿠폰 만료처리 완료');
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <PageWrapper>
      <Header
        handleSubmit={handleDomain}
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
  )
}

export default CouponPage;
