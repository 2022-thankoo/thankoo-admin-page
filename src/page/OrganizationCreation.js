import AuthorizationWrapper from "../component/AuthorizationWrapper";
import {CentralizeComponentWrapper} from "../component/commonStyle/PageWrapper";
import {DataInput, DataInputWrapper, InputBox, SubmitButton} from "../component/commonStyle/DataInput";

function OrganizationCreation() {

  const requiredOptions = {
    organizationName: 'organizationName',
    limitedSize: 'limitedSize',
  };

  const labelElements = {
    [requiredOptions.organizationName]: '조직 이름을 입력해주세요',
    [requiredOptions.limitedSize]: '조직 인원 제한을 입력해주세요',
  };

  return (
    <AuthorizationWrapper>
      <CentralizeComponentWrapper>
        <DataInputWrapper>
          {Object.keys(requiredOptions).map(key => (
            <InputBox>
              <label htmlFor={requiredOptions[key]}>{labelElements[key]}</label>
              <DataInput
                type='text'
                name={requiredOptions[key]}
              />
            </InputBox>
          ))}
          <SubmitButton type='submit'>
            Create Organization
          </SubmitButton>
        </DataInputWrapper>
      </CentralizeComponentWrapper>
    </AuthorizationWrapper>
  )
}

export default OrganizationCreation;