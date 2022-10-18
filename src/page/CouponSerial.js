import {useState} from "react";
import {useRecoilValue} from "recoil";
import {useNavigate} from 'react-router-dom';

import DataList from "../component/dataList/DataList";
import Header from "../component/header/Header";
import {searchOptions} from "../data/searchOption";
import {authenticatedRequest} from "../util/axiosIntance";
import selectedDataId from "../globalState/selectedDataId";
import {ApiPath, ClientPath, makeApiUrl} from "../data/path";
import {PageWrapper} from "../component/commonStyle/PageWrapper";
import useDataList from "../hooks/useDataList";

function CouponSerial() {
  const navigate = useNavigate();
  const selectedCouponSerialId = useRecoilValue(selectedDataId);
  const [dropDownList] = useState(["Create QR Code"]);
  const {domain: couponSerial,
    tableHeaders,
    idList,
    handleDomain
  } = useDataList(ApiPath.getCouponSerials, "serialId");

  function handleCreateQrCode() {
    const serials = couponSerial.filter(coupon => selectedCouponSerialId.includes(coupon.id))
      .map(coupon => coupon.code);

    authenticatedRequest({
      method: 'POST',
      url: makeApiUrl(ApiPath.createQrUrl),
      data: {serials}
    })
      .then(res => {
        const {data: qrCodes} = res;
        navigate(ClientPath.qrCode, {state: {qrCodes}});
      })
      .catch(err => console.log(err))
  }

  return (
    <PageWrapper>
      <Header
        handleSubmit={handleDomain}
        searchOption={searchOptions.couponSerial}
      />
      <DataList
        dropDownList={dropDownList}
        idList={idList}
        tableHeaders={tableHeaders}
        tableRows={couponSerial}
        handleSelectData={handleCreateQrCode}
      />
    </PageWrapper>
  )
}

export default CouponSerial;