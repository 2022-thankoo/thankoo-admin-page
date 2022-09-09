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
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`;

export const InputTheNumberOfCoupon = styled.input`
  height: 17px;
  width: 192px;
  margin-bottom: 5px;
`;

export const CouponCreationPageButton = styled.button`
  margin-top: 10px;
  width: 200px;
`;
