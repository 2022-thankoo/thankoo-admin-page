import styled from "styled-components";

export const ModalBox = styled.section`
  height: 460px;
  width: 551px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -275.5px;
  margin-top: -230px;
  border-radius: 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const CloseModalButton = styled.button`
  align-self: end;
`;
