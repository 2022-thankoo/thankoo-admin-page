import {useState} from "react";
import {useRecoilValue} from "recoil";
import {useNavigate} from 'react-router-dom';

import DataList from "../component/dataList/DataList";
import Header from "../component/header/Header";
import {searchOptions} from "../data/searchOption";
import {authenticatedRequest} from "../util/axiosIntance";
import selectedDataId from "../globalState/selectedDataId";
import {ClientPath} from "../data/path";
import {PageWrapper} from "../component/commonStyle/PageWrapper";
import AuthorizationWrapper from "../component/AuthorizationWrapper";
import {generateDataId, generateTableHeaders} from "../data/dataGenerator";

function CouponSerial() {
  const navigate = useNavigate();
  const selectedCouponSerialId = useRecoilValue(selectedDataId);
  const [couponSerial, setCouponSerial] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [idList, setIdList] = useState([]);
  const [dropDownList] = useState(["Create QR Code"]);

  const handleSubmit = (startDate, endDate, status) => {
    authenticatedRequest({
      method: 'GET',
      url: `${process.env.REACT_APP_SERVER_ORIGIN}/admin/serial?memberId=${status}`,
    })
      .then((response) => {
        const {data} = response;
        setTableHeaders(generateTableHeaders(data));
        setIdList(generateDataId(data, "serialId"));
        setCouponSerial(data);
      })
      .catch(err => console.log(err));
  }

  function handleCreateQrCode() {
    const serials = couponSerial.filter(coupon => selectedCouponSerialId.includes(coupon.id))
      .map(coupon => coupon.code);

    authenticatedRequest({
      method: 'POST',
      url: `${process.env.REACT_APP_SERVER_ORIGIN}/admin/qrcode`,
      data: {serials}
    })
      .then(res => {
        const {data: qrCodes} = res;
        navigate(ClientPath.qrCode, {state: {qrCodes}});
      })
      .catch(err => console.log(err))
  }

  return (
    <AuthorizationWrapper>
      <PageWrapper>
        <Header
          handleSubmit={handleSubmit}
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
    </AuthorizationWrapper>
  )
}

export default CouponSerial;