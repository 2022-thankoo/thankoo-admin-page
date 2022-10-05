import styled from "styled-components";
import PageWrapper from "../../component/commonStyle/PageWrapper";

export const CouponCreationPageWrapper = styled(PageWrapper)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  width: 500px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`;

export const OptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin-bottom: 5px;
`;

export const OptionLabel = styled.label`
`;

export const InputCouponOptions = styled.input`
>>>>>>> main
  height: 17px;
  width: 192px;
  margin-bottom: 5px;
`;

export const InputCouponMessage = styled.textarea.attrs({maxLength: 100})`
  width: 192px;
  margin-bottom: 5px;
  height: 100px;
`;

export const CouponCreationPageButton = styled.button`
  margin-top: 15px;
  width: 200px;
`;
