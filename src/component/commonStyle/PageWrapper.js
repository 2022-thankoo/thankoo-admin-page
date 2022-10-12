import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`;

export const CentralizeComponentWrapper = styled(PageWrapper)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;