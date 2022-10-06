import styled from "styled-components";

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

export const InputCouponMessage = styled.textarea.attrs({maxLength: 100})`
  width: 192px;
  margin-bottom: 5px;
  height: 100px;
`;
