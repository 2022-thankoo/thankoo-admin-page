import * as yup from 'yup';
import {useFormik} from "formik";

import {CentralizeComponentWrapper} from "../component/commonStyle/PageWrapper";
import {DataInput, DataInputWrapper, InputBox, SubmitButton} from "../component/commonStyle/DataInput";
import {warningMessage} from "../data/message";
import {authenticatedRequest} from "../util/axiosIntance";
import * as Text from "../component/commonStyle/TextBox";
import httpStatus from "../data/httpStatus";
import {ApiPath, makeApiUrl} from "../data/path";

function OrganizationCreation() {

  const requiredOptions = {
    name: 'name',
    limitedSize: 'limitedSize',
  };

  const labelElements = {
    [requiredOptions.name]: '조직 이름을 입력해주세요',
    [requiredOptions.limitedSize]: '조직 인원 제한을 입력해주세요',
  };

  const formik = useFormik({
    initialValues: {
      [requiredOptions.name]: '',
      [requiredOptions.limitedSize]: 0,
    },
    validationSchema: yup.object({
      [requiredOptions.name]: yup.string()
        .required(warningMessage.organizationNameIsEmpty)
        .max(12, warningMessage.organizationNameLengthExceeded),
      [requiredOptions.limitedSize]: yup.number()
        .required(warningMessage.organizationLimitedSizeIsEmpty)
        .min(10, warningMessage.organizationLimitedSizeError)
        .max(500, warningMessage.organizationLimitedSizeError)
    }),
    onSubmit: (options) => {
      const requestBody = {
        [requiredOptions.name]: options[requiredOptions.name],
        [requiredOptions.limitedSize]: options[requiredOptions.limitedSize],
      };

      authenticatedRequest({
        method: 'POST',
        url: makeApiUrl(ApiPath.createOrganization),
        data: {...requestBody}
      })
        .then((res) => {
          if (res.status === httpStatus.created) {
            alert('조직이 생성되었습니다.')
          }
        })
        .catch(err => console.log(err));
    }
  });

  const handleChange = (event) => {
    formik.handleChange(event);
  }

  const handleCreateOrganization = (event) => {
    event.preventDefault();
    formik.handleSubmit(event);
  }

  return (
    <CentralizeComponentWrapper>
      <DataInputWrapper>
        {Object.keys(requiredOptions).map(key => (
          <InputBox key={key}>
            <label htmlFor={requiredOptions[key]}>{labelElements[key]}</label>
            <DataInput
              type='text'
              name={requiredOptions[key]}
              onChange={handleChange}
            />
            {
              formik.touched[key]
              && formik.errors[key]
              && <Text.warning >{formik.errors[key]}</Text.warning>
            }
          </InputBox>
        ))}
        <SubmitButton type='submit' onClick={handleCreateOrganization}>
          Create Organization
        </SubmitButton>
      </DataInputWrapper>
    </CentralizeComponentWrapper>
  )
}

export default OrganizationCreation;