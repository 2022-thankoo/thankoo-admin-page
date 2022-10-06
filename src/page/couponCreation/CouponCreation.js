import {useState} from "react";
import {useFormik} from "formik";
import * as yup from 'yup';

import OptionList from "../../component/optionList/OptionList";
import * as couponOptions from "../../data/couponCreation";
import * as Ccs from "./CouponCreationStyle";
import {generateTitle, getDataFromObjectArray} from "../../data/dataGenerator";
import {warningMessage} from "../../data/message";
import {coaches, couponTypes, getCoaches, getCouponTypes} from "../../data/couponCreation";
import {regExp} from "../../data/format";
import * as Text from '../../component/commonStyle/TextBox';
import {api} from "../../util/axiosIntance";
import {InputSubmitButton, SubmitButton} from "../../component/commonStyle/InputSubmitButton";
import {CentralizeComponentWrapper} from "../../component/commonStyle/PageWrapper";
import AuthorizationWrapper from "../../component/AuthorizationWrapper";

function CouponCreation() {

  const [requiredOptions] = useState({
    coachId: 'memberId',
    couponType: 'couponType',
    coupons: 'quantity',
    couponTitle: 'title',
    couponMessage: 'message'
  });

  const [selectedCouponOptions, setSelectedCouponOptions] = useState({
    [requiredOptions.coachId]: '',
    [requiredOptions.couponType]: '',
  });

  const [messageLength, setMessageLength] = useState(0);

  const [actualCouponValue] = useState({
    [requiredOptions.coachId]: getCoaches(),
    [requiredOptions.couponType]: getCouponTypes(),
  });

  const formik = useFormik({
    initialValues: {
      [requiredOptions.coachId]: '',
      [requiredOptions.couponType]: '',
      [requiredOptions.coupons]: 0,
      [requiredOptions.couponTitle]: '',
      [requiredOptions.couponMessage]: '수고하셨습니다!',
    },
    validationSchema: yup.object({
      [requiredOptions.coachId]: yup.string()
        .required(warningMessage.invalidCoach)
        .matches(regExp.memberId, warningMessage.cannotCreateCoupon)
        .oneOf([...actualCouponValue[requiredOptions.coachId]], warningMessage.invalidCoach),
      [requiredOptions.couponType]: yup.string()
        .required(warningMessage.invalidCouponType)
        .oneOf([...actualCouponValue[requiredOptions.couponType]], warningMessage.invalidCouponType),
      [requiredOptions.coupons]: yup.number()
        .integer(warningMessage.couponNumberIsNotInteger)
        .min(1, warningMessage.invalidCouponNumberMinRange)
        .max(10, warningMessage.invalidCouponNumberMaxRange),
      [requiredOptions.couponTitle]: yup.string()
        .max(20, warningMessage.invalidCouponTitleLength),
      [requiredOptions.couponMessage]: yup.string()
        .max(100, warningMessage.invalidCouponMessageLength),
    }),
    onSubmit: (options) => {
      if (options[requiredOptions.couponTitle] === '') {
        options[requiredOptions.couponTitle] = generateTitle(selectedCouponOptions[requiredOptions.coachId],
          selectedCouponOptions[requiredOptions.couponType], '');
      }

      api({
        method: 'POST',
        url: `${process.env.REACT_APP_SERVER_ORIGIN}/admin/serial`,
        data: {
          ...options
        }
      })
        .then(() => alert('쿠폰이 생성되었습니다.'))
        .catch(err => console.log(err));
    }
  });

  const handleChange = (event) => {
    const {target: {name, value}} = event;
    if (name === requiredOptions.couponMessage) {
      setMessageLength(value.length);
    }

    const optionObject = requiredOptions.coachId === name ? coaches : couponTypes;
    const selectedOption = getDataFromObjectArray(optionObject,
      {key: "actualValue", value},
      "showedValue");

    setSelectedCouponOptions({...selectedCouponOptions, [name]: selectedOption})
    formik.handleChange(event);
  };

  const handleCreateCouponNumber = (event) => {
    event.preventDefault();
    formik.handleSubmit();
  };

  return (
    <AuthorizationWrapper>
      <CentralizeComponentWrapper>
        <Ccs.Box>
          <Ccs.OptionBox>
            <Ccs.OptionLabel htmlFor={requiredOptions.coachId}> 코치를 선택해 주세요</Ccs.OptionLabel>
            <OptionList
              options={couponOptions.coaches}
              name={requiredOptions.coachId}
              handleChange={handleChange}
            />
            {formik.touched[requiredOptions.coachId]
              && formik.errors[requiredOptions.coachId]
              && <Text.warning>{formik.errors[requiredOptions.coachId]}</Text.warning>
            }
          </Ccs.OptionBox>

          <Ccs.OptionBox>
            <Ccs.OptionLabel htmlFor={requiredOptions.couponType}>쿠폰을 선택해 주세요</Ccs.OptionLabel>
            <OptionList
              options={couponOptions.couponTypes}
              name={requiredOptions.couponType}
              handleChange={handleChange}
            />
            {
              formik.touched[requiredOptions.couponType]
              && formik.errors[requiredOptions.couponType]
              && <Text.warning>{formik.errors[requiredOptions.couponType]}</Text.warning>
            }
          </Ccs.OptionBox>

          <Ccs.OptionBox>
            <Ccs.OptionLabel htmlFor={requiredOptions.coupons}>쿠폰 수량을 입력해 주세요</Ccs.OptionLabel>
            <InputSubmitButton
              type='text'
              placeholder="쿠폰 수량"
              name={requiredOptions.coupons}
              onChange={handleChange}
            />
            {
              formik.touched[requiredOptions.coupons]
              && formik.errors[requiredOptions.coupons]
              && <Text.warning>{formik.errors[requiredOptions.coupons]}</Text.warning>
            }
          </Ccs.OptionBox>

          <Ccs.OptionBox>
            <Ccs.OptionLabel htmlFor={requiredOptions.couponTitle}>쿠폰 제목을 입력해 주세요</Ccs.OptionLabel>
            <InputSubmitButton
              type='text'
              placeholder={
                generateTitle(selectedCouponOptions[requiredOptions.coachId],
                  selectedCouponOptions[requiredOptions.couponType],
                  '쿠폰 제목을 입력해 주세요')
              }
              name={requiredOptions.couponTitle}
              onChange={handleChange}
            />
            {
              formik.touched[requiredOptions.couponTitle]
              && formik.errors[requiredOptions.couponTitle]
              && <Text.warning>{formik.errors[requiredOptions.couponTitle]}</Text.warning>
            }
          </Ccs.OptionBox>

          <Ccs.OptionBox>
            <Ccs.OptionLabel htmlFor={requiredOptions.couponMessage}>쿠폰 메시지를 입력해 주세요</Ccs.OptionLabel>
            <Ccs.InputCouponMessage
              placeholder="수고하셨습니다!"
              name={requiredOptions.couponMessage}
              onChange={handleChange}
            />
            <div>{messageLength}/100</div>
            {
              formik.touched[requiredOptions.couponMessage]
              && formik.errors[requiredOptions.couponMessage]
              && <Text.warning>{formik.errors[requiredOptions.couponMessage]}</Text.warning>
            }
          </Ccs.OptionBox>

          <SubmitButton type='button' onClick={handleCreateCouponNumber}>
            Generate coupon
          </SubmitButton>
        </Ccs.Box>
      </CentralizeComponentWrapper>
    </AuthorizationWrapper>
    );
}

export default CouponCreation;
