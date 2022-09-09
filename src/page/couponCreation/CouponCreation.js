import OptionList from "../../component/optionList/OptionList";
import * as couponOptions from "../../data/couponCreation";
import * as ccs from "./couponCreationStyle";
import {useCallback, useState} from "react";
import {generateRandomString} from "../../data/dateGenerator";

function CouponCreation() {

  const [selectedCouponOptions, setSelectedCouponOptions] = useState({
    coach: '', couponType: '', coupons: 0, couponNumbers: []
  });

  const handleChange = useCallback((optionName, value) => {
    setSelectedCouponOptions({
      ...selectedCouponOptions, [optionName]: value
    })
  }, [selectedCouponOptions]);

  const handleCreateCouponNumber = useCallback(() => {
    setSelectedCouponOptions({
      ...selectedCouponOptions, couponNumbers: generateRandomString(selectedCouponOptions.coupons, 8)
    });
  }, [selectedCouponOptions]);

  const handleSubmitCouponNumber = () => {
    console.log(selectedCouponOptions);
  }

  return (<ccs.CouponCreationPageWrapper>
    <ccs.Box>
      <OptionList
        options={couponOptions.coaches}
        handleChange={(e) => handleChange("coach", e.target.value)}
      />
      <OptionList
        options={couponOptions.couponTypes}
        handleChange={(e) => handleChange("couponType", e.target.value)}
      />
      <ccs.InputTheNumberOfCoupon
        type='text'
        placeholder="쿠폰 수량"
        name="coupons"
        onChange={(e) => handleChange("coupons", e.target.value)}
      />
      <ccs.CouponCreationPageButton type='button' onClick={handleCreateCouponNumber}>
        Generate coupon number
      </ccs.CouponCreationPageButton>
    </ccs.Box>
    {selectedCouponOptions.couponNumbers.length > 0 && <ccs.Box>
      <h1>Result</h1>
      {selectedCouponOptions.couponNumbers
        .map(couponNumber => <p key={couponNumber}>{couponNumber}</p>)}
      <ccs.CouponCreationPageButton type='button' onClick={handleSubmitCouponNumber}>
        Create coupon
      </ccs.CouponCreationPageButton>
    </ccs.Box>}
  </ccs.CouponCreationPageWrapper>);
}

export default CouponCreation;