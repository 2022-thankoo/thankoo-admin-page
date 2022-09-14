import {useFormik} from "formik";
import * as yup from 'yup';

import OptionList from "../../component/optionList/OptionList";
import * as couponOptions from "../../data/couponCreation";
import * as Ccs from "./CouponCreationStyle";
import {useState} from "react";
import {generateRandomString} from "../../data/dataGenerator";
import {warningMessage} from "../../data/message";
import {getCoaches, getCouponTypes} from "../../data/couponCreation";

function CouponCreation() {

  const [selectedCouponOptions, setSelectedCouponOptions] = useState({
    coach: '',
    couponType: '',
    couponNumbers: []
  });

  const [actualCouponValue] = useState({
    coachName: getCoaches(),
    couponType: getCouponTypes(),
  });

  const formik = useFormik({
    initialValues: {
      coach: '',
      couponType: '',
      coupons: 0,
    },
    validationSchema: yup.object({
      coach: yup.string()
        .required(warningMessage.invalidCoach)
        .oneOf([...actualCouponValue.coachName], warningMessage.invalidCoach),
      couponType: yup.string()
        .required(warningMessage.invalidCouponType)
        .oneOf([...actualCouponValue.couponType], warningMessage.invalidCouponType),
      coupons: yup.number()
        .integer(warningMessage.couponNumberIsNotInteger)
        .min(1, warningMessage.invalidCouponNumberMinRange)
        .max(10, warningMessage.invalidCouponNumberMaxRange)
    }),
    onSubmit: ({coach, couponType, coupons}) => {
      console.log(`submit ${coach} ${couponType}`);
      setSelectedCouponOptions({
        coach,
        couponType,
        couponNumbers: generateRandomString(coupons, 8)
      });
    }
  });

  const handleChange = (event) => {
    formik.handleChange(event);
  };

  const handleCreateCouponNumber = (event) => {
    event.preventDefault();
    formik.handleSubmit();
  };

  const handleSubmitCouponNumber = () => {
    console.log(selectedCouponOptions);
  }

  return (<Ccs.CouponCreationPageWrapper>
    <Ccs.Box>
      <OptionList
        options={couponOptions.coaches}
        name="coach"
        handleChange={handleChange}
      />
      {formik.touched.coach
        && formik.errors.coach
        && <div>{formik.errors.coach}</div>
      }
      <OptionList
        options={couponOptions.couponTypes}
        name="couponType"
        handleChange={handleChange}
      />
      {
        formik.touched.couponType
        && formik.errors.couponType
        && <div>{formik.errors.couponType}</div>
      }
      <Ccs.InputTheNumberOfCoupon
        type='text'
        placeholder="쿠폰 수량"
        name="coupons"
        onChange={handleChange}
      />
      {
        formik.touched.coupons
        && formik.errors.coupons
        && <div>{formik.errors.coupons}</div>
      }
      <Ccs.CouponCreationPageButton type='button' onClick={handleCreateCouponNumber}>
        Generate coupon number
      </Ccs.CouponCreationPageButton>
    </Ccs.Box>
    {selectedCouponOptions.couponNumbers.length > 0 && <Ccs.Box>
      <h1>Result</h1>
      {selectedCouponOptions.couponNumbers
        .map(couponNumber => <p key={couponNumber}>{couponNumber}</p>)}
      <Ccs.CouponCreationPageButton type='button' onClick={handleSubmitCouponNumber}>
        Create coupon
      </Ccs.CouponCreationPageButton>
    </Ccs.Box>}
  </Ccs.CouponCreationPageWrapper>);
}

export default CouponCreation;